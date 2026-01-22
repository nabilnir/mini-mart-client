
"use client";
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/providers/AuthProvider';
import AddItemForm from './form';
import useTitle from '@/hooks/useTitle';

export default function AddItemPage() {
    useTitle('Sell Product');
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Sell a Product</h1>
                <p className="text-slate-500 text-lg">Share your item with the world. Fill out the details below.</p>
            </div>
            <AddItemForm />
        </div>
    );
}
