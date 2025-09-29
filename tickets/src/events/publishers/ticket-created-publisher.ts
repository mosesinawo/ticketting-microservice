import { Publisher, Subjects, TicketCreatedEvent } from "@tickettingms/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}

