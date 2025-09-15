import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-20 px-6 md:px-16 border-t border-orange-500/20">
      {/* Top CTA */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600  bg-clip-text text-transparent">
            READY TO GROW?
          </span>
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Take the first step towards your fitness goals today. Join our
          expert-led programs and discover personalized training, nutrition
          guidance, and a supportive community to help you achieve results and
          stay motivated every step of the way.
        </p>
        <button className="px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-orange-400 to-orange-600  text-white transition-transform transform hover:scale-105">
          Book a Trial
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-10 border-t border-orange-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="text-xl font-bold tracking-wide">FITNESS GYM</div>

        {/* Center Links */}
        <div className="flex space-x-10 text-gray-300 text-sm font-medium">
          <Link
            href="/about"
            className="hover:text-orange-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-orange-400 transition-colors"
          >
            Services
          </Link>
          <Link href="/faq" className="hover:text-orange-400 transition-colors">
            FAQ
          </Link>
        </div>

        {/* Right Contact */}
        <div>
          <Link
            href="/contact"
            className="text-gray-300 text-sm hover:text-orange-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
