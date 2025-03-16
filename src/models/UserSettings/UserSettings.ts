export interface NotificationUpdates {
    userId: number

    alwaysForward: boolean
    thinkingTank: boolean
    recreation: boolean
    economic: boolean
}

export class NotificationUpdatesEntity implements NotificationUpdates {
    constructor(
        public userId: number,
        public alwaysForward: boolean,
        public thinkingTank: boolean,
        public recreation: boolean,
        public economic: boolean
    ) { }
}

export interface UpdateNotificationUpdates {
    alwaysForward: boolean
    thinkingTank: boolean
    recreation: boolean
    economic: boolean
}