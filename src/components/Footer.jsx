export default function Footer() {
    return (
        <footer className="bg-[#020617] text-[#CBD5E1] py-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">MiniMart</h3>
                        <p className="text-sm">
                            Your one-stop shop for everything you need. Quality products, best prices.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="/items" className="hover:text-blue-400 transition">All Items</a></li>
                            <li><a href="/login" className="hover:text-blue-400 transition">Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <p className="text-sm mb-2">123 Market Street, City, Country</p>
                        <p className="text-sm">support@minimart.com</p>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} MiniMart. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
