
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

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
                Swal.fire('Error', 'ImgBB API Key is missing! Check .env.local', 'error');
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
                Swal.fire('Error', 'Failed to upload image. Please try again.', 'error');
                setLoading(false);
                return;
            }
        }

        // 2. Save Item to Backend
        const itemData = { name, price: parseFloat(price), description, image: imageUrl };

        try {
            const res = await fetch(`/api/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemData)
            });
            if (res.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonColor: '#2563eb'
                }).then(() => {
                    router.push('/items');
                    router.refresh();
                });
            } else {
                Swal.fire('Error', 'Failed to save item to database.', 'error');
            }
        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'Server connection failed.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Product Name</label>
                    <input
                        name="name"
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition"
                        placeholder="e.g. Wireless Headphones"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Price ($)</label>
                    <input
                        name="price"
                        required
                        type="number"
                        step="0.01"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition"
                        placeholder="0.00"
                    />
                </div>
            </div>

            <div className="mb-6 space-y-2">
                <label className="text-sm font-bold text-slate-700">Description</label>
                <textarea
                    name="description"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition resize-none"
                    placeholder="Describe your product clearly..."
                ></textarea>
            </div>

            <div className="mb-8 space-y-2">
                <label className="text-sm font-bold text-slate-700">Product Image</label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition">
                    <input
                        name="image"
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="pointer-events-none">
                        <span className="text-blue-600 font-bold block mb-1">Click to Upload</span>
                        <span className="text-slate-400 text-sm">or drag and drop your image here</span>
                    </div>
                </div>
            </div>

            <button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Processing...' : 'Publish Product'}
            </button>
        </form>
    );
}
