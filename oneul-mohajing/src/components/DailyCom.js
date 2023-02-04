import {Link} from 'react-router-dom';
import styleDailyCom from '../module/DailyCom.module.css';

function DailyCom({dailyLog}) {
    const total = dailyLog.spending.food + dailyLog.spending.cultural + dailyLog.spending.transportation + dailyLog.spending.etc
    return (
        <Link to={`/dailylog/${dailyLog.date}`}>
            <div className={styleDailyCom.outer}>
                <div className={styleDailyCom.inner}>
                    <div className={styleDailyCom.dateAndCake}>
                        <span className={styleDailyCom.date}>
                            {dailyLog.date.toString().substr(4,2)}월 {dailyLog.date.toString().substr(6,2)}일
                        </span>
                            {dailyLog.isAnniversary? 
                                  <div className={styleDailyCom.cake} style={{marginBottom : '0px'}}></div> 
                                : <div className={styleDailyCom.noCake} style={{marginBottom : '0px'}}></div>}
                        <img width='120px' src={dailyLog.image} className={styleDailyCom.photo}/>
                    </div>
                    <br/>
                    
                    <br/>
                    <div>
                        <span className={styleDailyCom.semiTitle}>일정</span><span>{dailyLog.schedule.substr(0,15)+'...'}</span>
                    </div>
                    <br/>
                    <div>
                        <span className={styleDailyCom.semiTitle}>지출</span><span>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</span>
                    </div>
                    <br/>
                    <div>
                        <span className={styleDailyCom.semiTitle}>태그</span><span>{dailyLog.hashTag}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default DailyCom;
