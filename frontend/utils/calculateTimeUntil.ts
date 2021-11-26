import dayjs from 'dayjs';
export const calculateTimeUntil = (deadline: Date):string => {
    const dueDate = dayjs(deadline)
    const daysTill = dueDate.diff(dayjs(), 'day')
    return daysTill.toString()
}