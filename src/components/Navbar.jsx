"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-600';

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.png" alt="MiniMart Logo" width={40} height={40} className="object-contain" />
                            <span className="text-2xl font-bold text-blue-600">MiniMart</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={isActive('/')}>Home</Link>
                        <Link href="/items" className={isActive('/items')}>Items</Link>
                        <Link href="/add-item" className={isActive('/add-item')}>Add Item</Link>
                        <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </Link>
                    </div>
                    {/* Mobile menu button (Hamburger) - Simplified for speed */}
                    <div className="md:hidden flex items-center">
                        <Link href="/items" className="text-slate-600 mr-4">Items</Link>
                        <Link href="/login" className="text-blue-600 font-semibold">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
