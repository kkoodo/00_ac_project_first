import {getDailyDetail} from "../apis/MainAPI";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spending from '../components/Spending';
import AddIcon from '../components/AddIcon';
import ImageBox from '../components/ImageBox'
import {useNavigate} from "react-router-dom";
import styleDetailPage from '../module/DetailPage.module.css';
import buttonDetailPage from '../module/Button.module.css';

function DetailPage () {
    
    const {date} = useParams();
    const navigate = useNavigate();

    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6);
    const now_date = new Date(`${year}-${month}-${day}`);

    const [dailyLog, setDailyLog] = useState({
        date: '',
        isAnniversary: false,
        spending : { 
            transportation: 0,
            food: 0,
            cultural: 0,
            etc: 0
        },
        schedule: '',
        hashTag: ''
    });

    useEffect(
        () => {
            setDailyLog(getDailyDetail(date))
        }, 
        [date]
    );

    const goToLeft = () => {
        let check = true;
        const temp_date = new Date(now_date.toJSON());
        for (let i = 0; i < 10; i++) {
          temp_date.setDate(temp_date.getDate() - 1);
          const parsedDate = temp_date.toJSON().split("T")[0].replaceAll("-", "");
          // ↑ temp_date.toJSON() -> '2022-10-29T16:04:29.997Z' -> 20221029
          if (getDailyDetail(parsedDate) != undefined) {
            navigate(`/dailylog/${parsedDate}`);
            check = false;
            break;
          }
        }
        if (check) {
          alert("이전 일정이 없습니다");
        }
      };
    
     const goToRight  = () => {
        let check = true;
        const temp_date = new Date(now_date.toJSON());
        for (let i = 0; i < 10; i++) {
          temp_date.setDate(temp_date.getDate() + 1);
          const parsedDate = temp_date.toJSON().split("T")[0].replaceAll("-", "");
          if (getDailyDetail(parsedDate) != undefined) {
            navigate(`/dailylog/${parsedDate}`);
            check = false;
            break;
          }
        }
        if (check) {
          alert("다음 일정이 없습니다");
        }
      };    

    const {hashTag, image, schedule, isAnniversary} = dailyLog;
    const {transportation, food, cultural, etc} = dailyLog.spending;
    const total = transportation + food + cultural + etc;

    const [imgUrl, setImgUrl] = useState('');

    return(
        <>
          <div className={styleDetailPage.space}></div>
          <div className={styleDetailPage.firstBox}>
              <span><button className={buttonDetailPage.button} onClick={goToLeft}>◁</button></span>
              <span><h2>{date.toString().substr(0,4)}년{date.toString().substr(4,2)}월{date.toString().substr(6,2)}일</h2></span>
              <span><button className={buttonDetailPage.button} onClick={goToRight}>▷</button></span>
          </div>

          <div className={styleDetailPage.secondBox}>
              <div className={styleDetailPage.leftBox}>
                  <div className={styleDetailPage.cake}>
                      {/* 생일 여부에 따라 케이크 이모지 or 이모지 조회 */}
                      {isAnniversary? <img height={100} width={120} src="/images/smallcake.png"/> : <ImageBox imgUrl={imgUrl}/>}
                      {isAnniversary? <p>생일인 친구가 있네요!</p> : <AddIcon setImgUrl={setImgUrl}/>}
                  </div>
                  {/* Spending 컴포넌트에게 props로 지출총액을 던져줌 */}
                  <div className={styleDetailPage.spending}><Spending total={total}/></div>
              </div>

              <div className={styleDetailPage.rightBox}>
                  <h2>오늘의 일정</h2>
                  <div>{schedule}</div>
                  <p></p>
                  <img height={250} src={image} width={400}/>
                  <h3>{hashTag}</h3>
              </div>
          </div>
        </>
    )
}

export default DetailPage;