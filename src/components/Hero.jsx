import { Apple } from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/sparkrx200/id6754542156'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32 text-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Now on the App Store
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              SparkRx200
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
              A focused study companion that helps aspiring pharmacy technicians get exam‑ready. Learn top drugs, classifications, and generic/brand names with fast, bite‑size practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white text-indigo-700 hover:bg-indigo-50 px-5 py-3 font-semibold shadow-lg shadow-black/10 transition">
                <Apple className="h-5 w-5" />
                Download on the App Store
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-semibold ring-1 ring-white/20 transition">
                See how it helps
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
              <div className="aspect-[9/19] w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-3">
                <div className="h-full w-full rounded-lg bg-slate-950/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.25),transparent_45%)]" />
                  <div className="relative h-full flex flex-col">
                    <div className="p-4">
                      <div className="h-2 w-12 rounded-full bg-white/20" />
                    </div>
                    <div className="px-5 pt-2">
                      <p className="text-xs uppercase tracking-wide text-white/60">Quick Drill</p>
                      <h3 className="text-white font-semibold">Top 200: Brand → Generic</h3>
                    </div>
                    <div className="mt-4 space-y-2 px-5">
                      {[
                        ['Lipitor', 'Atorvastatin', 'Antilipemic'],
                        ['Norvasc', 'Amlodipine', 'Calcium channel blocker'],
                        ['Zithromax', 'Azithromycin', 'Macrolide antibiotic'],
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 gap-2 text-xs text-white/90">
                          <div className="truncate bg-white/5 rounded px-2 py-2">{row[0]}</div>
                          <div className="truncate bg-white/5 rounded px-2 py-2">{row[1]}</div>
                          <div className="truncate bg-white/5 rounded px-2 py-2 text-white/70">{row[2]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto p-5">
                      <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="block w-full text-center rounded-md bg-indigo-500 hover:bg-indigo-400 text-white py-2 font-semibold transition">Start Practicing</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
