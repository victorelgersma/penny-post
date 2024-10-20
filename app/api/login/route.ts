import { NextResponse } from 'next/server';

import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_URL);

export async function POST(req: Request) {
    const { email, password } = await req.json();
  
    try {
      // Authenticate user with email and password
      const authData = await pb.collection('users').authWithPassword(email, password);
  
      // Return the authentication token and user data
      return NextResponse.json(authData);
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
  }

