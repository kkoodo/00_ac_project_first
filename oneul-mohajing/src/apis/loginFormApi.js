import loginDb from '../data/dailyLog.json';

export function getDailyDb() {
    return loginDb;
}

export function getDetail(loginInfo) {
    return (loginInfo.name === loginDb.user[0].name && loginInfo.password === loginDb.user[0].password)
}