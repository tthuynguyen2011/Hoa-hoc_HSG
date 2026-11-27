"""
Trích xuất kho đề thi HSG KHTN/Hóa 8, HSG 9 (2025-2026), Cô Yến AMS và Chuyên Hóa vào 10
từ thư mục tài liệu gốc thành bộ đề thi chuẩn JSON/JS cho Phòng thi HSG trên Web App.
"""
import os
import re
import json
import docx
from docx.oxml.ns import qn

SOURCE_ROOT = r"C:\Users\ASUS\Desktop\Thủy\Gấu học\Lớp 6\Hóa\Hoá THCS-20260918T074517Z-1-001\Hoá THCS"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "exams")


def win_long_path(p: str) -> str:
    if os.name == "nt" and len(p) > 240 and not p.startswith("\\\\?\\"):
        return "\\\\?\\" + os.path.abspath(p)
    return p


def extract_para_text(para) -> str:
    """Trích xuất văn bản paragraph bao gồm cả text trong công thức Word (m:oMath)."""
    parts = []
    for elem in para._element.iter():
        tag = elem.tag
        if tag == qn("w:t") or tag.endswith("}t"):
            if elem.text:
                parts.append(elem.text)
        elif tag == qn("w:tab"):
            parts.append(" ")
    text = "".join(parts)
    return re.sub(r"\s+", " ", text).strip()


def extract_table_rows(table):
    rows = []
    for r in table.rows:
        cells = [re.sub(r"\s+", " ", c.text).strip() for c in r.cells]
        if any(cells):
            rows.append(cells)
    return rows


