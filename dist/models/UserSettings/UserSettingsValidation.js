"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationUpdatesSchema = void 0;
const zod_1 = require("zod");
exports.UpdateNotificationUpdatesSchema = zod_1.z.object({
    alwaysForward: zod_1.z.boolean(),
    thinkingTank: zod_1.z.boolean(),
    recreation: zod_1.z.boolean(),
    economic: zod_1.z.boolean()
});
