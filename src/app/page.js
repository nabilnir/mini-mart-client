import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-0 translate-x-20 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Discover Quality <br /> <span className="text-blue-600">Products</span> at Best Prices
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Shop top-rated gadgets, books, and accessories. Experience seamless shopping with MiniMart today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/items" className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5">
                Shop Now
              </Link>
              <Link href="#features" className="bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center perspective-1000">
            <div className="w-full max-w-lg relative animate-float">
              {/* Background Blob for Hero */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>

              <Image
                src="/hero.png"
                alt="Online Shopping Experience"
                width={600}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl z-10 relative"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Shop With Us?</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We provide the best experience for our customers with a focus on speed, security, and support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Free Shipping",
              text: "On all orders over $50",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            },
            {
              title: "24/7 Support",
              text: "We are here to help anytime",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            },
            {
              title: "Secure Payment",
              text: "100% secure checkout process",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            },
          ].map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-slate-100 hover:border-blue-100 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Popular Items (Mock) */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Popular Products</h2>
              <p className="text-slate-600 mt-2">Check out what's trending right now.</p>
            </div>
            <Link href="/items" className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 hover:underline">
              View All <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: "Wireless Headphones", price: "$129.00", color: "bg-purple-100" },
              { id: 2, name: "Smart Watch Series 7", price: "$399.00", color: "bg-blue-100" },
              { id: 3, name: "Ergonomic Chair", price: "$249.00", color: "bg-orange-100" },
              { id: 4, name: "Mechanical Keyboard", price: "$159.00", color: "bg-green-100" },
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                <div className={`h-56 ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-900/10 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  {/* Decorative Item Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-40">🛍️</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-slate-900 font-bold text-xl">{item.price}</p>
                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link href="/items" className="text-blue-600 font-semibold hover:underline">View All Products &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Distinct from Features) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden shadow-2xl">
          {/* Abstract Pattern overlay */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="md:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Curated for Quality, <br /> Desgined for You.</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We handpick every item in our catalog to ensure you get only the best.
              From strict quality checks to premium packaging, we care about details so you don't have to.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                Read Our Story
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex items-center justify-center relative z-10">
            {/* Abstract Glassmorphism Banner Card */}
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Verified Quality</h4>
                  <p className="text-blue-100 text-sm">Passed 30+ quality checks</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">★</div>
                <div>
                  <h4 className="font-bold text-lg">Top Rated</h4>
                  <p className="text-blue-100 text-sm">Preferred by 10k+ customers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">⚡</div>
                <div>
                  <h4 className="font-bold text-lg">Super Fast</h4>
                  <p className="text-blue-100 text-sm">Same day shipping available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Alice Johnson", quote: "Fast delivery and amazing quality! Will definitely shop again.", role: "Verified Buyer" },
            { name: "Mark Davis", quote: "The customer service is top-notch. They helped me with my return instantly.", role: "Tech Enthusiast" },
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-slate-500 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{t.name}</span>
                  <span className="text-sm text-slate-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Special Offers / Pricing */}
      <section className="bg-slate-900 py-24 text-white rounded-t-[50px] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Premium Club</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">Get exclusive access to early sales, free shipping on all orders, and special discounts.</p>
          <div className="bg-white text-slate-900 max-w-md mx-auto rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-emerald-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg">BEST VALUE</div>
            <h3 className="text-2xl font-bold mb-2 text-slate-800">Yearly Membership</h3>
            <div className="text-6xl font-extrabold text-blue-600 mb-8 tracking-tight">$29<span className="text-xl text-slate-500 font-medium">/year</span></div>
            <ul className="text-left space-y-4 mb-10 text-slate-600 text-lg">
              <li className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 rounded-full p-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                Free Shipping
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 rounded-full p-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                Early Access
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 rounded-full p-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                5% Cashback
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">Join Now</button>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 -mt-10 relative z-10">
        <div className="bg-green-50 p-12 md:p-16 rounded-3xl text-center border border-green-100 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have Questions?</h2>
          <p className="text-slate-600 mb-8 text-lg">Our support team is ready to assist you 24/7.</p>
          <button className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-200 hover:shadow-xl">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
