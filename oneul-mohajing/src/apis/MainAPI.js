import dailyLogsFromjson from '../data/dailyLog.json';

const dailyLogs = dailyLogsFromjson.diary;

export function getDailyList() {
    return dailyLogs;
}

export function getDailyDetail(date) {
    return dailyLogs.filter(dailyLog => dailyLog.date === parseInt(date))[0];
}

export function searchDaily(searchHashTag) {
    return dailyLogs.filter(dailyLog => dailyLog.hashTag.match(searchHashTag));
}

export function monthIsEmpty(selectedDate) {
    return dailyLogs.filter(calendar => calendar.date === parseInt(selectedDate));
}