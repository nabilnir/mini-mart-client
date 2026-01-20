import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AddItemForm from './form'; // Client component

export default async function AddItemPage() {
    const cookieStore = await cookies();
    const auth = cookieStore.get('auth');

    if (!auth) {
        redirect('/login');
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Add New Product</h1>
            <AddItemForm />
        </div>
    );
}
