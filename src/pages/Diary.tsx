import React, { useState } from "react";
import DiaryItem from "../components/diary/DiaryItem";
import { dummyDiaries, dummyLikedUsers, dummyUsers } from "../dummyData";
import MusicBar from "../components/musicbar/MusicBar";
import { useParams } from "react-router-dom";

function Diary() {
  const { diaryId } = useParams();
  
  const selectedDiaryId = diaryId ? parseInt(diaryId, 10) : 1;
  const selectedDiary = dummyDiaries.find((diary) => diary.id === selectedDiaryId);

  const selectedUser = selectedDiary 
    ? dummyUsers.find(user => user.user_id === parseInt(selectedDiary.user_id))
    : null;

  const [likeCount, setLikeCount] = useState(selectedDiary?.like_count || 0);
  const [userHasLiked, setUserHasLiked] = useState(false);

  return (
    <div>
      {selectedDiary && selectedUser ? (
        <>
          <DiaryItem
            diary={selectedDiary}
            user={selectedUser} 
            likedUsers={dummyLikedUsers}
            isExpanded={true} 
            likeCount={likeCount}
            userHasLiked={userHasLiked}
            setLikeCount={setLikeCount}
            setUserHasLiked={setUserHasLiked}
          />
          <MusicBar
            youtubeUrl={selectedDiary.body.music.url}
            title={selectedDiary.body.music.title}
            artist={selectedDiary.body.music.artist}
            isExpanded={true} 
          />
        </>
      ) : (
        <p>선택된 아이디의 다이어리 혹은 유저가 없습니다.</p>
      )}
    </div>
  );
}

export default Diary;
