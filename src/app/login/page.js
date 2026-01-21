"use client";
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/providers/AuthProvider';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { googleLogin } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock Login Credentials
        if (email === "admin@test.com" && password === "123456") {
            // Set cookie
            document.cookie = "auth=true; path=/; max-age=3600"; // 1 hour
            router.push('/items');
        } else {
            alert("Invalid credentials! Use admin@test.com / 123456");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            router.push('/items');
        } catch (error) {
            console.error("Google login failed", error);
            alert("Google login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Login to MiniMart</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="admin@test.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="123456"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Sign In
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-slate-300"></div>
                    <span className="mx-4 text-slate-500 text-sm">Or continue with</span>
                    <div className="flex-grow border-t border-slate-300"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-2 border border-slate-300 bg-white text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Sign in with Google
                </button>

                <div className="mt-4 text-center text-sm text-slate-500">
                    <p>Mock Credentials:</p>
                    <p className="font-mono">Email: admin@test.com</p>
                    <p className="font-mono">Pass: 123456</p>
                </div>
            </div>
        </div>
    );
}
