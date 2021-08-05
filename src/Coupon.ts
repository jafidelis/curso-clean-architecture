export default class Coupon {
    code: string;
    percentage: number;
    expireDate: Date;

    constructor(code: string, percentage: number, expire: Date) {
        this.code = code;
        this.percentage = percentage;
        this.expireDate = expire;
    }

    isExpired() {
        return this.expireDate.getTime() < new Date().getTime();
    }
}