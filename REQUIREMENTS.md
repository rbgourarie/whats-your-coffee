# What's Your Coffee? — Requirements

## Concept
A personality quiz that reveals your coffee match. No personality labels — the coffee *is* the result. Tone: silly and fun, grounded in real coffee facts. The result feels like a reveal, not a category.

## Coffee Results (12)
Each result: coffee name + real fact + cheeky one-liner about what it says about you.

1. **Espresso** — *30ml of concentrated coffee, consumed in about two seconds.* You make decisions fast and you stand by them. Even the bad ones.
2. **Cortado** — *Equal parts espresso and steamed milk — no more, no less.* You have strong opinions about ratios. Always the rational one, right?
3. **Nitro Cold Brew** — *Cold brew with nitrogen gas forced through it, creating a silky, Guinness-like pour.* Smooth on the outside. Absolutely unhinged underneath.
4. **Turkish Coffee** — *Unfiltered, boiled twice, served with the grounds still in the cup.* You contain multitudes. Also sediment.
5. **Flat White** — *A double ristretto in less milk than a latte — stronger than it looks.* You've got a lot going on. Most of it is going fine, actually.
6. **Vietnamese Iced Coffee** — *Robusta beans dripped slowly over sweetened condensed milk and ice.* Patience is a virtue. So is sweetened condensed milk. You have both.
7. **Moka Pot** — *Brewed on a stovetop at 1.5 atmospheres of pressure. No electricity required.* Makes a sound like it's about to explode. It's not. Probably.
8. **Affogato** — *A shot of espresso poured directly over vanilla gelato.* Technically a dessert. Technically a coffee. You refuse to be categorized, and that's the beauty of the thing. 
9. **Cold Brew Concentrate** — *Steeped in cold water for 24 hours, too intense to drink straight.* Too intense to drink straight. Consider this a warning.
10. **Pour-Over** — *Water at exactly 200°F, poured in slow deliberate circles over single-origin beans.* You have a whole process. Life has rules.
11. **Red Eye** — *Drip coffee with a shot of espresso dropped in. It has no known upper limit.* Neither do you, apparently.
12. **Café de Olla** — *Mexican coffee brewed with cinnamon, piloncillo, and cloves in a clay pot.* You show up for people. People are your thing. 

## Result Display
**Single recommendation only** — show the one coffee that matches best. No percentages, no breakdown. Just the reveal.

## Quiz Questions (7)

**Q1. Your weekend plans fall apart at the last minute. You:**
- Roll with it — honestly kind of relieved → Moka Pot, Nitro Cold Brew, Affogato
- Brief flash of frustration, then fine → Flat White, Cortado
- Already had a backup plan → Pour-Over, Cold Brew Concentrate
- This *was* your plan. You just didn't say that. → Turkish Coffee, Vietnamese Iced Coffee

**Q2. New restaurant. How do you order?**
- First thing that sounds good, done → Espresso, Red Eye
- Read every option, ask one clarifying question → Pour-Over, Cortado
- Whatever the server recommends → Café de Olla, Vietnamese Iced Coffee
- "Can I get two things? I'll get two things." → Affogato, Turkish Coffee

**Q3. A package arrives that you don't remember ordering. You:**
- Open it immediately → Espresso, Red Eye
- Check your email history first → Pour-Over, Cortado
- Set it aside, you'll deal with it later → Cold Brew Concentrate, Vietnamese Iced Coffee
- Shake it first → Moka Pot, Nitro Cold Brew

**Q4. Pick tonight's movie:**
- Something you've seen before → Vietnamese Iced Coffee, Café de Olla
- The most critically acclaimed thing available → Pour-Over, Cold Brew Concentrate
- Whatever's trending, no research → Espresso, Red Eye
- Start three things, finish none → Affogato, Moka Pot, Flat White

**Q5. Your texts are mostly:**
- Short and sent immediately → Espresso, Cortado
- Long, with full context → Pour-Over, Turkish Coffee
- Memes and reaction images → Nitro Cold Brew, Red Eye, Moka Pot
- Voice memos → Café de Olla, Vietnamese Iced Coffee, Affogato

**Q6. Pick a superpower:**
- Stop time → Cold Brew Concentrate, Pour-Over
- Read minds → Turkish Coffee, Cortado
- Be in two places at once → Flat White, Affogato
- Unlimited energy → Red Eye, Espresso, Moka Pot

**Q7. It's 2am. You are:**
- Asleep. Obviously. → Vietnamese Iced Coffee, Café de Olla
- Finishing something you said you'd finish tomorrow → Flat White, Cortado
- Starting something new, actually → Nitro Cold Brew, Red Eye, Espresso
- Technically awake but in a dissociative state, scrolling → Turkish Coffee, Moka Pot, Cold Brew Concentrate

## Scoring Logic
Each answer awards points to 1–3 coffees. Tally across all 7 questions. Highest score wins. In a tie, pick the first tied coffee in the list above.

## Visual Style
- **Layout:** Style 1E — playful, rounded cards, white card on gradient background
- **Colors:** Single-family teal gradient (light teal #5eead4 → mid #2dd4bf → deep #0d9488)
- **Font:** Nunito (rounded, friendly, bold)
- **Cards:** White, border-radius 28px, soft drop shadow
- **Progress:** Dot indicators across the top
- **Selected state:** Deep teal fill, white text, slight lift + shadow

## Images & Icons
- **Images:** None for now — can add coffee photos to result screen later
- **Icons:** None — text-only answers

## Tech Stack
- Next.js
- All quiz logic client-side (no backend needed)
