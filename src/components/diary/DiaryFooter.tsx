import React from "react";
import styled from "styled-components";
import { DiaryExpandSummaryProps, DiaryItemProps, DiarySummaryProps, DiaryTagProps } from "./DiaryItem";

const DiaryContent: React.FC<DiaryItemProps> = ({
  diary,
  isSummary = false,
  isExpanded = false,
}) => {
  // content에서 이미지 태그 제거 (요약 버전을 위해서)
  const stripImagesFromContent = (htmlContent: string) => {
    return htmlContent.replace(/<img[^>]*>/g, "");
  };

  return (
    <ContentContainer isSummary={isSummary}>
      {isSummary && diary.body.img_urls.length > 0 && (
        <SummaryImage src={diary.body.img_urls[0]} alt={diary.body.title} />
      )}
      <Title>
        {isSummary && (
          <Right>
            <DiaryTitle isSummary={isSummary}>{diary.body.title}</DiaryTitle>
          </Right>
        )}
      </Title>
      <DiaryTag tagColor={diary.body.background_color} isSummary={isSummary}>
        <DiaryTagItem
          tagColor={diary.body.background_color}
          isSummary={isSummary}
        >
          오늘의 이모지 | {diary.body.emoji}
        </DiaryTagItem>
        <DiaryTagItem
          tagColor={diary.body.background_color}
          isSummary={isSummary}
        >
          기분 | {diary.body.mood}
        </DiaryTagItem>
        <DiaryTagItem
          tagColor={diary.body.background_color}
          isSummary={isSummary}
        >
          위치 | {diary.body.weather.location}
        </DiaryTagItem>
        <DiaryTagItem
          tagColor={diary.body.background_color}
          isSummary={isSummary}
        >
          날씨 | {diary.body.weather.icon} {diary.body.weather.avg_temperature}°C
        </DiaryTagItem>
        <DiaryTagItem
          tagColor={diary.body.background_color}
          isSummary={isSummary}
        >
          오늘의 선곡 | {diary.body.music.title} - {diary.body.music.artist}
        </DiaryTagItem>
      </DiaryTag>
      <DiaryText isExpanded={isExpanded} isSummary={isSummary}>
        <div
          dangerouslySetInnerHTML={{
            __html: isSummary
              ? stripImagesFromContent(diary.body.content)
                  .split("\n")
                  .slice(0, 2)
                  .join("\n") + " ..."
              : diary.body.content,
          }}
        />
      </DiaryText>
    </ContentContainer>
  );
};

export default DiaryContent;

const ContentContainer = styled.div<DiarySummaryProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: ${({ isSummary }) => (isSummary ? "0 5%" : "0 10%")};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
  justify-content: start;
`;

const DiaryTitle = styled.h2<DiarySummaryProps>`
  margin: 0;
  justify-content: start;
  font-size: ${({ theme }) => theme.title.title3};
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: ${({ isSummary }) => (isSummary ? "0 0 10px 0" : "10px 0")};
`;

const DiaryTag = styled.div<DiaryTagProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 10px 0;
  border-top: ${({ isSummary, theme }) =>
    isSummary ? "none" : `1px solid ${theme.color.grayDF}`};
  border-bottom: ${({ isSummary, theme }) =>
    isSummary ? "none" : `1px solid ${theme.color.grayDF}`};
`;

const DiaryTagItem = styled.div<DiaryTagProps>`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  white-space: nowrap;
  border-radius: 20px;
  background-color: ${({ theme, tagColor }) =>
    theme.diaryColor[tagColor]?.tag || theme.diaryColor.default.tag};
  font-size: ${({ theme }) => theme.text.text3};
`;

const DiaryText = styled.div<DiaryExpandSummaryProps>`
  width: 100%;
  max-width: 100%;
  padding: ${({ isSummary }) => (isSummary ? "10px 0 0 0" : "30px 0 0 0")};
  margin-bottom: ${({ isExpanded, isSummary }) =>
    isExpanded || isSummary ? "10px" : "150px"};
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.grayblack};
  white-space: pre-line;
`;

const SummaryImage = styled.img`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  margin-bottom: 10px;
`;
