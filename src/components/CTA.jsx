const APP_STORE_URL = 'https://apps.apple.com/us/app/sparkrx200/id6754542156'

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-indigo-600 text-white p-10 sm:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-300/30 blur-2xl" />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Get exam‑ready with SparkRx200</h3>
              <p className="mt-2 text-white/90">Join students using quick, focused practice to learn the top medications and their classifications.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 font-semibold shadow">
                Download on iOS
              </a>
              <a href="#faq" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/30 px-6 py-3 font-semibold">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
