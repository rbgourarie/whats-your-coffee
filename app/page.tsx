'use client'

import { useState } from 'react'

const COFFEES = [
  {
    id: 'espresso',
    name: 'Espresso',
    fact: '30ml of concentrated coffee, consumed in about two seconds.',
    tagline: 'You make decisions fast and you stand by them. Even the bad ones.',
  },
  {
    id: 'cortado',
    name: 'Cortado',
    fact: 'Equal parts espresso and steamed milk — no more, no less.',
    tagline: 'You have strong opinions about ratios. Always the rational one, right?',
  },
  {
    id: 'nitro',
    name: 'Nitro Cold Brew',
    fact: 'Cold brew with nitrogen gas forced through it, creating a silky, Guinness-like pour.',
    tagline: 'Smooth on the outside. Absolutely unhinged underneath.',
  },
  {
    id: 'turkish',
    name: 'Turkish Coffee',
    fact: 'Unfiltered, boiled twice, served with the grounds still in the cup.',
    tagline: 'You contain multitudes. Also sediment.',
  },
  {
    id: 'flat_white',
    name: 'Flat White',
    fact: 'A double ristretto in less milk than a latte — stronger than it looks.',
    tagline: `You've got a lot going on. Most of it is going fine, actually.`,
  },
  {
    id: 'vietnamese',
    name: 'Vietnamese Iced Coffee',
    fact: 'Robusta beans dripped slowly over sweetened condensed milk and ice.',
    tagline: 'Patience is a virtue. So is sweetened condensed milk. You have both.',
  },
  {
    id: 'moka',
    name: 'Moka Pot',
    fact: 'Brewed on a stovetop at 1.5 atmospheres of pressure. No electricity required.',
    tagline: `Makes a sound like it's about to explode. It's not. Probably.`,
  },
  {
    id: 'affogato',
    name: 'Affogato',
    fact: 'A shot of espresso poured directly over vanilla gelato.',
    tagline: 'Technically a dessert. Technically a coffee. You refuse to be categorized, and that\'s the beauty of the thing.',
  },
  {
    id: 'cold_brew',
    name: 'Cold Brew Concentrate',
    fact: 'Steeped in cold water for 24 hours, too intense to drink straight.',
    tagline: 'Too intense to drink straight. Consider this a warning.',
  },
  {
    id: 'pour_over',
    name: 'Pour-Over',
    fact: 'Water at exactly 200°F, poured in slow deliberate circles over single-origin beans.',
    tagline: 'You have a whole process. Life has rules.',
  },
  {
    id: 'red_eye',
    name: 'Red Eye',
    fact: 'Drip coffee with a shot of espresso dropped in. It has no known upper limit.',
    tagline: 'Neither do you, apparently.',
  },
  {
    id: 'cafe_de_olla',
    name: 'Café de Olla',
    fact: 'Mexican coffee brewed with cinnamon, piloncillo, and cloves in a clay pot.',
    tagline: 'You show up for people. People are your thing.',
  },
]

