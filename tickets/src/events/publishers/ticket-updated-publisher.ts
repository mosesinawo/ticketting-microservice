import { Publisher, Subjects, TicketUpdatedEvent } from "@tickettingms/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}

