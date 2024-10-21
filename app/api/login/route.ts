import { NextResponse } from 'next/server';

import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_URL);

export async function POST(req: Request) {
    const { email, password } = await req.json();
  
    try {
      // Authenticate user with email and password
      const authData = await pb.collection('users').authWithPassword(email, password);
  
       console.log("hello", NextResponse.json({ authData }));

      // Return the authentication token and user data
      return NextResponse.json(authData);
    } catch (error: any) {
      console.log(NextResponse.json({ error: error.message }));
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
  }

