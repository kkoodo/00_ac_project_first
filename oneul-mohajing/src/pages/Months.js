import {useState} from 'react';
import Calendar from 'react-calendar';

import moment from 'moment';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

import {monthIsEmpty} from '../apis/MainAPI';

function Months() {

  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();

  const year = value.getFullYear() + "";
  const month = value.getMonth() + 1 + "";
  const date = value.getDate() + "";
  const selectedDate = year + (month.length == 1? '0' + month: month) + (date.length == 1?  '0' + date:date);
  console.log(value.getFullYear());
  console.log(value.getMonth());
  console.log(value.getDate());

return (
  <>
    <CalendarContainer>
    <Calendar calendarType='US' onClickDay={monthIsEmpty(selectedDate).length != 0 ? 
        navigate(`/dailylog/${selectedDate}`) 
      : alert('메인화면으로 이동합니다.')} value={value} onChange={onChange} formatDay={(locale, date) => moment(date).format("DD")}/>
    </CalendarContainer>
  </>
);}

export default Months

const CalendarContainer = styled.div`
  max-width: 60vw;
  max-height: 2600px;
  margin: auto;
  margin-top: 50px;
  background-color: #A2B7BD;
  padding: 20px;
  border-radius: 30px;

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    border: 0;
    border-radius: 3px;
    color: black;
    padding: 5px 0;

    &:hover {
      background-color: lightgray;
    }

    &:active {
      background-color: #7378AB;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-wdith :15vw;
      min-width: 5vw;
      max-height: 15vh;
      min-height: 10vh;
      font-size: 1.5em;
      text-align: left;

    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
  }
  .react-calendar__month-view__days__day--weekend {
    color: salmon;
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px salmon;
      color: darkgray;
  }

`;