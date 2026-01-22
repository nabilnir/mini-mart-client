import { getItems, getTotalItems } from '../lib/dbconnect';
import Link from 'next/link';

export const metadata = {
    title: "All Items | MiniMart",
};

export default async function ItemsPage({ searchParams }) {
    const params = await searchParams;
    const page = parseInt(params.page) || 1;
    const limit = 8;

    const items = await getItems(page, limit);
    const totalItems = await getTotalItems();
    const totalPages = Math.ceil(totalItems / limit);

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-slate-900">Explore Our Collection</h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Handpicked items just for you. Showing the latest arrivals first.
                </p>
            </div>

            {items.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-xl text-slate-400 font-medium">No products found on this page.</p>
                    <Link href="/add-item" className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                        Be the first to add one!
                    </Link>
                </div>
            ) : (
                <div className="space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {items.map((item) => (
                            <div key={item._id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300 font-medium">
                                            No Image
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                                        Recent
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 truncate" title={item.name}>
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                                        <span className="text-xl font-extrabold text-green-600">
                                            ${parseFloat(item.price).toFixed(2)}
                                        </span>
                                        <Link
                                            href={`/items/${item._id}`}
                                            className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition shadow-lg shadow-slate-900/10"
                                        >
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 py-8">
                            <Link
                                href={`/items?page=${Math.max(1, page - 1)}`}
                                className={`px-6 py-2 rounded-xl font-bold transition-all ${page <= 1
                                        ? 'bg-slate-100 text-slate-400 pointer-events-none'
                                        : 'bg-white text-slate-700 hover:bg-blue-600 hover:text-white border border-slate-200'
                                    }`}
                            >
                                Previous
                            </Link>

                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <Link
                                        key={i + 1}
                                        href={`/items?page=${i + 1}`}
                                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${page === i + 1
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                            }`}
                                    >
                                        {i + 1}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href={`/items?page=${Math.min(totalPages, page + 1)}`}
                                className={`px-6 py-2 rounded-xl font-bold transition-all ${page >= totalPages
                                        ? 'bg-slate-100 text-slate-400 pointer-events-none'
                                        : 'bg-white text-slate-700 hover:bg-blue-600 hover:text-white border border-slate-200'
                                    }`}
                            >
                                Next
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
