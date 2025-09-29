import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";
console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connect to nats");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.pubish({
      id: "123",
      title: "concert",
      price: 20,
      userId:'sbdheb'
    });
  } catch (err) {
    console.log(err);
  }

  // const data = JSON.stringify({
  //   id: "123",
  //   title: "concert",
  //   price: 20,
  // });

  // stan.publish('ticked:created', data, () =>{
  //   console.log("Event published")
  // })
});
