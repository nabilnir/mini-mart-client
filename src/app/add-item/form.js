"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddItemForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const imgbbKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const imageFile = form.image.files[0];

        // 1. Upload Image to ImgBB
        let imageUrl = '';
        if (imageFile) {
            if (!imgbbKey) {
                alert("ImgBB API Key is missing! Check .env.local");
                setLoading(false);
                return;
            }
            try {
                const formData = new FormData();
                formData.append('image', imageFile);
                const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await res.json();
                if (data.success) {
                    imageUrl = data.data.url;
                } else {
                    throw new Error('Image upload failed');
                }
            } catch (error) {
                console.error("ImgBB Error:", error);
                alert("Failed to upload image. Please try again.");
                setLoading(false);
                return;
            }
        }

        // 2. Save Item to Backend
        const itemData = { name, price: parseFloat(price), description, image: imageUrl };
        let apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        if (!apiUrl.startsWith('http')) {
            apiUrl = `https://${apiUrl}`;
        }

        try {
            const res = await fetch(`${apiUrl}/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemData)
            });
            if (res.ok) {
                // Show Toast (Simple implementation)
                const toast = document.createElement('div');
                toast.className = "fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce";
                toast.innerText = "Product Added Successfully!";
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);

                router.push('/items');
                router.refresh();
            } else {
                alert("Failed to save item.");
            }
        } catch (err) {
            console.error(err);
            alert("Server error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Product Name</label>
                <input name="name" required type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Wireless Headphones" />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Price ($)</label>
                <input name="price" required type="number" step="0.01" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0.00" />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                <textarea name="description" required rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Product details..."></textarea>
            </div>

            <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Product Image</label>
                <input name="image" type="file" accept="image/*" className="w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                <p className="text-xs text-slate-400 mt-2">Required for the card display.</p>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-50">
                {loading ? 'Processing...' : 'Add Product'}
            </button>
        </form>
    );
}
