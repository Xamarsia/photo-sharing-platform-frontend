export function formatDateTime(dateString: string): string {
    return new Intl.DateTimeFormat(
        process.env.LOCALE,
        {
            year: "numeric",
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hourCycle: 'h24',
            timeZone: process.env.TIME_ZONE,
        }
    ).format(new Date(dateString))
}
