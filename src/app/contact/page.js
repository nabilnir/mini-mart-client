import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
    title: "Contact Us | MiniMart",
};

export default function ContactPage() {
    return (
        <div className="space-y-20 py-10">
            {/* Header */}
            <section className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-5xl font-black text-slate-900 tracking-tight">Get in Touch</h1>
                <p className="text-lg text-slate-500">
                    Have a question or just want to say hi? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                </p>
            </section>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Contact Cards */}
                <div className="space-y-6 lg:col-span-1">
                    {[
                        { icon: <FaPhone />, title: "Call Us", detail: "+1 (555) 123-4567", sub: "Mon-Fri, 9am-6pm" },
                        { icon: <FaEnvelope />, title: "Email Us", detail: "hello@minimart.com", sub: "Always available" },
                        { icon: <FaMapMarkerAlt />, title: "Visit Us", detail: "123 Design Street, Creative Valley, CA 90210", sub: "Flagship Store" },
                        { icon: <FaWhatsapp />, title: "Chat on WhatsApp", detail: "+1 (555) 123-4567", sub: "Express Support" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl text-xl">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                                <p className="text-lg font-bold text-slate-900 mb-1">{item.detail}</p>
                                <p className="text-sm text-slate-500">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <form className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                            <input
                                type="text"
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition transition-all"
                                placeholder="How can we help?"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                            <textarea
                                rows="5"
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition transition-all resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <button className="group w-full bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                            Send Message
                            <FaPaperPlane className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
