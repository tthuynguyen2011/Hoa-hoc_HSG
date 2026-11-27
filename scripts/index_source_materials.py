"""
Script quet va lap chi muc kho tai lieu Hoa hoc THCS (tu thu muc goc)
de phuc vu bien soan noi dung cac tuan tiep theo (Tuan 3 -> Tuan 72).
"""
import os
import json
import docx

SOURCE_ROOT = r"C:\Users\ASUS\Desktop\Thủy\Gấu học\Lớp 6\Hóa\Hoá THCS-20260918T074517Z-1-001\Hoá THCS"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "source_catalog.json")

KEYWORDS_GRADE = {
    "KHTN 6": ["lop 6", "lớp 6", "khtn 6", "khtn6"],
    "KHTN 7": ["lop 7", "lớp 7", "khtn 7", "khtn7"],
    "KHTN 8": ["lop 8", "lớp 8", "khtn 8", "khtn8", "hsg hoá 8", "hsg hoa 8"],
    "KHTN 9": ["lop 9", "lớp 9", "khtn 9", "khtn9", "hsg 9", "hsg9"],
    "Chuyen 10": ["chuyên", "chuyen", "vào 10", "vao 10"],
}

def detect_grade(path_str: str) -> str:
    low = path_str.lower()
    for grade, kws in KEYWORDS_GRADE.items():
        if any(k in low for k in kws):
            return grade
    return "Khac"

def has_rubric_docx(filepath: str) -> bool:
    try:
        doc = docx.Document(filepath)
        for t in doc.tables:
            if len(t.rows) >= 3 and len(t.columns) >= 2:
                hdr = " ".join(c.text.strip().lower() for c in t.rows[0].cells)
                if "điểm" in hdr or "hướng dẫn" in hdr or "nội dung" in hdr:
                    return True
        text_tail = "\n".join(p.text.lower() for p in doc.paragraphs[-40:])
        return ("hướng dẫn chấm" in text_tail) or ("đáp án" in text_tail)
    except Exception:
        return False

def win_long_path(p: str) -> str:
    if os.name == "nt" and len(p) > 240 and not p.startswith("\\\\?\\"):
        return "\\\\?\\" + os.path.abspath(p)
    return p

def build_catalog():
    if not os.path.exists(SOURCE_ROOT):
        print(f"Khong tim thay thu muc nguon: {SOURCE_ROOT}")
        return
    catalog = []
    for dirpath, _, filenames in os.walk(win_long_path(SOURCE_ROOT)):
        for fn in filenames:
            ext = os.path.splitext(fn)[1].lower()
            if ext not in {".docx", ".pdf", ".doc"} or fn.startswith("~$"):
                continue
            full = os.path.join(dirpath, fn)
            clean_dir = dirpath[4:] if dirpath.startswith("\\\\?\\") else dirpath
            rel = os.path.relpath(os.path.join(clean_dir, fn), SOURCE_ROOT)
            try:
                size_kb = round(os.path.getsize(full) / 1024, 1)
            except OSError:
                size_kb = None
            item = {
                "rel_path": rel,
                "ext": ext,
                "grade_tag": detect_grade(rel),
                "size_kb": size_kb,
                "has_hdc": has_rubric_docx(full) if ext == ".docx" else None,
            }
            catalog.append(item)

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)
    print(f"Da lap chi muc {len(catalog)} tai lieu -> {OUTPUT_PATH}")

if __name__ == "__main__":
    build_catalog()
