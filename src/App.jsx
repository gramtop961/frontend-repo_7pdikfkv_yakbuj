import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Logo from './components/Logo'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Logo className="h-8 w-auto" />
          </a>
        </div>
      </header>

      <Hero />
      <Features />
      <CTA />
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">FAQ</h2>
          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold">What is SparkRx200?</h3>
              <p className="mt-2 text-slate-600">It’s a mobile app designed to help aspiring pharmacy technicians and pharmacy students quickly master brand/generic names, classifications, and indications for commonly tested medications.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold">Is this for the NAPLEX or technician exams?</h3>
              <p className="mt-2 text-slate-600">It supports both. The app focuses on top medications and recognition speed that’s useful for NAPLEX‑level review and pharmacy technician certification prep.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold">Where can I download it?</h3>
              <p className="mt-2 text-slate-600">You can download SparkRx200 from the iOS App Store. Tap any of the buttons above to get the app.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
