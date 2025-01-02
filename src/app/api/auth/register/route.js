import { AuthController } from '@/lib/backend/controllers/authController';
import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log(req)
    try {
        const response = await AuthController.register(req);
        return NextResponse.json(response, { status: 200 });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'An error occurred while processing your request.' }, { status: 500 });
      }
}
