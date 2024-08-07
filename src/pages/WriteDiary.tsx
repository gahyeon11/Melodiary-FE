import styled from 'styled-components';
import DiaryEditor from '../components/diary/DiaryEditor';
import { FiPlusCircle, FiUser, FiLock, FiSearch, FiSend } from "react-icons/fi";
import { VscSymbolColor } from "react-icons/vsc";
import { RiGlobalLine } from "react-icons/ri";
import Button from '../components/button/Button';
import { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import DiaryPreview from '../components/diary/DiaryPreview';
import { colors, moods, privacies } from '../constants/writeDiary';
import { useGeoLocation } from '../hooks/useGeoLocation';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
}

const WriteDiary = () => {
  // 날짜, 요일
  const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const today = new Date();
  const todayDay = week[today.getDay()];
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${todayDay}`;

  // 날씨
  const { location, error } = useGeoLocation(geolocationOptions);
  if(location) {
    console.log("위도 : ", location?.latitude);
    console.log("경도 : ", location?.longitude);
  } else {
    console.log("GeoLocationError : ", error);
  }
  
  // 상태 (오늘의 이모지, 배경 색상, 기분, 공개 범위)
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [selectedBgColor, setSelectedBgColor] = useState<string>("default");
  const [selectedMood, setSelectedMood] = useState<string>("😍");
  const [selectedPrivacy, setSelectedPrivacy] = useState<string>(privacies[2]);

  // 드롭다운 여부 (오늘의 이모지, 배경 색상, 기분, 공개 범위, 미리보기)
  const [isEmojiDropdown, setIsEmojiDropdown] = useState(false);
  const [isBgColorDropdown, setIsBgColorDropdown] = useState(false);
  const [isMoodDropdown, setIsMoodDropdown] = useState(false);
  const [isPrivacyDropdown, setIsPrivacyDropdown] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // 현재 드롭다운이 되는 영역 (오늘의 이모지, 배경 색상, 기분, 공개 범위, 미리보기)
  const emojiDropdownRef = useRef<HTMLDivElement>(null);
  const bgColorDropdownRef = useRef<HTMLDivElement>(null);
  const moodDropdownRef = useRef<HTMLDivElement>(null);
  const privacyDropdownRef = useRef<HTMLDivElement>(null);
  const previewOpenRef = useRef<HTMLDivElement>(null);

  // 드롭다운 토글 함수 (오늘의 이모지, 배경 색상, 기분, 공개 범위)
  const toogleEmojiDropdown = () => {
    setIsEmojiDropdown(!isEmojiDropdown);
  };
  const toogleBgColorDropdown = () => {
    setIsBgColorDropdown(!isBgColorDropdown);
  };
  const toogleMoodDropdown = () => {
    setIsMoodDropdown(!isMoodDropdown);
  };
  const tooglePrivacyDropdown = () => {
    setIsPrivacyDropdown(!isPrivacyDropdown);
  };
  const tooglePreviewOpen = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  // 드롭다운 옵션 (배경 색상, 기분, 공개 범위)
  const selectBgColorOption = (option: string) => {
    setSelectedBgColor(option);
    setIsBgColorDropdown(false);
  };
  const selectMoodOption = (option: string) => {
    setSelectedMood(option);
    setIsMoodDropdown(false);
  };
  const selectPrivacyOption = (option: string) => {
    setSelectedPrivacy(option);
    setIsPrivacyDropdown(false);
  };

  // 외부 클릭 시 드롭다운 닫힘 (오늘의 이모지, 배경 색상, 기분, 공개 범위, 미리보기)
  const handleClickEmojiOutside = (e: MouseEvent) => {
    if(emojiDropdownRef.current && !emojiDropdownRef.current.contains(e.target as Node)) {
      setIsEmojiDropdown(false);
    }
  };
  const handleClickBgColorOutside = (e: MouseEvent) => {
    if(bgColorDropdownRef.current && !bgColorDropdownRef.current.contains(e.target as Node)) {
      setIsBgColorDropdown(false);
    }
  };
  const handleClickMoodOutside = (e: MouseEvent) => {
    if(moodDropdownRef.current && !moodDropdownRef.current.contains(e.target as Node)) {
      setIsMoodDropdown(false);
    }
  };
  const handleClickPrivacyOutside = (e: MouseEvent) => {
    if(privacyDropdownRef.current && !privacyDropdownRef.current.contains(e.target as Node)) {
      setIsPrivacyDropdown(false);
    }
  };
  const handleClickPreivewOutside = (e: MouseEvent) => {
    if(previewOpenRef.current && !previewOpenRef.current.contains(e.target as Node)) {
      setIsPreviewOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickEmojiOutside);
    document.addEventListener("click", handleClickBgColorOutside);
    document.addEventListener("click", handleClickMoodOutside);
    document.addEventListener("click", handleClickPrivacyOutside);
    document.addEventListener("click", handleClickPreivewOutside);
    return () => {
      document.removeEventListener("click", handleClickEmojiOutside);
      document.removeEventListener("click", handleClickBgColorOutside);
      document.removeEventListener("click", handleClickMoodOutside);
      document.removeEventListener("click", handleClickPrivacyOutside);
      document.removeEventListener("click", handleClickPreivewOutside);
    };
  }, []);

  const getPrivacyIcon = (privacyName: string) => {
    switch (privacyName) {
      case "전체 공개":
        return <RiGlobalLine />;
      case "친구 공개":
        return <FiUser />;
      case "비공개":
        return <FiLock />;
      default:
        return null;
    }
  };

  return (
    <WriteDiaryWrapper bgColor={selectedBgColor}>
      {isPreviewOpen && (
        <DiaryPreview selectedBgColor={selectedBgColor} />
      )}
      <WriteDiaryContents>
        {/* 아이콘 추가, 배경 색상 추가 */}
        <div className="today-emoji">
          {selectedEmoji}
        </div>
        <IconBg>
          <div className="icon" ref={emojiDropdownRef}>
            <div onClick={toogleEmojiDropdown}>
              <FiPlusCircle />
              <span>아이콘 추가</span>
            </div>
            {isEmojiDropdown && (
              <div className="emoji-picker">
                <EmojiPicker
                  searchDisabled={false}
                  previewConfig={{
                    showPreview: true,
                    defaultEmoji: "1f92a",
                    defaultCaption: "Emoji"
                  }}
                  onEmojiClick={(e) => {
                    setSelectedEmoji(e.emoji)
                  }}
                />
              </div>
            )}
          </div>
          <div className="bgColor" ref={bgColorDropdownRef}>
            <div onClick={toogleBgColorDropdown}>
              <VscSymbolColor />
              <span>배경 색상 추가</span>
            </div>
            {isBgColorDropdown && (
              <ul className="bgColor-list">
                {colors.map((color, index) => (
                  <li
                    key={index}
                    onClick={() => selectBgColorOption(color.name)}
                    style={{ backgroundColor: color.background }}
                  />
                ))}
              </ul>
            )}
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
          <div className="select-mood-box" ref={moodDropdownRef}>
            <div className="selected-mood" onClick={toogleMoodDropdown}>
              {selectedMood}
            </div>
            {isMoodDropdown && (
              <ul className="mood-list">
                {moods.map((mood, index) => (
                  <li key={index} onClick={() => selectMoodOption(mood)}>
                    {mood}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
        {/* 오늘의 날짜 */}
        <Section className="today">
          <label>날짜</label>
          <span>{formattedDate}</span>
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
        <Section className="privacy">
          <label>공개범위</label>
          <div className="select-privacy-box" ref={privacyDropdownRef}>
            <div className="selected-privacy" onClick={tooglePrivacyDropdown}>
                {getPrivacyIcon(selectedPrivacy)}
                <span>{selectedPrivacy}</span>
              </div>
              {isPrivacyDropdown && (
                <ul className="privacy-list">
                  {privacies.map((privacy) => (
                    <li key={privacy} onClick={() => selectPrivacyOption(privacy)}>
                      {getPrivacyIcon(privacy)}
                      <span>{privacy}</span>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </Section>
        {/* 일기 작성 에디터 */}
        <DiaryEditor />
        {/* 미리보기, 등록하기 BTN */}
        <SubmitBox ref={previewOpenRef}>
          <Button
            size="short" 
            schema="gray"
            type="button"
            onClick={tooglePreviewOpen}
          >
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

const WriteDiaryWrapper = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px 10%;
  background-color: ${({ theme, bgColor }) => theme.diaryColor[bgColor].background};
  position: relative;

  &:-webkit-scrollbar {
    display: none;
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

  .today-emoji {
    font-size: 48px;
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

  .icon > div,
  .bgColor > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    svg {
      font-size: ${({ theme }) => theme.title.title4};
    }

    &:hover {
      color: ${({ theme }) => theme.color.grayblack};
      transition: all 0.15s ease-in-out;
    }
  }
  /* 오늘의 이모지 */
  .icon {
    position: relative;

    .emoji-picker {
      position: absolute;
      top: 28px;
      left: 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 999;

      .epr_-8ygbw8 {
        padding: 8px 10px;
      }

      .epr_-kg0voo {
        display: none;
      }
    }
  }

  /* 일기 배경 색상 */
  .bgColor {
    position: relative;
    
    .bgColor-list {
      position: absolute;
      top: 28px;
      left: 0;
      display: flex;
      flex-direction: row;
      gap: 8px;
      padding: 12px 16px;
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid #E7E7E7;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 999;
  
      li {
        width: 24px;
        height: 24px;
        border: 1px solid ${({ theme }) => theme.color.grayCCC};
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.1s ease-in-out;

        &:hover {
          border: 1px solid ${({ theme }) => theme.color.gray999};
          transition: all 0.1s ease-in-out;
        }
      }
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

  /* 음악 */
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

  /* 오늘의 기분 */
  .select-mood-box {
    position: relative;

    .selected-mood {
      font-size: 20px;
      cursor: pointer;
    }

    .mood-list {
      position: absolute;
      top: 28px;
      left: 0;
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 10px 14px;
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid #E7E7E7;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 999;

      li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        font-size: 20px;
        transition: all 0.15s ease-in-out;

        &:hover {
          transform: translateY(-2px);
          transition: all 0.15s ease-in-out;
        }
      }
    }
  }

  /* 일기 공개 범위 */
  .select-privacy-box {
    position: relative;

    .selected-privacy {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.color.grayblack};
        transition: all 0.15s ease-in-out;
      }
    }

    .privacy-list {
      position: absolute;
      top: 28px;
      left: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 124px;
      padding: 12px 16px;
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid #E7E7E7;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 999;

      li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        
        &:hover {
          color: ${({ theme }) => theme.color.grayblack};
          transition: all 0.1s ease-in-out;
        }
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