const QUESTIONS = [
  {
    text: 'Your weekend plans fall apart at the last minute. You:',
    answers: [
      { text: `Roll with it — honestly kind of relieved`, coffees: ['moka', 'nitro', 'affogato'] },
      { text: 'Brief flash of frustration, then fine', coffees: ['flat_white', 'cortado'] },
      { text: 'Already had a backup plan', coffees: ['pour_over', 'cold_brew'] },
      { text: `This was your plan. You just didn't say that.`, coffees: ['turkish', 'vietnamese'] },
    ],
  },
  {
    text: 'New restaurant. How do you order?',
    answers: [
      { text: 'First thing that sounds good, done', coffees: ['espresso', 'red_eye'] },
      { text: 'Read every option, ask one clarifying question', coffees: ['pour_over', 'cortado'] },
      { text: 'Whatever the server recommends', coffees: ['cafe_de_olla', 'vietnamese'] },
      { text: `"Can I get two things? I'll get two things."`, coffees: ['affogato', 'turkish'] },
    ],
  },
  {
    text: "A package arrives that you don't remember ordering. You:",
    answers: [
      { text: 'Open it immediately', coffees: ['espresso', 'red_eye'] },
      { text: 'Check your email history first', coffees: ['pour_over', 'cortado'] },
      { text: `Set it aside, you'll deal with it later`, coffees: ['cold_brew', 'vietnamese'] },
      { text: 'Shake it first', coffees: ['moka', 'nitro'] },
    ],
  },
  {
    text: `Pick tonight's movie:`,
    answers: [
      { text: `Something you've seen before`, coffees: ['vietnamese', 'cafe_de_olla'] },
      { text: 'The most critically acclaimed thing available', coffees: ['pour_over', 'cold_brew'] },
      { text: `Whatever's trending, no research`, coffees: ['espresso', 'red_eye'] },
      { text: 'Start three things, finish none', coffees: ['affogato', 'moka', 'flat_white'] },
    ],
  },
  {
    text: 'Your texts are mostly:',
    answers: [
      { text: 'Short and sent immediately', coffees: ['espresso', 'cortado'] },
      { text: 'Long, with full context', coffees: ['pour_over', 'turkish'] },
      { text: 'Memes and reaction images', coffees: ['nitro', 'red_eye', 'moka'] },
      { text: 'Voice memos', coffees: ['cafe_de_olla', 'vietnamese', 'affogato'] },
    ],
  },
  {
    text: 'Pick a superpower:',
    answers: [
      { text: 'Stop time', coffees: ['cold_brew', 'pour_over'] },
      { text: 'Read minds', coffees: ['turkish', 'cortado'] },
      { text: 'Be in two places at once', coffees: ['flat_white', 'affogato'] },
      { text: 'Unlimited energy', coffees: ['red_eye', 'espresso', 'moka'] },
    ],
  },
  {
    text: `It's 2am. You are:`,
    answers: [
      { text: 'Asleep. Obviously.', coffees: ['vietnamese', 'cafe_de_olla'] },
      { text: `Finishing something you said you'd finish tomorrow`, coffees: ['flat_white', 'cortado'] },
      { text: 'Starting something new, actually', coffees: ['nitro', 'red_eye', 'espresso'] },
      { text: 'Technically awake but in a dissociative state, scrolling', coffees: ['turkish', 'moka', 'cold_brew'] },
    ],
  },
]

type State = 'intro' | 'quiz' | 'result'
type Answer = { index: number; coffees: string[] }

