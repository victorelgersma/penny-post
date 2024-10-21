import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

export async function POST(req: Request) {
  const pb = new PocketBase(process.env.POCKETBASE_URL);
  const { email, password, passwordConfirm, name } = await req.json();



  try {
    const user = await pb.collection('users').create({
      username: name, // Assuming username is the same as email; adjust as needed
      email,
      emailVisibility: false, // If you want the email to be visible publicly
      password,
      passwordConfirm,
    });

    return NextResponse.json(user);
  } catch (error: any) {
    if (error.data?.email?.code === 'validation_not_unique') {
      return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
    }
    console.log(error.errorDetails, error.errorMessage)
    return NextResponse.json({ message: error.message || 'Error registering user' }, { status: 400 });
  }
}
