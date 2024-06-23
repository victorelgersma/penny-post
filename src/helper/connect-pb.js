import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8080");

console.log(pb.authStore);

// list and filter "example" collection records
const result = await pb.collection("example").getList(1, 20, {
  filter: 'status = true && created > "2022-08-01 10:00:00"',
});
