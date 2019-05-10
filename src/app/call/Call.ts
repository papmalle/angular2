export class Call {
  memberSessionUUID: string;
  resource: string;
  calling: string;
  description: string;
  eventDate: string;
  agentNumber: string;
  queueDuration: number;
  callDuration: number;
  matNumber: string;
  customerFirstName: string;
  customerLastName: string;
  typeCallEventDto: string;

  constructor(memberSessionUUID: string, resource: string, calling: string, description: string, eventDate: string, agentNumber: string, queueDuration: number, callDuration: number, matNumber: string, customerFirstName: string, customerLastName: string, typeEvt: string) {
    this.memberSessionUUID = memberSessionUUID;
    this.resource = resource;
    this.calling = calling;
    this.description = description;
    this.eventDate = eventDate;
    this.agentNumber = agentNumber;
    this.queueDuration = queueDuration;
    this.callDuration = callDuration;
    this.matNumber = matNumber;
    this.customerFirstName = customerFirstName;
    this.customerLastName = customerLastName;
    this.typeCallEventDto = typeEvt;
  }
}
