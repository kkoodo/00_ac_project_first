import {useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import DailyCom from '../components/DailyCom';
import DailyComEmpty from '../components/DailyComEmpty';
import {searchTitleAndValue} from '../apis/HeaderAPI';
import styleSearchPage from '../module/SearchPage.module.css';

function SearchPage () {

    const [searchParam] = useSearchParams();
    const searchCategory = searchParam.get('category');
    const searchValue = searchParam.get('value');
    const [resultList, setResultList] = useState([]);
    const count = resultList.length;

    useEffect(
        () => {
            setResultList(searchTitleAndValue(searchCategory, searchValue))
        },[searchParam]
    )

    return(
        <>
            <div className={styleSearchPage.result}>
                <div className={styleSearchPage.search}>{searchValue}</div>&nbsp;
                검색 결과는
                &nbsp;<div className={styleSearchPage.count}>{count}</div>&nbsp;
                건 입니다.
            </div>
            <div className={styleSearchPage.board}>
                {resultList?.length > 0 ? (resultList.map(dailyLog => <DailyCom key={dailyLog.date} dailyLog={dailyLog}/>)) : <DailyComEmpty/>}
            </div>
        </>
    )

}

export default SearchPage;