import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.POCKETBASE_URL);

export const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    const token = authData.token;
    const maxAge = parseInt(import.meta.env.MAX_AGE, 10) || 604800;

    cookies.set(import.meta.env.COOKIE_NAME || "_Security_Login_", token, {
      path: "/",
      maxAge,
      secure: Boolean(import.meta.env.COOKIE_SECURE || false),
    });

    return redirect("/");
  } catch (error) {
    console.log(error);
    return redirect("/login?error=invalid_credentials");
  }
};
