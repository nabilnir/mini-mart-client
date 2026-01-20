import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Discover Quality <span className="text-blue-600">Products</span> <br /> at Best Prices
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Shop top-rated gadgets, books, and accessories. Experience seamless shopping with MiniMart today.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="/items" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
                Shop Now
              </Link>
              <Link href="#features" className="bg-slate-100 text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-200 transition">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Using placeholder image since I don't have assets yet */}
            <div className="w-full max-w-lg h-96 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-200 font-bold text-4xl">
              Hero Image
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Shop With Us?</h2>
          <p className="text-slate-600 mt-4">We provide the best experience for our customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Free Shipping", text: "On all orders over $50" },
            { title: "24/7 Support", text: "We are here to help anytime" },
            { title: "Secure Payment", text: "100% secure checkout process" },
          ].map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-600 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Popular Items (Mock) */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Popular Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">Product Image</div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Product Name {item}</h3>
                  <p className="text-green-600 font-bold mt-2">$99.00</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/items" className="text-blue-600 font-semibold hover:underline">View All Products &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Distinct from Features) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Curated for Quality</h2>
            <p className="text-blue-100 text-lg mb-8">
              We handpick every item in our catalog to ensure you get only the best.
              From strict quality checks to premium packaging, we care about details.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Read Our Story
            </button>
          </div>
          <div className="md:w-1/2 bg-blue-500 rounded-xl h-64 w-full flex items-center justify-center">
            <span className="opacity-50 font-bold text-2xl">Quality Banner</span>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Alice Johnson", quote: "Fast delivery and amazing quality! Will definitely shop again." },
            { name: "Mark Davis", quote: "The customer service is top-notch. They helped me with my return instantly." },
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <span className="font-semibold text-slate-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Special Offers / Pricing */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Premium Club</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">Get exclusive access to early sales, free shipping on all orders, and special discounts.</p>
          <div className="bg-white text-slate-900 max-w-md mx-auto rounded-2xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">BEST VALUE</div>
            <h3 className="text-2xl font-bold mb-2">Yearly Membership</h3>
            <div className="text-5xl font-bold text-blue-600 mb-6">$29<span className="text-lg text-slate-500 font-normal">/year</span></div>
            <ul className="text-left space-y-3 mb-8 text-slate-600">
              <li className="flex items-center gap-2">✅ Free Shipping</li>
              <li className="flex items-center gap-2">✅ Early Access</li>
              <li className="flex items-center gap-2">✅ 5% Cashback</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Join Now</button>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-green-50 p-12 rounded-2xl text-center border border-green-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have Questions?</h2>
          <p className="text-slate-600 mb-8">Our support team is ready to assist you 24/7.</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg shadow-green-200">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
