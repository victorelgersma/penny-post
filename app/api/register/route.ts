import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';


export async function POST(req: Request) {
  const pb = new PocketBase(process.env.POCKETBASE_URL);
  const { email, password, passwordConfirm, name } = await req.json();

   // Check if password and passwordConfirm match
   if (password !== passwordConfirm) {
    return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
  }

  try {
    const user = await pb.collection('users').create({
      email,
      password,
      passwordConfirm,
      name,
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'Error registering user' }, { status: 400 });
  }
}