def parse_docx_exam(filepath: str, category: str, default_duration: int):
    doc = docx.Document(win_long_path(filepath))
    paras = [extract_para_text(p) for p in doc.paragraphs]
    paras = [p for p in paras if p]

    # Tìm vị trí bắt đầu Hướng dẫn chấm / Đáp án (nếu có trong cùng file)
    hdc_idx = None
    for i, p in enumerate(paras):
        low = p.lower()
        if i > 10 and (
            re.match(r"^(hướng dẫn chấm|đáp án|biểu điểm|hdc)\b", low)
            or "hướng dẫn chấm" in low[:35]
        ):
            hdc_idx = i
            break

    body_paras = paras[:hdc_idx] if hdc_idx else paras
    hdc_paras = paras[hdc_idx:] if hdc_idx else []

    # Bóc tách phần Hóa học nếu là đề KHTN tổng hợp (Lý-Hóa-Sinh)
    # Tìm đoạn bắt đầu Phần Hóa học nếu có
    chem_start = 0
    chem_end = len(body_paras)
    for i, p in enumerate(body_paras):
        low = p.lower()
        if re.search(r"(phần|môn|lĩnh vực)\s*(ii\.?\s*)?(hóa học|chất và sự biến đổi)", low):
            chem_start = i
            break
    if chem_start > 0:
        for j in range(chem_start + 1, len(body_paras)):
            low = body_paras[j].lower()
            if re.search(r"^(i+|ii+|iii+|b|c)\.?\s*(phần|lĩnh vực)?\s*(vật l[íý]|sinh học|năng lượng)", low):
                chem_end = j
                break
        body_paras = body_paras[chem_start:chem_end]

    # Bóc tách câu trắc nghiệm (MCQ) & câu tự luận (Essay)
    questions = []
    q_num = 0
    i = 0
    while i < len(body_paras):
        line = body_paras[i]
        # Khớp "Câu 1." hoặc "Câu 1:" hoặc "Câu I."
        m = re.match(r"^(Câu|Bài)\s+(\d+|[IVX]+)[\.\:\s]\s*(.*)$", line, re.IGNORECASE)
        if m:
            q_num += 1
            prompt_lines = [m.group(3).strip()] if m.group(3).strip() else []
            opts = []
            j = i + 1
            while j < len(body_paras):
                nxt = body_paras[j]
                if re.match(r"^(Câu|Bài)\s+(\d+|[IVX]+)[\.\:\s]", nxt, re.IGNORECASE):
                    break
                # Kiểm tra xem có phải dòng chứa đáp án A. B. C. D. không
                opt_matches = re.findall(r"([A-D]\.\s*.*?)(?=(?:\s+[A-D]\.\s)|$)", nxt)
                if opt_matches and re.match(r"^[A-D]\.\s", nxt):
                    opts.extend([o.strip() for o in opt_matches])
                else:
                    prompt_lines.append(nxt)
                j += 1

            prompt_text = "<br/>".join(prompt_lines).strip()
            if not prompt_text and not opts:
                i = j
                continue

            # Xác định điểm (nếu có ghi "(2,0 điểm)")
            pts_m = re.search(r"\((\d+[,\.]\d+|\d+)\s*(?:điểm|đ)\)", line + " " + prompt_text, re.IGNORECASE)
            pts = float(pts_m.group(1).replace(",", ".")) if pts_m else (0.5 if len(opts) >= 4 else 2.0)

            if len(opts) >= 4:
                questions.append({
                    "id": f"q_{q_num}",
                    "num": q_num,
                    "type": "mcq",
                    "points": pts,
                    "prompt": prompt_text,
                    "options": opts[:4],
                    "answer": None,
                    "solution": ""
                })
            else:
                questions.append({
                    "id": f"q_{q_num}",
                    "num": q_num,
                    "type": "essay_hsg",
                    "points": pts,
                    "prompt": prompt_text,
                    "solution": "",
                    "rubric": []
                })
            i = j
        else:
            i += 1

    # Bóc tách đáp án trắc nghiệm & ba rem tự luận từ bảng trong file (nếu có)
    rubric_tables = []
    for tbl in doc.tables:
        rows = extract_table_rows(tbl)
        if len(rows) >= 2:
            hdr = " ".join(rows[0]).lower()
            if "điểm" in hdr or "nội dung" in hdr or "đáp án" in hdr or "câu" in hdr:
                rubric_tables.append(rows)

    # Cố gắng ghép đáp án trắc nghiệm dạng bảng (Câu 1 | A | Câu 2 | C...)
    mcq_ans_map = {}
    for rows in rubric_tables:
        for r in rows:
            for k in range(len(r) - 1):
                if re.fullmatch(r"(?:Câu\s*)?\d+", r[k], re.IGNORECASE) and re.fullmatch(r"[A-D]", r[k + 1].strip(), re.IGNORECASE):
                    num = int(re.search(r"\d+", r[k]).group(0))
                    mcq_ans_map[num] = ord(r[k + 1].strip().upper()) - ord("A")

    # Cố gắng ghép đáp án trắc nghiệm từ hdc_paras (vd: "1.A  2.B  3.C")
    for p in hdc_paras:
        for m in re.finditer(r"(\d+)\s*[\.\:\-\)]\s*([A-D])\b", p):
            mcq_ans_map[int(m.group(1))] = ord(m.group(2).upper()) - ord("A")

    # Gán đáp án MCQ vào questions
    for q in questions:
        if q["type"] == "mcq" and q["num"] in mcq_ans_map:
            q["answer"] = mcq_ans_map[q["num"]]

    # Gán HDC / Ba rem từ rubric_tables vào các câu tự luận
    essay_qs = [q for q in questions if q["type"] == "essay_hsg"]
    if rubric_tables and essay_qs:
        # Gom các dòng ba rem có cột điểm
        rubric_rows = []
        for rows in rubric_tables:
            hdr = " ".join(rows[0]).lower()
            if "nội dung" in hdr and "điểm" in hdr:
                for r in rows[1:]:
                    if len(r) >= 2:
                        rubric_rows.append(r)
        # Gắn tóm tắt HDC vào câu tự luận nếu khớp số câu hoặc chia đều
        if rubric_rows:
            for r in rubric_rows:
                row_text = " | ".join(r)
                # Tìm câu số mấy ở cột đầu
                m_c = re.search(r"(?:Câu|Ý|Bài)?\s*(\d+)", r[0])
                pts_m = re.search(r"(\d+[,\.]\d+)", r[-1])
                r_pts = float(pts_m.group(1).replace(",", ".")) if pts_m else 0.25
                step_txt = r[1] if len(r) >= 3 else r[0]
                if m_c:
                    target_idx = int(m_c.group(1)) - 1
                    if 0 <= target_idx < len(essay_qs):
                        essay_qs[target_idx]["rubric"].append({"step": step_txt, "points": r_pts})
                        continue
                # Fallback: đưa vào câu tự luận đầu tiên chưa đầy
                essay_qs[0]["rubric"].append({"step": f"{r[0]}: {step_txt}", "points": r_pts})

    # Nếu có hdc_paras dạng văn bản, nối vào solution của các câu tự luận chưa có solution
    if hdc_paras and essay_qs:
        hdc_text = "<br/>".join(hdc_paras[:40])
        if not essay_qs[-1]["solution"]:
            essay_qs[-1]["solution"] = f"<em>Trích Hướng dẫn chấm:</em><br/>{hdc_text}"

    has_auto_key = any(q["type"] == "mcq" and q["answer"] is not None for q in questions) or any(
        q.get("rubric") or q.get("solution") for q in essay_qs
    )

    return {
        "category": category,
        "durationMinutes": default_duration,
        "hasKey": has_auto_key,
        "questions": questions,
    }


