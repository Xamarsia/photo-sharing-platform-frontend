export function formatDateTime(dateString: string): string {
    return new Intl.DateTimeFormat(
        process.env.LOCALE,
        {
            year: "numeric",
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hourCycle: 'h24',
            timeZone: 'America/New_York',
        }
    ).format(new Date(dateString + 'Z'))
}
