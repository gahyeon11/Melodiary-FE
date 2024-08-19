import React from "react";
import { useParams } from "react-router-dom";
import DiaryItem from "../components/diary/DiaryItem";
import MusicBar from "../components/musicbar/MusicBar";
import { useDiary } from "../hooks/useDiary";

function Diary() {
  const { diaryId } = useParams<{ diaryId: string }>(); 
  const numericDiaryId = diaryId ? Number(diaryId) : null;
  
  const { diary, loading: diaryLoading, error } = useDiary(numericDiaryId!);

  if (diaryLoading) {
    return <p>Loading...</p>;
  }

  if (error || !diary) {
    return <p>선택된 아이디의 다이어리 혹은 유저가 없습니다.</p>;
  }


  return (
    <div>
      <DiaryItem
        diary={diary}
        user={diary.user_profile}
        likedUsers={[]}
        isExpanded={true}
      />
      {diary.body.music && (
        <MusicBar
          youtubeUrl={diary.body.music.music_url}
          title={diary.body.music.title}
          artist={diary.body.music.artist}
          isExpanded={true}
        />
      )}
    </div>
  );
}

export default Diary;
