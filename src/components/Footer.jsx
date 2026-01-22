
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 font-black tracking-tighter">
                            <img src="/logog.png" alt="MiniMart Logo" className="h-10 w-auto object-contain" />
                            <span className="text-2xl text-blue-600">MINIMART</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Experience the future of shopping with our curated collection of premium products. Quality, style, and reliability in every click.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebook />, href: "#" },
                                { icon: <FaXTwitter />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaLinkedin />, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/items" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                            <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
                            <li><Link href="/add-item" className="hover:text-white transition-colors">Sell with Us</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter Column */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
                        <p className="text-sm text-slate-400">Subscribe to get special offers and once-in-a-lifetime deals.</p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-800 border-none rounded-xl py-4 pl-4 pr-12 text-white outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm">
                                <FaPhone className="text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <FaEnvelope className="text-blue-500" />
                                <span>hello@minimart.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} MiniMart. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
