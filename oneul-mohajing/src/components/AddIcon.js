import {useState} from 'react';
import styleSpending from '../module/Spending.module.css';

function AddIcon({setImgUrl}) {

    const [iconName, setIconName] = useState('');

    const onChangeHandler = (e) => {
        setIconName(e.target.value);
    }

    const onClickHandler = () => {
    fetch('http://api.github.com/emojis')
    .then((response) => {
        return response.json()
    }).then((result) => {
        console.log(result);
        setImgUrl(result[iconName]);
    });
    }

    const onKeyPressHandler = (e) => {
        if(e.key == 'Enter') {
            fetch('http://api.github.com/emojis')
            .then((response) => {
                return response.json()
            }).then((result) => {
                console.log(result);
                setImgUrl(result[iconName]);
            });
        };
    } 
    return ( 
        <>
            <input 
                className={styleSpending.round}
                type="text" 
                placeholder="아이콘 추가하기" 
                onChange={onChangeHandler} 
                onKeyPress={onKeyPressHandler}>
                
            </input>
            <button className={styleSpending.search} onClick={onClickHandler}>검색</button>
        </>
    );
}

export default AddIcon;