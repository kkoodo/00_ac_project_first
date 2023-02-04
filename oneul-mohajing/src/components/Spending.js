import styleSpending from '../module/Spending.module.css';
import SpendingDetails from './SpendingDetails';
import {useState} from 'react';

function Spending({total}) {

    const [isTrue, setIsTrue] = useState(false);

    /* 클릭으로 논리값을 반전 시켜 상세지출 보기 */
    const onClickHandler = () => {
        setIsTrue(!isTrue)
    };

    return (
        <>
            <div>
                <div className={styleSpending.todayMoney}>
                    <div><h2>오늘의 지출</h2></div>
                    <div>
                        <h2 className={styleSpending.red}>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h2>
                        &nbsp;&nbsp;
                        <h2>원</h2>
                    </div>
                </div>
                <br/><br/>
                <h2 className={styleSpending.click} onClick={onClickHandler}>지출 상세 내역</h2>
                <div>
                    {isTrue? <SpendingDetails/> : ''}
                </div>
            </div>
        </>
    );
}

export default Spending;