import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DiaryItem from "../components/diary/DiaryItem";
import MatesSidebar from "../components/sidebar/MatesSidebar";
import { useMatesData } from "../hooks/useMatesData";
import { IDiary } from "../models/diary.model";

function Mates() {
  const userId = 27;
  const { diaries, loading, error, setDiaries } = useMatesData(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MatesWrapper>
      <MatesSidebar />
      <MatesFeed>
        {diaries.map((diary) => (
          <DiaryItemWrapper key={diary.id}>
            <DiaryItem
              diary={diary} 
              user={diary.user_profile} 
              likedUsers={[]}
              isSummary={true}
            />
          </DiaryItemWrapper>
        ))}
      </MatesFeed>
    </MatesWrapper>
  );
}

const MatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const MatesFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start; 
  width: 100%; 
  padding: 20px;
  margin-bottom: 30px;
`;

const DiaryItemWrapper = styled.div`
  margin-bottom: 20px; 
  width: 100%; 
  max-width: 600px;
`;

export default Mates;