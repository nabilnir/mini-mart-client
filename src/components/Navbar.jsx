
"use client";
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaShoppingCart, FaBars, FaTimes, FaGoogle } from 'react-icons/fa';

export default function Navbar() {
    const { user, logOut, signInWithGoogle } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (err) {
            console.error(err);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Items', href: '/items' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-black tracking-tighter">
                        <img src="/logog.png" alt="MiniMart Logo" className="h-10 w-auto object-contain" />
                        <span className="text-2xl text-blue-600">MINIMART</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {user && (
                            <Link
                                href="/add-item"
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                Sell Product
                            </Link>
                        )}
                    </div>

                    {/* Auth Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <img
                                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=random`}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-blue-500"
                                />
                                <button
                                    onClick={logOut}
                                    className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/login"
                                    className="text-slate-600 font-bold hover:text-blue-600 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-slate-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-700 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {user && (
                            <Link
                                href="/add-item"
                                className="text-lg font-medium text-slate-700 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sell Product
                            </Link>
                        )}
                        <div className="border-t border-slate-100 flex flex-col gap-4 pt-4">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-3">
                                        <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=random`} className="w-8 h-8 rounded-full" />
                                        <span className="font-semibold">{user.displayName}</span>
                                    </div>
                                    <button onClick={logOut} className="w-full text-left font-bold text-red-500">Log Out</button>
                                </>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full py-3 text-center font-bold text-slate-700 border border-slate-200 rounded-xl"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full bg-blue-600 text-white py-3 text-center rounded-xl font-bold"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
