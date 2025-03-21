import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password123",
    })
    .expect(201);
});

it("retruns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "testmailndhs",
      password: "password123",
    })
    .expect(400);
});

it("retruns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "pas",
    })
    .expect(400);
});

it("retruns a 400 with missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@example.com" })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ password: "password123" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password123",
    })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password123",
    })
    .expect(400);
});

it("set a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password123",
    })
    .expect(201);
    expect(response.get("Set-Cookie")).toBeDefined();
});
