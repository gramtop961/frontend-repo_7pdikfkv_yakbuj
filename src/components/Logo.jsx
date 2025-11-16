export default function Logo({ className = "h-8 w-auto" }) {
  const logoUrl = import.meta.env.VITE_LOGO_URL

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt="SparkRx200 logo"
        className={className}
        loading="eager"
        decoding="async"
        height={32}
      />
    )
  }

  return (
    <div className={`font-extrabold tracking-tight ${className} text-white`}
      style={{ height: undefined }}
    >
      <span className="px-2 py-1 rounded bg-white/10">Spark</span>
      <span className="ml-1">Rx200</span>
    </div>
  )
}
