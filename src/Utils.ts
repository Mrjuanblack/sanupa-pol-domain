export function parseStringToInt(value: string | undefined): number | false {
    if (!value) return false;
    const parsed = Number(value);
    if (Number.isInteger(parsed)) return parsed;
    return false;
}