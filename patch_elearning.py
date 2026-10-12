# Adds the e-learning homepage project to your data.js without touching your other edits.
import sys
s = open('data.js', encoding='utf-8').read()
if 'id: "elearning"' in s:
    print('Already added. Nothing to do.'); sys.exit()
proj = '''{ id: "elearning", type: "design", placeholder: false,
    title: "E-Learning Homepage", category: "Mobile UI/UX",
    description: "A mobile homepage design for an e-learning site: hero, benefits, course listings, testimonials, pricing and FAQ.",
    tools: [],                       // add the tools you used, e.g. "Figma"
    image: "images/elearning/cover.webp", link: "",
    galleryLayout: "phone",
    gallery: [["images/elearning/homepage.webp", "Mobile homepage, full length"]],
    case: { Problem: "Add the problem this homepage set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the layout.",
            "Design Process": "Add your process: structure, wireframes, iterations.",
            "Final Solution": "A single-page mobile homepage: a hero with two calls to action, a benefits list, course cards showing duration and level, testimonials, monthly and yearly pricing plans, an FAQ and a footer.",
            Outcome: "Add an outcome only if you have real results." } },'''
marker = '{ id: "moniepoint"'
if marker not in s:
    print('Could not find where to insert it. Send me a screenshot of the top of data.js.'); sys.exit(1)
s = s.replace(marker, proj + '\n  ' + marker, 1)
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
