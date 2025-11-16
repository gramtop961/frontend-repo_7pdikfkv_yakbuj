export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} SparkRx200. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="https://apps.apple.com/us/app/sparkrx200/id6754542156" target="_blank" rel="noreferrer" className="hover:text-slate-900">App Store</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
