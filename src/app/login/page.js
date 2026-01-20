"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

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
                <div className="mt-4 text-center text-sm text-slate-500">
                    <p>Mock Credentials:</p>
                    <p className="font-mono">Email: admin@test.com</p>
                    <p className="font-mono">Pass: 123456</p>
                </div>
            </div>
        </div>
    );
}
