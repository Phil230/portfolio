# Adds the Budget Tracker project to your data.js without touching your other edits.
import sys
s = open('data.js', encoding='utf-8').read()
if 'id: "budget"' in s:
    print('Already added. Nothing to do.'); sys.exit()
proj = '''{ id: "budget", type: "design", placeholder: false,
    title: "Budget Tracker App", category: "Mobile UI/UX",
    description: "A mobile budget tracker in naira: dashboard, expenses list, quick add, monthly reports and settings, with an app icon.",
    tools: ["Figma"],
    image: "images/budget/cover.webp", link: "",
    gallery: [
      ["images/budget/home.webp", "Home dashboard"],
      ["images/budget/expenses.webp", "All expenses"],
      ["images/budget/quickadd.webp", "Quick add"],
      ["images/budget/reports.webp", "Monthly reports"],
      ["images/budget/settings.webp", "Settings"],
      ["images/budget/icon.webp", "App icon"]
    ],
    case: { Problem: "Add the problem this app set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the flow.",
            "Design Process": "Add your process: flows, wireframes, iterations.",
            "Final Solution": "A mobile budget tracker in naira: a home dashboard with the remaining budget and a spending alert, an expenses list grouped by day with filters, a quick-add sheet, monthly reports with a budget-versus-spend bar and category breakdown, and a settings screen.",
            Outcome: "Add an outcome only if you have real results." } },'''
marker = '{ id: "moniepoint"'
if marker not in s:
    print('Could not find where to insert it. Send me a screenshot of the top of data.js.'); sys.exit(1)
s = s.replace(marker, proj + '\n  ' + marker, 1)
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
