# Replaces the empty case-study text with short, true notes on each design's key decisions.
import json, re
T = {
 'okada': [('Key decisions', 'Riders can raise or lower the fare in ₦50 steps. The driver list shows price, rating and arrival time side by side. Payment is cash, with a clear "give the driver" confirmation.')],
 'ledger': [('Key decisions', 'The homepage leads with one main story beside a Most Read list. The article page adds topic context beside the text and related stories below it. The archive lets readers filter by category and date and sort the results.')],
 'idoma': [('Key decisions', 'The input panel has a red outline and the result panel a green one, so each side is easy to tell apart. A common phrases panel shows ready-made examples, such as "thank you". The live version is at idomaai.com.')],
 'elearning': [('Key decisions', 'Course cards show duration and level before the button. Pricing has a monthly and yearly switch and a Free versus Pro feature list with ticks and crosses. FAQs open and close with a plus button.')],
 'estate': [('Key decisions', 'The hero puts a property search (type, size and location) first. Listing cards show price, bedrooms, bathrooms and size at a glance. City browsing, a recommended-property slider and an app promo banner follow.')],
 'budget': [('Key decisions', 'The dashboard shows the remaining budget, a progress bar and a warning at 80%. Quick add takes an amount, category and funding source in one sheet. Reports compare the budget with spending and rank the categories.')],
 'afrometaverse': [('Key decisions', 'A dark interface with one gold accent for primary actions. The same top bar, with balance and Connect Node, appears on every screen. The designs are still in progress.'),
                   ('My role', 'UI/UX designer on the game team.')],
 'moniepoint': [('Key decisions', 'The home screen opens with the balance and four quick actions: send, bills, airtime and more. Transactions show a status tag such as Success or Processing. Send Money lists recent recipients and three transfer types, with a tip about finding people by @username.')],
}
s = open('data.js', encoding='utf-8').read()
done = []
for pid, rows in T.items():
    i = s.find('id: "%s"' % pid)
    if i == -1: continue
    c = s.find('case:', i)
    b = s.index('{', c); d = 0
    for e in range(b, len(s)):
        if s[e] == '{': d += 1
        elif s[e] == '}':
            d -= 1
            if d == 0: break
    new = '{ ' + ', '.join('%s: %s' % (json.dumps(k, ensure_ascii=False), json.dumps(v, ensure_ascii=False)) for k, v in rows) + ' }'
    s = s[:b] + new + s[e + 1:]
    done.append(pid)
open('data.js', 'w', encoding='utf-8').write(s)
print('Case text updated for:', ', '.join(done))
