# Makes the "open to roles" line on the site match your updated résumé.
import re, sys
s = open('data.js', encoding='utf-8').read()
new = 'Open to UI/UX and product design roles, and to product management, frontend, mobile or backend development roles.'
m = re.search(r'availability:\s*"[^"]*"', s)
if not m:
    print('Could not find the availability line. Run python3 patch_resume.py first.'); sys.exit(1)
s = s[:m.start()] + 'availability: ' + '"' + new + '"' + s[m.end():]
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. The open-to-roles line now matches your resume.')
