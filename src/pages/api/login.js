// src/pages/api/login.js (or .ts)
import PocketBase from "pocketbase";
import { APIRoute } from "astro";
const pocketbase_instance = import.meta.env.POCKETBASE_INSTANCE;

export const POST = async ({ request }) => {
  // Parse the request body
  // const { email, password } = await request.json();

  const email = "test@example.com";
  const password = "password";

  // Initialize PocketBase client
  const pb = new PocketBase(pocketbase_instance);

  try {
    // Authenticate the user with PocketBase
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    // Return the token and user data
    return new Response(
      JSON.stringify({
        token: authData.token,
        user: authData.record,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Handle login errors
    return new Response(
      JSON.stringify({
        message: "Login failed",
        error: error.message,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
