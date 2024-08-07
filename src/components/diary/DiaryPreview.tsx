import styled from 'styled-components';

interface Props {
  selectedBgColor: string;
}

const DiaryPreview = ({ selectedBgColor }: Props) => {
  return (
    <DiaryPreviewWrapper>
      <DiaryPreviewContents bgColor={selectedBgColor}>
        <h1>DiaryPreview</h1>
      </DiaryPreviewContents>
    </DiaryPreviewWrapper>
  )
};

const DiaryPreviewWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 9999;
  `;

const DiaryPreviewContents = styled.div<{ bgColor: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90%;
  background-color: ${({ theme, bgColor }) => theme.diaryColor[bgColor].background};
  border-radius: 14px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
`;

export default DiaryPreview;