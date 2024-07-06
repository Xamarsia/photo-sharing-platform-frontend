export function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}

export function getFormattedDateTime(dateString: string): string {
    const locale = "en-US";
    const timeZone = "Canada/Eastern";
    return new Intl.DateTimeFormat(
        'en-US',
        {
            year: "numeric",
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hourCycle: 'h24',
            timeZone,
        }
    ).format(new Date(dateString)
    )
}