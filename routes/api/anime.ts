import { Handlers } from "$fresh/server.ts";
import { User } from "../../Types/UserTypes.ts";
const users: User[] = [
  { name: "Mario", surname: "Girón", phone: "23829923" },
  { name: "Laura", surname: "López", phone: "54434323" },
];

export const handler: Handlers = {
  GET(_, _ctx) {
    return new Response(JSON.stringify(users), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
