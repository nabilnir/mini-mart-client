import Link from 'next/link';
import { getItems } from '../lib/dbconnect';

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
            </div>

            {items.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                    <p className="text-lg text-slate-500 mb-4">No products found or server is down.</p>
                    <p className="text-sm text-slate-400">Please make sure the backend is running.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                            <div className="h-48 w-full bg-slate-200 relative">
                                {/* Provide placeholder if image fetch fails */}
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                                )}
                            </div>
                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.name}</h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-green-600 font-bold text-lg">${item.price}</span>
                                    <Link href={`/items/${item._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
