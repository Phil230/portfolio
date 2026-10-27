# Re-applies everything that may be missing from your GitHub copy. Safe to run more than once.
import re, subprocess, sys
for script in ['patch_estate.py', 'patch_moniepoint.py']:
    subprocess.run([sys.executable, script], check=True)
s = open('data.js', encoding='utf-8').read()
for pid in ['okada', 'ledger', 'idoma', 'elearning', 'moniepoint', 'estate']:
    i = s.find('id: "%s"' % pid)
    if i == -1:
        print('skipped (not in data.js):', pid); continue
    m = re.compile(r'tools:\s*\[[^\]]*\]').search(s, i)
    s = s[:m.start()] + 'tools: ["Figma"]' + s[m.end():]
open('data.js', 'w', encoding='utf-8').write(s)
print('Figma set on', len(re.findall(r'tools: \["Figma"\]', s)), 'projects')
print('Projects:', ', '.join(re.findall(r'id: "([a-z0-9]+)"', s)))
print('Email:', re.search(r'email:\s*"([^"]*)"', s).group(1))
print('All done. Now test the site, then add, commit and push.')
