import { BookOpen, CheckCircle2, BrainCircuit, Trophy, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: BookOpen,
      title: 'Master Drug Knowledge',
      desc: 'Focus on the most‑tested medications: brand/generic pairs, indications, and classifications.',
    },
    {
      icon: BrainCircuit,
      title: 'Bite‑Size Practice',
      desc: 'Short sessions that fit your day. Retain more with spaced repetition and quick drills.',
    },
    {
      icon: CheckCircle2,
      title: 'Exam‑Ready Skills',
      desc: 'Build recognition speed and confidence for pharmacy technician and NAPLEX‑level questions.',
    },
    {
      icon: Trophy,
      title: 'Track Progress',
      desc: 'See streaks, accuracy, and most‑missed topics to focus your study time where it matters.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
            <Sparkles className="h-4 w-4" /> Why SparkRx200
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Designed for focused, effective prep
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need to learn drugs, classifications, and generic/brand names—without the clutter.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