export default function Home() {
  const [state, setState] = useState<State>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(Answer | null)[]>(Array(QUESTIONS.length).fill(null))
  const [scores, setScores] = useState<Record<string, number>>({})
  const [result, setResult] = useState<typeof COFFEES[0] | null>(null)

  const selectedAnswer = answers[currentQuestion]?.index ?? null

  const bgStyle = {
    background: 'linear-gradient(135deg, #5eead4 0%, #2dd4bf 40%, #0d9488 100%)',
  }

  function handleStart() {
    setCurrentQuestion(0)
    setAnswers(Array(QUESTIONS.length).fill(null))
    setScores({})
    setResult(null)
    setState('quiz')
  }

  function handleBack() {
    const prev = currentQuestion - 1
    const prevAnswer = answers[prev]
    if (prevAnswer) {
      // Remove the previous question's score contribution
      const newScores = { ...scores }
      prevAnswer.coffees.forEach((id) => {
        newScores[id] = (newScores[id] || 1) - 1
      })
      setScores(newScores)
      // Clear that answer so the user can re-pick
      const newAnswers = [...answers]
      newAnswers[prev] = null
      setAnswers(newAnswers)
    }
    setCurrentQuestion(prev)
  }

  function handleAnswer(answerIndex: number, coffees: string[]) {
    if (selectedAnswer !== null) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = { index: answerIndex, coffees }
    setAnswers(newAnswers)

    const newScores = { ...scores }
    coffees.forEach((id) => {
      newScores[id] = (newScores[id] || 0) + 1
    })
    setScores(newScores)

    setTimeout(() => {
      if (currentQuestion + 1 < QUESTIONS.length) {
        setCurrentQuestion((q) => q + 1)
      } else {
        // Find winner — ties broken by order in COFFEES array
        let winnerId = COFFEES[0].id
        let max = 0
        for (const coffee of COFFEES) {
          const score = newScores[coffee.id] || 0
          if (score > max) {
            max = score
            winnerId = coffee.id
          }
        }
        const winner = COFFEES.find((c) => c.id === winnerId)!
        setResult(winner)
        setState('result')
      }
    }, 300)
  }

  if (state === 'intro') {
    return (
      <div className="flex flex-1 items-center justify-center p-6 min-h-screen" style={bgStyle}>
        <div className="bg-white rounded-[28px] shadow-2xl p-10 max-w-sm w-full text-center">
          <div className="text-5xl mb-4">☕</div>
          <h1 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
            {`What's Your Coffee?`}
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Seven questions. One coffee. Find out which brew matches your personality.
          </p>
          <button
            onClick={handleStart}
            className="w-full py-3 px-6 rounded-full text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            style={{ background: '#0d9488', fontFamily: 'var(--font-nunito)' }}
          >
            Find Out
          </button>
        </div>
      </div>
    )
  }

  if (state === 'quiz') {
    const question = QUESTIONS[currentQuestion]
    return (
      <div className="flex flex-1 items-center justify-center p-6 min-h-screen" style={bgStyle}>
        <div className="bg-white rounded-[28px] shadow-2xl p-8 max-w-lg w-full">
          {/* Back button + progress dots */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="text-gray-400 hover:text-gray-600 disabled:opacity-0 disabled:pointer-events-none transition-all text-sm font-bold"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              ← Back
            </button>
            <div className="flex flex-1 justify-center gap-2">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ background: i <= currentQuestion ? '#0d9488' : '#ccfbf1' }}
              />
            ))}
            </div>
          </div>

          {/* Question */}
          <h2
            className="text-2xl font-black text-gray-900 mb-6 leading-snug"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            {question.text}
          </h2>

          {/* Answers */}
          <div className="flex flex-col gap-3">
            {question.answers.map((answer, i) => {
              const isSelected = selectedAnswer === i
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i, answer.coffees)}
                  className="w-full text-left px-5 py-4 rounded-2xl border-2 font-bold transition-all"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    background: isSelected ? '#0d9488' : 'white',
                    color: isSelected ? 'white' : '#374151',
                    borderColor: isSelected ? '#0d9488' : '#e5e7eb',
                    transform: isSelected ? 'translateY(-2px)' : 'none',
                    boxShadow: isSelected ? '0 4px 12px rgba(13,148,136,0.3)' : 'none',
                  }}
                >
                  {answer.text}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Result state
  return (
    <div className="flex flex-1 items-center justify-center p-6 min-h-screen" style={bgStyle}>
      <div className="bg-white rounded-[28px] shadow-2xl p-10 max-w-lg w-full text-center">
        <div className="text-5xl mb-4">☕</div>
        <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: '#0d9488' }}>
          Your coffee is:
        </p>
        <h2
          className="text-4xl font-black text-gray-900 mb-5"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          {result?.name}
        </h2>
        <p className="text-gray-500 italic mb-4 leading-relaxed text-sm">
          {result?.fact}
        </p>
        <p className="text-gray-700 font-bold mb-8 leading-relaxed">
          {result?.tagline}
        </p>
        <button
          onClick={handleStart}
          className="w-full py-3 px-6 rounded-full text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          style={{ background: '#0d9488', fontFamily: 'var(--font-nunito)' }}
        >
          Take it again
        </button>
      </div>
    </div>
  )
}
