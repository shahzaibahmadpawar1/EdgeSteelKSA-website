import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-charcoal text-white px-5 text-center">
      <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4">Error 404</div>
      <h1 className="text-[clamp(64px,10vw,120px)] font-[800] tracking-[-0.04em] leading-none text-white/10 mb-6">
        404
      </h1>
      <p className="text-[18px] font-bold mb-3">Page not found</p>
      <p className="text-[15px] text-white/50 mb-10 max-w-[380px] leading-[1.7]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-orange text-white font-bold text-[13px] tracking-[0.08em] uppercase no-underline transition-colors duration-300 hover:bg-orange-dark"
      >
        Back to Home →
      </Link>
    </div>
  );
}
