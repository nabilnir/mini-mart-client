import { getItem } from '../../lib/dbconnect';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const item = await getItem(id);
    return {
        title: item ? `${item.name} | MiniMart` : 'Product Details | MiniMart',
    };
}

export default async function ItemDetailsPage({ params }) {
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Item Not Found</h2>
                <p className="text-slate-500">The product you are looking for does not exist or has been removed.</p>
                <Link href="/items" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    Browse All Products
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <Link href="/items" className="text-slate-500 font-medium hover:text-blue-600 transition flex items-center gap-2">
                &larr; Back to Listings
            </Link>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 grid md:grid-cols-2">

                {/* Image Section */}
                <div className="bg-slate-50 h-[400px] md:h-auto min-h-[500px] relative flex items-center justify-center group">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="text-slate-300 font-bold text-2xl">No Image Available</div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-10 md:p-14 flex flex-col justify-center space-y-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">{item.name}</h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">In Stock</span>
                            <span>SKU: {item._id.substring(0, 8)}</span>
                        </div>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        {item.description}
                    </p>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-4xl font-extrabold text-blue-600">
                            ${parseFloat(item.price).toFixed(2)}
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex-1 bg-blue-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30 transition transform hover:-translate-y-1">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-slate-100 text-slate-900 text-lg font-bold py-4 rounded-xl hover:bg-slate-200 transition">
                            Save for Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
