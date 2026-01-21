
import { NextResponse } from 'next/server';
import { getItem } from '../../../lib/dbconnect';

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const item = await getItem(id);
        if (!item) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }
        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
