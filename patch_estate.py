# Adds the real estate homepage project to your data.js without touching your other edits.
import sys
s = open('data.js', encoding='utf-8').read()
if 'id: "estate"' in s:
    print('Already added. Nothing to do.'); sys.exit()
proj = '''{ id: "estate", type: "design", placeholder: false,
    title: "Real Estate Website Homepage", category: "Web UI/UX",
    description: "A homepage design for a real estate website: property search, featured listings, city browsing, app promotion and latest news.",
    tools: [],                       // add the tools you used, e.g. "Figma"
    image: "images/estate/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [["images/estate/homepage.webp", "Homepage, full length"]],
    case: { Problem: "Add the problem this website set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the layout.",
            "Design Process": "Add your process: structure, wireframes, iterations.",
            "Final Solution": "A desktop homepage with a hero and property search, featured property cards with price and details, an email sign-up band, a recommended-property slider, a city browser, an app promotion banner, a latest-news section and a footer.",
            Outcome: "Add an outcome only if you have real results." } },'''
marker = '{ id: "moniepoint"'
if marker not in s:
    print('Could not find where to insert it. Send me a screenshot of the top of data.js.'); sys.exit(1)
s = s.replace(marker, proj + '\n  ' + marker, 1)
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
