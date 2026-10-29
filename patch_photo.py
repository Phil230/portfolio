# Puts your photo in the About section without touching your other edits.
import re, sys
s = open('data.js', encoding='utf-8').read()
if 'images/philip.webp' in s:
    print('Already set. Nothing to do.'); sys.exit()
m = re.search(r'photo:\s*"[^"]*"', s)
if not m:
    print('Could not find the photo line in data.js.'); sys.exit(1)
s = s[:m.start()] + 'photo: "images/philip.webp"' + s[m.end():]
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
