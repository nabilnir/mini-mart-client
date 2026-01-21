import Link from 'next/link';

async function getItem(id) {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    if (!apiUrl.startsWith('http')) {
        apiUrl = `https://${apiUrl}`;
    }
    const res = await fetch(`${apiUrl}/items/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
}

export default async function ItemDetailsPage({ params }) {
    // Await params in Next.js 15+ (if using latest canary, params is a promise)
    // But in standard 14/15 stable it's props. Check version. Package.json said 16.1.4. Next 15+ async params.
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        return (
            <div className="max-w-7xl mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Item not found</h2>
                <Link href="/items" className="text-blue-600 hover:underline mt-4 inline-block">Back to Items</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/items" className="text-slate-500 hover:text-blue-600 mb-8 inline-block">&larr; Back to Listings</Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-slate-100 h-[400px] md:h-auto min-h-[500px]">
                    {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xl font-medium">No Image Available</div>
                    )}
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{item.name}</h1>
                    <p className="text-2xl text-green-600 font-bold mb-6">${item.price}</p>
                    <div className="prose prose-slate mb-8 text-slate-600">
                        <p>{item.description}</p>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
