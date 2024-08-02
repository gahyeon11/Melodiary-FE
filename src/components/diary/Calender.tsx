import React, { useState } from 'react';
import styled from 'styled-components';
import emojiX from '../../assets/icons/rectangle1.png';
import future from '../../assets/icons/rectangle2.png';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface Emojis {
  [key: number]: string | JSX.Element;
}

const Calendar = () => {
  const [year, setYear] = useState<number>(2024);
  const [month, setMonth] = useState<number>(6);
  const [showSelector, setShowSelector] = useState<boolean>(false);

  const emojis: Emojis = {
    1: '🐵',
    2: '🐒',
    3: '🐵',
    4: '😎',
    5: '🔥',
    6: '🐟',
    9: '',
    10: '',
    12: '',
    13: '🌸',
    14: '🍀',
    15: '',
    16: '💙',
    17: '💎',
    19: '',
    30: '',
  };

  const handleYearChange = (direction: number) => {
    setYear((prevYear) => prevYear + direction);
  };

  const handleMonthClick = (index: number) => {
    setMonth(index);
    setShowSelector(false);
  };

  const handleMonthChange = (direction: number) => {
    setMonth((prevMonth) => {
      const newMonth = prevMonth + direction;
      if (newMonth < 0) {
        setYear((prevYear) => prevYear - 1);
        return 11;
      }
      if (newMonth > 11) {
        setYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };


  const renderCalendar = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    const startDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks: JSX.Element[] = [];
    let days: JSX.Element[] = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<td key={`empty-start-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      let emoji = emojis[day];

      if (year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDate)) {
        emoji = <EmojiX src={future} alt="Future" />; // 미래 날짜에 추가할 특정 이모지
      }

      days.push(
        <td key={day}>
          <DayContainer>
            <div>{day}</div>
            <DayEmoji>
              {emoji ? emoji : emoji === '' ? <EmojiX src={emojiX} alt="emojiX" /> : null}
            </DayEmoji>
          </DayContainer>
        </td>
      );

      if ((day + startDay) % 7 === 0 || day === daysInMonth) {
        weeks.push(<tr key={day}>{days}</tr>);
        days = [];
      }
    }

    return weeks;
  };

  return (
    <CalendarContainer>
      <Table>
        <thead>
          <tr>
            <td colSpan={7}>
              <ControlsWrapper>
                <Control>
                  <Dropdown onClick={() => setShowSelector(!showSelector)}>
                    <span>{year}년 {month + 1}월</span>
                    <Arrow>▼</Arrow>
                  </Dropdown>
                  <IconWrapper>
                    <ArrowIcon as={IoIosArrowBack} onClick={() => handleMonthChange(-1)} />
                    <ArrowIcon as={IoIosArrowForward} onClick={() => handleMonthChange(1)} />
                  </IconWrapper>
                  {showSelector && (
                    <MonthYearSelector>
                      <SelectorHeader>
                        <button onClick={() => handleYearChange(-1)}>◀</button>
                        <span>{year}</span>
                        <button onClick={() => handleYearChange(1)}>▶</button>
                      </SelectorHeader>
                      <MonthGrid>
                        {['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'].map((m, index) => (
                          <MonthButton
                            key={index}
                            className={index === month ? 'active' : ''}
                            onClick={() => handleMonthClick(index)}
                          >
                            {m}
                          </MonthButton>
                        ))}
                      </MonthGrid>
                    </MonthYearSelector>
                  )}
                </Control>
              </ControlsWrapper>
            </td>
          </tr>
          <tr className="day">
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </Table>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  width: 100%;
`;

const ControlsWrapper = styled.div`
  padding: 4px 14px 9px 14px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  position: relative; 
`;

const Control = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.text.text3};
  span {
    padding: 5px 5px;
    padding-right: 0px;
  }
`;

const Arrow = styled.span`
  padding: 0px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const ArrowIcon = styled.div`
  width: 17px;
  height: 17px;
  color: ${({ theme }) => theme.color.grayblack};
  cursor: pointer;
`;

const MonthYearSelector = styled.div`
  position: absolute;
  top: 100%; 
  left: 0;
  background: white;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 10;
  border-radius: 8px;
  margin-top: 5px; 
`;

const SelectorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const MonthButton = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #f2f2f2;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #a0c4ff;
  }
`;

const Table = styled.table`
  width: 100%;
  max-width: 700px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  padding-bottom: 20px;
  overflow: hidden;
  border: 1px solid #ddd;
  th, td {
    padding-top: 5px;
    text-align: center;
    border: none;
  }
  th {
    padding: 15px 0 20px ;
    background-color: transparent;
  }
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px; 
`;

const DayEmoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  height: 21.5px;
`;

const EmojiX = styled.img`
  width: 22px;
  height: 22px;
`;