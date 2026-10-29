# Replaces the About text in your data.js. Your other edits stay.
import json
ABOUT = [
 "I started designing digital products in 2023, drawn in by a love of design and creativity.",
 "Since then I have been learning to build what I design, using Python, web development, APIs, Git and GitHub, and AI tools. I designed a live English to Idoma translator and helped build it.",
 "I am open to roles in product management, frontend, mobile or backend development, where I can connect design decisions to how things are built.",
]
s = open('data.js', encoding='utf-8').read()
i = s.index('about:'); a = s.index('[', i); d = 0
for e in range(a, len(s)):
    if s[e] == '[': d += 1
    elif s[e] == ']':
        d -= 1
        if d == 0: break
new = '[\n    ' + ',\n    '.join(json.dumps(t, ensure_ascii=False) for t in ABOUT) + '\n  ]'
s = s[:a] + new + s[e + 1:]
open('data.js', 'w', encoding='utf-8').write(s)
print('About text updated. Refresh your browser with Ctrl + Shift + R.')
