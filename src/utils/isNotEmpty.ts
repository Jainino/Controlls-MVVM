export function isNotEmpty(value: string | null | undefined): value is string {
    return typeof value === "string" && value.trim() !== "";
}