def collect_exam_sources():
    sources = []

    def add_folder(rel_folder, category, duration, limit=None):
        folder = os.path.join(SOURCE_ROOT, rel_folder)
        if not os.path.exists(folder):
            return
        files = sorted(
            f for f in os.listdir(folder)
            if f.lower().endswith(".docx") and not f.startswith("~$") and "ma trận" not in f.lower()
        )
        if limit:
            files = files[:limit]
        for f in files:
            sources.append((os.path.join(folder, f), f, category, duration))

    add_folder("HSG HOÁ 8", "HSG Hóa 8", 120)
    add_folder("Đề thi thử HSG 9 cô Yến AMS 25-26", "HSG 9 Cô Yến AMS (25-26)", 150)
    add_folder("HSG 9 [25-26]", "HSG KHTN/Hóa 9 (25-26)", 150, limit=18)
    add_folder("HSG9-2526", "HSG 9 Tỉnh/TP (25-26)", 150, limit=15)
    add_folder("[ FILE TRỌN BỘ 60 ĐỀ ] VÀO 10 CHUYÊN HÓA_ocDDVdQoo0", "Chuyên Hóa vào 10 (25-26)", 150, limit=25)
    return sources


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    sources = collect_exam_sources()
    index = []
    exam_id = 0

    for full_path, filename, category, duration in sources:
        try:
            parsed = parse_docx_exam(full_path, category, duration)
            if len(parsed["questions"]) < 3:
                continue
            exam_id += 1
            title = os.path.splitext(filename)[0]
            # Chuẩn hóa tên đề gọn đẹp
            title = re.sub(r"^\d+[\.\s\-]*", "", title).strip()
            total_pts = round(sum(q["points"] for q in parsed["questions"]), 2)

            exam_obj = {
                "id": exam_id,
                "title": title,
                "category": category,
                "durationMinutes": duration,
                "totalPoints": total_pts,
                "hasKey": parsed["hasKey"],
                "questions": parsed["questions"],
            }

            out_js = os.path.join(OUT_DIR, f"exam_{exam_id:03d}.js")
            with open(out_js, "w", encoding="utf-8") as f:
                f.write("window.HSG_EXAMS = window.HSG_EXAMS || {};\n")
                f.write(f"window.HSG_EXAMS[{exam_id}] = ")
                json.dump(exam_obj, f, ensure_ascii=False)
                f.write(";\n")

            index.append({
                "id": exam_id,
                "title": title,
                "category": category,
                "durationMinutes": duration,
                "questionCount": len(parsed["questions"]),
                "mcqCount": sum(1 for q in parsed["questions"] if q["type"] == "mcq"),
                "essayCount": sum(1 for q in parsed["questions"] if q["type"] == "essay_hsg"),
                "totalPoints": total_pts,
                "hasKey": parsed["hasKey"],
            })
        except Exception as e:
            print(f"Skip {filename}: {e}")

    idx_js = os.path.join(OUT_DIR, "exams_index.js")
    with open(idx_js, "w", encoding="utf-8") as f:
        f.write("window.HSG_EXAMS_INDEX = ")
        json.dump(index, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Da tao thanh cong {len(index)} de thi HSG/Chuyen Hoa -> {OUT_DIR}")


if __name__ == "__main__":
    main()
