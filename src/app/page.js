import Link from "next/link";
import { FaShippingFast, FaShieldAlt, FaUndo } from "react-icons/fa";
import ReviewCarousel from "../components/ReviewCarousel";
import { getItems } from "./lib/dbconnect";

export default async function Home() {
  const allItems = await getItems();
  const trendingItems = allItems.slice(0, 4);

  return (
    <div className="space-y-20">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl text-white py-20 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Elevate Your <br />
            <span className="text-blue-200">Lifestyle Today</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-lg">
            Discover a curated collection of premium products designed to enhance your daily life. Quality you can trust, style you'll love.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/items"
              className="px-8 py-3 bg-white text-blue-700 rounded-full font-bold shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
            <Link
              href="/add-item"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition"
            >
              Sell Product
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
              alt="Premium Product"
              className="w-full h-80 object-cover rounded-[2rem] hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wider">Why Choose MiniMart?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We prioritize your convenience and security above all else. Experience shopping the way it was meant to be.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaShippingFast />, title: "Free Shipping", desc: "On all orders over $50" },
            { icon: <FaShieldAlt />, title: "Secure Payment", desc: "100% secure payment methods" },
            { icon: <FaUndo />, title: "Easy Returns", desc: "30-day money back guarantee" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-full text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">Trending Now</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Check out what everyone is buying this week. Don't miss out on these exclusive deals.
          </p>
        </div>

        {trendingItems.length === 0 ? (
          <div className="py-20 bg-white rounded-3xl border border-dashed border-slate-200 text-slate-400 italic">
            No items available to show right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {trendingItems.map((item) => (
              <div key={item._id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">No Image</div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                    Trending
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-slate-900 mb-1 truncate">{item.name}</h3>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
                    <span className="text-lg font-extrabold text-blue-600">${parseFloat(item.price).toFixed(2)}</span>
                    <Link
                      href={`/items/${item._id}`}
                      className="text-xs font-bold text-slate-400 hover:text-blue-600 transition"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4">
          <Link href="/items" className="text-blue-600 font-semibold hover:underline text-lg">
            View All Products &rarr;
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">Our Impact in Numbers</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We take pride in our service and the trust our community places in us every day.
          </p>
        </div>
        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">10k+</div>
              <div className="text-blue-200 font-medium">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">50k+</div>
              <div className="text-blue-200 font-medium">Products Sold</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">99%</div>
              <div className="text-blue-200 font-medium">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extrabold">24/7</div>
              <div className="text-blue-200 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">Latest from Our Blog</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Tips, trends, and insights to help you get the most out of your shopping experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Top 10 Gadgets of 2026",
              date: "Jan 15, 2026",
              category: "Tech",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "Sustainable Shopping Guide",
              date: "Jan 12, 2026",
              category: "Lifestyle",
              image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "How to Style Your Home",
              date: "Jan 08, 2026",
              category: "Home Decor",
              image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
            },
          ].map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 group">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <span>{post.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">{post.title}</h3>
                <a href="#" className="inline-block text-sm font-bold text-slate-500 hover:text-blue-600">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">What Our Clients Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our community has to say.
          </p>
        </div>
        <ReviewCarousel />
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <p className="text-slate-500">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { q: "How long does shipping take?", a: "Most orders are processed within 24 hours and arrive within 3-5 business days." },
            { q: "What is your return policy?", a: "We offer a 30-day money-back guarantee on all our products. No questions asked." },
            { q: "Do you ship internationally?", a: "Yes! We currently ship to over 50 countries worldwide." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
