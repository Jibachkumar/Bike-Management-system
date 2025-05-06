import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0f3f0f]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 py-10 text-[#d0f02a] font-serif">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#a6c01a] pb-6">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="https://storage.googleapis.com/a1aa/image/c1c3f879-1742-4c7e-5ff2-a680d7f025f6.jpg"
              alt="Logo of a geet tech"
              className="w-[120px] h-[60px] object-contain"
              width={120}
              height={60}
            />
          </div>
          <div className="max-w-lg leading-[18px]">
            <p className="font-bold text-xl text-white mb-1">
              The GeekTech partner you’ve been looking for.
            </p>
            <p className="text-white/95 font-mono text-xs">
              Geek Tech is the world’s leading company and WordPress. We focus
              on website design, development, support, maintenance, and retainer
              services for world wide company. We pride ourselves on
              best-in-industry expertise and reliability. We have supported over
              uncountable amazing clients since our launch in 2020.
            </p>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12 text-[13px] leading-[18px]">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#d0f02a] mb-4 text-[18px] leading-[22px]">
              Our services
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-2 gap-x-6 text-white max-w-[280px]">
              {[
                "React.js website design",
                "React.js development",
                "React.js maintenance",
                "React.js retained services",
                "React.js hosting",

                "React.js backups",
                "React.js conversion",

                "React.js Elementor builder",
                "React.js migration",
                "React.js security",
                "React.js support",

                "React.js search engine optimization",
                "React.js GDPR compliance",
                "React.js speed optimization",
                "Sell my web design company",
              ].map((service, i) => (
                <p key={i}>{service}</p>
              ))}
            </div>
          </div>

          {/* Work */}
          <div>
            <h3 className="font-semibold text-[#d0f02a] mb-4 text-[16px] leading-[22px]">
              Our work
            </h3>
            <ul className="text-white space-y-2 max-w-[140px]">
              {[
                "Featured projects",
                "Testimonials",
                "Markets we serve",
                "Industries we serve",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-[#d0f02a] mb-4 text-[16px] leading-[22px]">
              About us
            </h3>
            <ul className="text-white space-y-2 max-w-[140px]">
              {[
                "Why Geek Tech",
                "Meet the team",
                "We’re hiring",
                "Read the blog",
                "Privacy policy",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Clients */}
          <div>
            <h3 className="font-semibold text-[#d0f02a] mb-4 text-[16px] leading-[22px]">
              For clients
            </h3>
            <ul className="text-white space-y-2 max-w-[140px]">
              {["Support resources", "Knowledge base", "Terms"].map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Accessibility Button */}
        <button
          aria-label="Accessibility options"
          title="Accessibility options"
          className="fixed bottom-4 left-4 bg-[#0f3f0f] border border-[#d0f02a] text-[#d0f02a] rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <i className="fas fa-universal-access fa-lg" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
