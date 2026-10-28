# Removes the empty placeholder cards from your data.js. Your real projects stay.
import re
s = open('data.js', encoding='utf-8').read()
a = s.index('const PROJECTS = [')
end = s.index('\n];', a)
starts = [m.start() for m in re.finditer(r'\{ id: "', s[a:end])]
starts = [a + x for x in starts] + [end]
keep, removed = [], []
for i in range(len(starts) - 1):
    seg = s[starts[i]:starts[i + 1]]
    pid = re.match(r'\{ id: "(\w+)"', seg).group(1)
    (removed if 'placeholder: true' in seg else keep).append((pid, seg))
if not removed:
    print('No placeholder cards found. Nothing to remove.')
else:
    head = s[:starts[0]]
    body = ''.join(seg for _, seg in keep).rstrip()
    if not body.endswith(','): body += ','
    s = head + body + s[end:]
    open('data.js', 'w', encoding='utf-8').write(s)
    print('Removed:', ', '.join(p for p, _ in removed))
print('Kept:', ', '.join(p for p, _ in keep))
