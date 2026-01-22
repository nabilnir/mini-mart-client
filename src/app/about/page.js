import { FaBullseye, FaHistory, FaUsers, FaLightbulb } from 'react-icons/fa';

export const metadata = {
    title: "About Us | MiniMart",
};

export default function AboutPage() {
    return (
        <div className="space-y-24 py-10">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
                    We're Reinventing <br />
                    <span className="text-blue-600">The Modern Mart.</span>
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed">
                    MiniMart isn't just a store; it's a curated experience. We believe in quality over quantity and style that doesn't compromise on substance.
                </p>
            </section>

            {/* Values Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <FaBullseye />, title: "Our Mission", text: "To provide premium products that elevate everyday life without the premium price tag." },
                    { icon: <FaLightbulb />, title: "Innovation", text: "Constantly seeking new ways to make your shopping experience faster and more intuitive." },
                    { icon: <FaUsers />, title: "Community", text: "Building a trust-based relationship with our 10k+ happy customers worldwide." },
                    { icon: <FaHistory />, title: "Our Story", text: "Founded in 2024, we started with a simple idea: shopping should be beautiful." }
                ].map((val, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4 hover:shadow-xl transition-all duration-300">
                        <div className="text-3xl text-blue-600 mb-2">{val.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{val.text}</p>
                    </div>
                ))}
            </section>

            {/* Team/Philosophy Section */}
            <section className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="flex flex-col lg:flex-row items-stretch">
                    <div className="lg:w-1/2 p-12 md:p-20 space-y-8 flex flex-col justify-center">
                        <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold uppercase tracking-wider">
                            Our Philosophy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Design-First <br />
                            Thinking.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Every pixel, every product, and every interaction is designed with you in mind. We don't settle for "good enough." We strive for perfection in everything we do.
                        </p>
                        <div className="pt-4">
                            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition shadow-lg">
                                Join Our Journey
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-blue-600 relative overflow-hidden min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                            alt="Our Team"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white space-y-2">
                                <div className="text-7xl font-black">2024</div>
                                <div className="text-sm font-bold tracking-widest uppercase">Since our inception</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
