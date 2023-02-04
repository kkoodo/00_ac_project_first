import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getDailyDetail} from "../apis/MainAPI";
import styleSpendingDetails from '../module/Spending.module.css';

function SpendingDetails() {

    const {date} = useParams();
    
    const [dailyLog, setDailyLog] = useState({
        spending : { 
            transportation: 0,
            food: 0,
            cultural: 0,
            etc: 0
        },
    });

    /* 날짜가 바뀔 때마다 useParams로 가져온 date의 일기 가져옴 */
    useEffect(
        () => {
            setDailyLog(getDailyDetail(date))
        }, 
        [date] // <- ★
    );
    
    const {transportation, food, cultural, etc} = dailyLog.spending;

    return (
        <div>
            <table border={1} className={styleSpendingDetails.table}>
                <tr>
                    <td>교통비</td>
                    <td>{transportation}</td>
                </tr>
                <tr>
                    <td>식비</td>
                    <td>{food}</td>
                </tr>
                <tr>
                    <td>문화생활</td>
                    <td>{cultural}</td>
                </tr>
                <tr>
                    <td width={200}>기타</td>
                    <td width={300}>{etc}</td>
                </tr>
            </table>
        </div>
    );
    
}

export default SpendingDetails;