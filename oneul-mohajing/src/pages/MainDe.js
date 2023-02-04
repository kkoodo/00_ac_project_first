import DailyCom from '../components/DailyCom';
import {useEffect, useState} from 'react';
import {getDailyList} from '../apis/MainAPI';
import styleMain from '../module/Main.module.css';

function MainDe () {
    
    const [dailyList, setDailyList] = useState([]);

    useEffect(
        () => {
            setDailyList(getDailyList());
        },
        []
    );

    return(
        <>  
            <div className={styleMain.result}>12월 일정</div>
            <div className={styleMain.board}>
                {dailyList.filter(dailyLog => dailyLog.date.toString().substr(4,2) == 12).map(dailyLog => <DailyCom key = {dailyLog.date} dailyLog={dailyLog}/>)}
            </div>  
        </>
    )
}

export default MainDe;