import dailyLogsFromjson from '../data/dailyLog.json';

const dailyLogs = dailyLogsFromjson.diary;

export function getDailyList() {
    
    return dailyLogs;
};

export function searchFunc(searchValue, searchTitle, navigate) {
    if(searchValue.length != 0) {
        switch(searchTitle) {
            case 'None' : alert('조회 항목을 설정하지 않았습니다.'); break;
            case 'date' : navigate(`/searchpage?category=date&value=${searchValue}`); break;
            case 'isAnniversary' : navigate(`/searchpage?category=isAnniversary&value=${searchValue}`); break;
            case 'hashTag' : navigate(`/searchpage?category=hashTag&value=${searchValue}`); break;
            case 'schedule' : navigate(`/searchpage?category=schedule&value=${searchValue}`); break;
            case 'spending' : navigate(`/searchpage?category=spending&value=${searchValue}`); break;
            default : alert('조회 항목을 설정하지 않았습니다.');
        }
    } else {alert('검색어가 입력되지 않았습니다.')}
};

export function searchTitleAndValue(searchCategory, searchValue) {

    if(searchCategory === 'spending') {
        return dailyLogs.filter(log => 
            log[searchCategory].transportation == parseInt(searchValue)
            || log[searchCategory].food == parseInt(searchValue)
            || log[searchCategory].cultural == parseInt(searchValue)
            || log[searchCategory].etc == parseInt(searchValue)
        )
        
    } else {
        return dailyLogs.filter(log => log[searchCategory].toString().match(searchValue));
    }
};