export class Customer {
    customerId: number;
    name: string;
    ext = '';
}

export class LoadingEvent {
    action: string;
    area: string;
    animated: boolean;
    count: number;

    constructor(params: any) {
        Object.assign(this, params);
    }
}
