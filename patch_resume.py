# Adds the "open to roles" line and a place for your résumé link to data.js.
import sys
s = open('data.js', encoding='utf-8').read()
if 'availability:' in s:
    print('Already added. Nothing to do.'); sys.exit()
i = s.index('const PROFILE = {') + len('const PROFILE = {')
s = s[:i] + '\n  availability: "Open to roles in product management, frontend, mobile and backend development.",\n  resume: "",   // after you add your PDF: "resume/Philip-Edward-Resume.pdf"' + s[i:]
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Your "open to roles" line is added. The resume button stays hidden until you set the resume link.')
