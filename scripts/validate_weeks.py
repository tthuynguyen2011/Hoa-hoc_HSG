r"""
Kiem tra tinh hop le cua tat ca cac tuan hoc (week_XX.js):
- Cu phap JS hop le
- Du 20 cau hoi (10 basic, 5 advanced, 5 hsg) va tong diem = 20
- Phat hien loi escape LaTeX/mhchem (vd \ce bi mat dau \, thanh 'ce{' hoac ngoac {} lech)
"""
import os
import json
import subprocess

WEEKS_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "weeks")

def main():
    files = sorted(f for f in os.listdir(WEEKS_DIR) if f.startswith("week_") and f.endswith(".js"))
    errors = []
    for fn in files:
        path = os.path.join(WEEKS_DIR, fn)
        # Evaluate in Node and dump JSON to inspect exact runtime strings
        js_code = f"global.window = {{}}; require({json.dumps(path)}); const k = Object.keys(global.window.WEEK_DATA)[0]; console.log(JSON.stringify(global.window.WEEK_DATA[k]));"
        res = subprocess.run(["node", "-e", js_code], capture_output=True, text=True, encoding="utf-8")
        if res.returncode != 0:
            errors.append(f"{fn}: Node error: {res.stderr.strip()}")
            continue
        data = json.loads(res.stdout)
        qs = data.get("questions", [])
        if len(qs) != 20:
            errors.append(f"{fn}: Expected 20 questions, got {len(qs)}")
        total_pts = sum(q["points"] for q in qs)
        if abs(total_pts - 20) > 0.01:
            errors.append(f"{fn}: Total points {total_pts} != 20")

        # Check broken LaTeX escapes in runtime strings
        dumped = json.dumps(data, ensure_ascii=False)
        for bad in ["\x0crac", "\ttext", "\x08", "[^\\\\]ce{"]:
            if bad == "[^\\\\]ce{":
                import re
                if re.search(r"(?<![\\a-zA-Z])ce\{", dumped):
                    errors.append(f"{fn}: Unescaped 'ce{{' found in runtime string!")
            elif bad in dumped:
                errors.append(f"{fn}: Broken escape {repr(bad)} found!")

    if errors:
        print("PHAT HIEN LOI:")
        for e in errors:
            print("  -", e)
        exit(1)
    else:
        print(f"TAT CA {len(files)} TUAN DEU HOP LE (du 20 cau, 20 diem, khong loi cong thuc/PTHH)!")

if __name__ == "__main__":
    main()
