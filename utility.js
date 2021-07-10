const stringifyDate =(date) => {
    const options = {day:"numeric",month:"short",year:'numeric'};
    const newDate = !date ? "undefoned":
                        new date(date.parse(date)).toLocalDateString('en-GB',options);
                        return newDate;
}