export interface NotificationUpdates {
    userId: number;
    alwaysForward: boolean;
    thinkingTank: boolean;
    recreation: boolean;
    economic: boolean;
}
export declare class NotificationUpdatesEntity implements NotificationUpdates {
    userId: number;
    alwaysForward: boolean;
    thinkingTank: boolean;
    recreation: boolean;
    economic: boolean;
    constructor(userId: number, alwaysForward: boolean, thinkingTank: boolean, recreation: boolean, economic: boolean);
}
export interface UpdateNotificationUpdates {
    alwaysForward: boolean;
    thinkingTank: boolean;
    recreation: boolean;
    economic: boolean;
}
