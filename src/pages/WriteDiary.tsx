// import styled from 'styled-components';
// import Editor from '../components/diary/Editor';
// import { FiPlusCircle, FiUser, FiLock, FiSearch, FiSend } from "react-icons/fi";
// import { VscSymbolColor } from "react-icons/vsc";
// import { RiGlobalLine } from "react-icons/ri";
// import Button from '../components/button/Button';

// const WriteDiary = () => {
//   return (
//     <WriteDiaryWrapper>
//       <WriteDiaryContents>
//         {/* 아이콘 추가, 배경 색상 추가 */}
//         <IconBg>
//           <div className="icon">
//             <FiPlusCircle />
//             <span>아이콘 추가</span>
//           </div>
//           <div className="bgColor">
//             <VscSymbolColor />
//             <span>배경 색상 추가</span>
//           </div>
//         </IconBg>
//         {/* 제목 */}
//         <Title
//           type="text"
//           placeholder="제목"
//         />
//         {/* 오늘의 기분 */}
//         <Section className="mood">
//           <label>오늘의 기분</label>
//           <select>
//             <option value="1">😡</option>
//             <option value="2">🙁</option>
//             <option value="3">🙂</option>
//             <option value="4">😆</option>
//             <option value="5">😍</option>
//           </select>
//         </Section>
//         {/* 오늘의 날짜 */}
//         <Section className="today">
//           <label>날짜</label>
//           <span>2024년 7월 17일 목요일</span>
//         </Section>
//         {/* 오늘의 날씨 */}
//         <Section className="weather">
//           <label>날씨</label>
//           <span>31C 맑음</span>
//         </Section>
//         {/* 오늘의 음악 */}
//         <Section className="music">
//           <label>음악</label>
//           <div className="music-info">
//             <input
//               type="text"
//               placeholder="TITLE"
//             />
//             <input
//               type="text"
//               placeholder="ARTIST"
//             />
//             <input
//               type="text"
//               placeholder="YOUTUBE URL"
//             />
//           </div>
//         </Section>
//         {/* 일기 공개 범위 */}
//         <Section className="section scope">
//           <label>공개범위</label>
//           <select>
//             <option value="all">
//               <RiGlobalLine />
//               <span>전체 공개</span>
//             </option>
//             <option value="mate">
//               <FiUser />
//               <span>친구 공개</span>
//             </option>
//             <option value="me">
//               <FiLock />
//               <span>비공개</span>
//             </option>
//           </select>
//         </Section>
//         {/* 일기 작성 에디터 */}
//         <Editor />
//         {/* 미리보기, 등록하기 BTN */}
//         <SubmitBox>
//           <Button size="short" schema="gray">
//             <FiSearch size={16} /> 미리보기
//           </Button>
//           <Button size="short" schema="gray">
//             <FiSend size={16} /> 등록하기
//           </Button>
//         </SubmitBox>
//       </WriteDiaryContents>
//     </WriteDiaryWrapper>
//   )
// };

// const WriteDiaryWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   padding: 80px 10%;
//   background-color: ${({ theme }) => theme.diaryColor.blue.background};
//   &:-webkit-scrollbar {
//     display: none;
//   }

// `;

// const WriteDiaryContents = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   width: 100%;
//   height: 100%;
//   color: ${({ theme }) => theme.color.gray777};
//   font-size: ${({ theme }) => theme.text.text2};

//   input, select {
//     background-color: transparent;
//     border: none;
//     outline: none;
//     text-align: left;

//     &::placeholder {
//       color: ${({ theme }) => theme.color.grayDF};
//     }
//   }
// `;

// const IconBg = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 16px;
//   font-family: ${({ theme }) => theme.fontFamily.kor};
//   font-size: ${({ theme }) => theme.text.text2};

//   div {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 4px;
//     cursor: pointer;

//     svg {
//       font-size: ${({ theme }) => theme.title.title4};
//     }
//   }
// `;

// const Title = styled.input`
//   width: 100%;
//   padding: 8px 0;
//   font-family: ${({ theme }) => theme.fontFamily.kor};
//   font-size: ${({ theme }) => theme.title.title1};
//   font-weight: 600;
// `;

// const Section = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
//   font-family: ${({ theme }) => theme.fontFamily.kor};
//   font-size: ${({ theme }) => theme.text.text2};

