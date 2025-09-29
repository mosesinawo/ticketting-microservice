import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticket-listener";
console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATs");

  stan.on("close", () => {
    console.log("NATS connection closed!");
    process.exit();
  });
    // const options = stan
    //   .subscriptionOptions()
    //   .setManualAckMode(true)
    //   .setDeliverAllAvailable()
    //   .setDurableName("order-service");

    //   console.log("options", options)

  //   const subscription = stan.subscribe(
  //     "ticked:created",
  //     "orders-service-queue-group",
  //     options
  //   );
  //   subscription.on("message", (msg: Message) => {
  //     const data = msg.getData();

  //     if (typeof data === "string") {
  //       console.log(`Received event #${msg.getSequence()}, with data ${data}`);
  //     }
  //     msg.ack();
  //   });

  new TicketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
