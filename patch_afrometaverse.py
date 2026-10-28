# Adds the AfroMetaverse project to your data.js without touching your other edits.
import sys
s = open('data.js', encoding='utf-8').read()
if 'id: "afrometaverse"' in s:
    print('Already added. Nothing to do.'); sys.exit()
proj = '''{ id: "afrometaverse", type: "design", placeholder: false, status: "In progress",
    title: "AfroMetaverse Game UI/UX", category: "Game & Web UI/UX",
    description: "UI/UX design for AfroMetaverse, a game project I am designing as the UI/UX designer. Work in progress: landing page, city explorer, marketplace, job terminal, wallet and profile.",
    tools: ["Figma"],
    image: "images/afrometaverse/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [
      ["images/afrometaverse/landing.webp", "Landing page"],
      ["images/afrometaverse/explorer.webp", "Virtual city explorer"],
      ["images/afrometaverse/marketplace.webp", "Marketplace and asset details"],
      ["images/afrometaverse/metawork.webp", "MetaWork terminal and job details"],
      ["images/afrometaverse/wallet.webp", "MetaNaira wallet and ledger"],
      ["images/afrometaverse/profile.webp", "Citizen profile and account"]
    ],
    case: { Problem: "Add the problem this game set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the interface.",
            "Design Process": "Add your process: flows, wireframes, iterations, and how you work with the team.",
            "Final Solution": "A dark, gold-accented interface for an African-inspired metaverse: a landing page, a city explorer with district navigation, a marketplace with an asset inspector, a job terminal with escrow milestones, a wallet with a transaction ledger and a citizen profile. The designs are still in progress.",
            Outcome: "Add an outcome only if you have real results." } },'''
marker = '{ id: "moniepoint"'
if marker not in s:
    print('Could not find where to insert it. Send me a screenshot of the top of data.js.'); sys.exit(1)
s = s.replace(marker, proj + '\n  ' + marker, 1)
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