//   label {
//     width: 140px;
//   }

//   &.music {
//     align-items: flex-start;

//     .music-info {
//       display: flex;
//       flex-direction: column;
//       gap: 10px;
//       padding: 4px 0;

//       input {
//         color: ${({ theme }) => theme.color.gray777};
//       }
//     }
//   }
// `;

// const SubmitBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 12px;
// `;

// export default WriteDiary;

import styled from 'styled-components';
import Editor from '../components/diary/Editor';
import { FiPlusCircle, FiUser, FiLock, FiSearch, FiSend } from "react-icons/fi";
import { VscSymbolColor } from "react-icons/vsc";
import { RiGlobalLine } from "react-icons/ri";
import Button from '../components/button/Button';

const WriteDiary = () => {
  return (
    <WriteDiaryWrapper>
      <WriteDiaryContents>
        {/* 아이콘 추가, 배경 색상 추가 */}
        <IconBg>
          <div className="icon">
            <FiPlusCircle />
            <span>아이콘 추가</span>
          </div>
          <div className="bgColor">
            <VscSymbolColor />
            <span>배경 색상 추가</span>
          </div>
        </IconBg>
        {/* 제목 */}
        <Title
          type="text"
          placeholder="제목"
        />
        {/* 오늘의 기분 */}
        <Section className="mood">
          <label>오늘의 기분</label>
          <select>
            <option value="1">😡</option>
            <option value="2">🙁</option>
            <option value="3">🙂</option>
            <option value="4">😆</option>
            <option value="5">😍</option>
          </select>
        </Section>
        {/* 오늘의 날짜 */}
        <Section className="today">
          <label>날짜</label>
          <span>2024년 7월 17일 목요일</span>
        </Section>
        {/* 오늘의 날씨 */}
        <Section className="weather">
          <label>날씨</label>
          <span>31C 맑음</span>
        </Section>
        {/* 오늘의 음악 */}
        <Section className="music">
          <label>음악</label>
          <div className="music-info">
            <input
              type="text"
              placeholder="TITLE"
            />
            <input
              type="text"
              placeholder="ARTIST"
            />
            <input
              type="text"
              placeholder="YOUTUBE URL"
            />
          </div>
        </Section>
        {/* 일기 공개 범위 */}
        <Section className="section scope">
          <label>공개범위</label>
          <select>
            <option value="all">
              <RiGlobalLine />
              <span>전체 공개</span>
            </option>
            <option value="mate">
              <FiUser />
              <span>친구 공개</span>
            </option>
            <option value="me">
              <FiLock />
              <span>비공개</span>
            </option>
          </select>
        </Section>
        {/* 일기 작성 에디터 */}
        <Editor />
        {/* 미리보기, 등록하기 BTN */}
        <SubmitBox>
          <Button size="short" schema="gray">
            <FiSearch size={16} /> 미리보기
          </Button>
          <Button size="short" schema="gray">
            <FiSend size={16} /> 등록하기
          </Button>
        </SubmitBox>
      </WriteDiaryContents>
    </WriteDiaryWrapper>
  )
};

const WriteDiaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px 10%;
  background-color: ${({ theme }) => theme.diaryColor.blue.background};
  overflow: hidden; /* Hide the scrollbar */
  &::-webkit-scrollbar {
    display: none; /* For Webkit browsers */
  }
`;

const WriteDiaryContents = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.gray777};
  font-size: ${({ theme }) => theme.text.text2};

  input, select {
    background-color: transparent;
    border: none;
    outline: none;
    text-align: left;

    &::placeholder {
      color: ${({ theme }) => theme.color.grayDF};
    }
  }
`;

const IconBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-size: ${({ theme }) => theme.text.text2};

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    svg {
      font-size: ${({ theme }) => theme.title.title4};
    }
  }
`;

const Title = styled.input`
  width: 100%;
  padding: 8px 0;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-size: ${({ theme }) => theme.title.title1};
  font-weight: 600;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-size: ${({ theme }) => theme.text.text2};

  label {
    width: 140px;
  }

  &.music {
    align-items: flex-start;

    .music-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 4px 0;

      input {
        color: ${({ theme }) => theme.color.gray777};
      }
    }
  }
`;

const SubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export default WriteDiary;
