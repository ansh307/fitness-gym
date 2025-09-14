import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16 px-6 md:px-12 border-t">
      {/* Top CTA */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">READY TO GROW ?</h2>
        <p className="text-white mb-6">
          Dassdasdasdasdasdasdasdasdasdlagvdaskjdhavsdhasaskhfahvdllashv dhasv
          dhaslashdasdasdhgqadjashvdashdvasdhkjasvdkjasvdkgjasvdka shgvd
          kjasgvdjkasvdkjasvdgkjas
        </p>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white transition">
          Book a Trial
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className=" border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="text-xl font-bold">FITNESS GYM</div>

        {/* Center Links */}
        <div className="flex space-x-8 text-white text-sm">
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        {/* Right Contact */}
        <div>
          <Link href="/contact" className="text-white text-sm">
            contact us
          </Link>
        </div>
      </div>
    </footer>
  );
}
