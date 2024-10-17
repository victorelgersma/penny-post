import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

export async function POST(req: Request) {
  const pb = new PocketBase(process.env.POCKETBASE_URL);
  const { email, password } = await req.json();

  try {
    const user = await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
    });

    return NextResponse.json({ message: 'Registration successful!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'Error registering user' }, { status: 400 });
  }
}

