import DailyCom from '../components/DailyCom';
import {useEffect, useState} from 'react';
import {getDailyList} from '../apis/MainAPI';
import styleMain from '../module/Main.module.css';

function MainNo () {
    
    const [dailyList, setDailyList] = useState([]);
    
    useEffect(
        () => {
            setDailyList(getDailyList());
        },
        []
    );

    return(
        <>  
            <div className={styleMain.result}>11월 일정</div>
            <div className={styleMain.board}>
                {dailyList.filter(dailyLog => dailyLog.date.toString().substr(4,2) == 11).map(dailyLog => <DailyCom key = {dailyLog.date} dailyLog={dailyLog}/>)}
            </div>
        </>
    )

}

export default MainNo;