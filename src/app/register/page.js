
"use client";
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/providers/AuthProvider';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaImage, FaArrowRight } from 'react-icons/fa';
import useTitle from '@/hooks/useTitle';

export default function RegisterPage() {
    useTitle('Register');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const result = await createUser(email, password);
            await updateUserProfile(name, photo);

            Swal.fire({
                icon: 'success',
                title: 'Account Created!',
                text: `Welcome to MiniMart, ${name}!`,
                showConfirmButton: false,
                timer: 2000,
                background: '#fff',
                color: '#0f172a'
            });
            router.push('/');
        } catch (error) {
            console.error("Registration failed", error);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message || 'Could not create account.',
                background: '#fff',
                color: '#0f172a',
                confirmButtonColor: '#2563eb'
            });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Logged in with Google.',
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/');
        } catch (error) {
            console.error("Google login failed", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Google login failed. Please try again.',
            });
        }
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4 py-10">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-md w-full relative z-10">
                <div className="bg-white/70 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/50 space-y-8">
                    <div className="text-center space-y-2">
                        <Link href="/" className="inline-block mb-2">
                            <img src="/logog.png" alt="MiniMart Logo" className="h-12 w-auto mx-auto object-contain" />
                        </Link>
                        <h2 className="text-2xl font-bold text-slate-800">Join the Community</h2>
                        <p className="text-slate-500 text-sm">Create an account to start your premium shopping journey.</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Full Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Photo URL</label>
                            <div className="relative">
                                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="url"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
                                    placeholder="https://example.com/photo.jpg"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button type="submit" className="group w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition transform active:scale-[0.98] shadow-lg shadow-slate-900/10">
                                Create Account
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-4 bg-transparent text-slate-400 font-bold uppercase tracking-widest">Or Register with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition shadow-sm active:scale-[0.98]"
                        >
                            <FaGoogle className="text-red-500" />
                            Sign up with Google
                        </button>
                    </div>

                    <p className="text-center text-sm text-slate-500 pt-2 font-medium">
                        Already have an account? <Link href="/login" className="text-blue-600 font-black hover:underline">Login Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
