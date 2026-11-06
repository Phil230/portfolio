# Adds the WorkPay project to your data.js without touching your other edits.
import sys
s = open('data.js', encoding='utf-8').read()
if 'id: "workpay"' in s:
    print('Already added. Nothing to do.'); sys.exit()
proj = '''{ id: "workpay", type: "design", placeholder: false,
    title: "WorkPay Platform UI", category: "Web UI/UX",
    description: "UI design for WorkPay, a workforce and payroll platform with milestone-based escrow payments: home, tasks, payments, task creation and work agreement screens.",
    tools: ["Figma"],
    image: "images/workpay/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [
      ["images/workpay/home.webp", "Home dashboard"],
      ["images/workpay/tasks.webp", "Task management dashboard"],
      ["images/workpay/intake.webp", "Task intake and creation"],
      ["images/workpay/agreement.webp", "Work agreement and approval"],
      ["images/workpay/payments.webp", "Payments dashboard and financial activity"]
    ],
    case: { "Key decisions": "A light interface with one lime-green accent and dark green panels for key figures. Dashboards open with summary cards, then lists with a side panel for detail. Task creation runs in four steps with a live brief preview. The work agreement breaks the deal into milestones and asks for a review checklist before approval.",
            "My role": "UI designer on the project." } },'''
marker = '{ id: "moniepoint"'
if marker not in s:
    print('Could not find where to insert it. Send me a screenshot of the top of data.js.'); sys.exit(1)
s = s.replace(marker, proj + '\n  ' + marker, 1)
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
