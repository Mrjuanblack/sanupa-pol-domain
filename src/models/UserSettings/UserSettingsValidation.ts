import { z } from "zod";
import { UpdateNotificationUpdates } from "./UserSettings";

export const UpdateNotificationUpdatesSchema: z.ZodType<UpdateNotificationUpdates> = z.object({
    alwaysForward: z.boolean(),
    thinkingTank: z.boolean(),
    recreation: z.boolean(),
    economic: z.boolean()
})