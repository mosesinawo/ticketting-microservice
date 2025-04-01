import request from "supertest";
import { app } from "../../app";

it("it responds with details about the current user", async () => {
  //   const authResponse = await request(app)
  //     .post("/api/users/signup")
  //     .send({ email: "test@example.com", password: "password123" })
  //     .expect(201);
  //   const cookie = authResponse.get("Set-Cookie");
  //   expect(cookie).toBeDefined();
  //   console.log(authResponse);
  const cookie = await global.signin();
  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);
  console.log(response);
  expect(response.body.currentUser.email).toEqual("test@example.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(401);
  expect(response.body.currentUser).toBeNull();
});
