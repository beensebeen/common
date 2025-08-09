declare module "@salesforce/apex/LearningScheduleController.getSubscriptions" {
  export default function getSubscriptions(param: {contactId: any}): Promise<any>;
}
declare module "@salesforce/apex/LearningScheduleController.createEvents" {
  export default function createEvents(param: {contactId: any, productId: any, weekday: any, startTime: any, durationMinutes: any, repeatUntil: any}): Promise<any>;
}
