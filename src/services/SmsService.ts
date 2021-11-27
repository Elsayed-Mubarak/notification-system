import { ResponseCode } from "../models/enums/StatusCode"
import ISendNotification from "../models/interfaces/ISendNotification"

export default class SmsService implements ISendNotification {
    constructor() { }

    async send(data: any) {
        if (data.userId)
            this.sendOne(data)
        else
            this.sendGroup(data)
    }
    async sendOne(data: any) {
        console.log(`sendOne ${data.notificationType}`)
    }
    async sendGroup(data: any) {
        console.log(`sendGroup ${data.notificationType}`)
    }
    async getRateLimterObject(max: any, duration: any) {
        console.log(`getRateLimterObject ...`);
    }
}