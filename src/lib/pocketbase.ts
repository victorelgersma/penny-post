import PocketBase from "pocketbase";

const pb = new PocketBase("https://be-proud-thunder-3266.fly.dev/");

const userData = await pb
  .collection("users")
  .authWithPassword("elgersmav@gmail.com", "Bemetr7#");

console.log(userData);
