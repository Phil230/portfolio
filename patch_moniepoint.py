# Fills in the Moniepoint project in your data.js without touching your other edits.
import re, sys
s = open('data.js', encoding='utf-8').read()
if 'images/moniepoint/n1.webp' in s:
    print('Already updated. Nothing to do.'); sys.exit()
i = s.find('id: "moniepoint"')
if i == -1:
    print('Could not find the Moniepoint project in data.js.'); sys.exit(1)
j = s.find('{ id: "', i + 5); j = len(s) if j == -1 else j
seg = s[i:j]
seg = re.sub(r'description:\s*"[^"]*"', 'description: "A UI redesign of the Moniepoint mobile app, covering the home screen and the send-money flow."', seg, count=1)
seg = re.sub(r'image:\s*""', 'image: "images/moniepoint/cover.webp"', seg, count=1)
gallery = 'gallery: [["images/moniepoint/n1.webp", "Home"], ["images/moniepoint/n2.webp", "Send money"]],'
seg = re.sub(r'\n(\s*)case:', lambda m: '\n' + m.group(1) + gallery + '\n' + m.group(1) + 'case:', seg, count=1)
seg = re.sub(r'"Final Solution":\s*"[^"]*"', '"Final Solution": "A redesigned home screen with a balance card, quick actions for sending money, paying bills and buying airtime, a promo banner and recent transactions, and a send-money screen with recent recipients, three transfer options and a tip on finding people by username."', seg, count=1)
s = s[:i] + seg + s[j:]
open('data.js', 'w', encoding='utf-8').write(s)
print('Done. Refresh your browser with Ctrl + Shift + R.')
