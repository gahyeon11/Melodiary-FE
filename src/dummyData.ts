import { IDiary } from "./models/diary.model";

export const dummyDiaries: IDiary[] = [
  {
    id: 1,
    user_id: "1",
    like_count: 10,
    created_at: "2024-08-01",
    body: {
      title: "Sample 1",
      content: `<p>8월 1일 목요일
      날씨 더움 이미지 없는 일기 이미지 없는 일기 이미지 없는 일기</p>
      ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
      이미지 없는 일기 이미지 없는 일기 이미지 없는 일기
      이미지 없는 일기 이미지 없는 일기 이미지 없는 일기
      <h1>이미지 없는 일기 이미지 없는 일기 이미지 없는 일기</h1>
      `,
      img_urls: [],
      mood: "😁",
      emoji: "✨",
      privacy: "public",
      music: {
        url: "https://www.youtube.com/watch?v=Jkd_CsnaF2k",
        title: "Supernatural",
        artist: "NewJeans",
      },
      weather: {
        icon: "🌤️",
        location: "Seoul",
        avg_temperature: 30,
      },
      background_color: "blue",
    },
  },
  {
    id: 2,
    user_id: "2",
    like_count: 5,
    created_at: "2024-08-05",
    body: {
      title: "Sample 2",
      content: `<p>이미지 제거 테스트 html 이미지 제거 테스트
      이미지 content에서 제외하고 대표 이미지 떠야 하는데,,ㅏㅏ</p>
        <img src="https://i.pinimg.com/236x/71/0f/a0/710fa07cdbeac342f8a99928c451d38c.jpg" alt="Diary Image" />
        <p>강아지 귀엽다..</p>
        <img src="https://i.pinimg.com/236x/af/2b/53/af2b53799b1f93d7e508d60fd7d7b6a1.jpg" alt="Diary Image" />
        <p>이미지 여러개 테스트ㅡ..</p>
        `,
      img_urls: [
        "https://i.pinimg.com/236x/71/0f/a0/710fa07cdbeac342f8a99928c451d38c.jpg",
        "https://i.pinimg.com/236x/af/2b/53/af2b53799b1f93d7e508d60fd7d7b6a1.jpg",
      ],
      mood: "😍",
      emoji: "🏠",
      privacy: "mate",
      music: {
        url: "https://www.youtube.com/watch?v=uNN2lN7M7cA",
        title: "Right Now",
        artist: "NewJeans",
      },

      weather: {
        icon: "☁️",
        location: "Busan",
        avg_temperature: 25,
      },
      background_color: "green",
    },
  },
  {
    id: 3,
    user_id: "3",
    like_count: 5,
    created_at: "2024-08-05",
    body: {
      title: "망고시루 먹고 싶다.",
      content: `<p>망고시루 먹고 싶은데 이제 단종이네... 생귤시루 먹을까..
      망고망고망고망고</p>
        <img src="https://newsimg.sedaily.com/2024/06/07/2DADEMLBXO_1.png" alt="Diary Image" />
        <p>망고망고망고망고</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_Z6bkqBqIGBXiCDAJ87Kr12atd2hg-tX6v_jJsOMwJVsI6Hjvb5RmDK4yw9xzUWONIk&usqp=CAU" alt="Diary Image" />
        <p>망고망고망고망고</p>
        `,
      img_urls: [
        "https://newsimg.sedaily.com/2024/06/07/2DADEMLBXO_1.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_Z6bkqBqIGBXiCDAJ87Kr12atd2hg-tX6v_jJsOMwJVsI6Hjvb5RmDK4yw9xzUWONIk&usqp=CAU",
      ],
      mood: "😍",
      emoji: "🏠",
      privacy: "private",
      music: {
        url: "https://www.youtube.com/watch?v=BfI89YxNzVY",
        title: "Armageddon",
        artist: "aespa",
      },

      weather: {
        icon: "☁️",
        location: "대전",
        avg_temperature: 35,
      },
      background_color: "yellow",
    },
  },
  {
    id: 4,
    user_id: "4",
    like_count: 5,
    created_at: "2024-08-05",
    body: {
      title: "아무말아무말",
      content: `<p>아무말아무말 아무말아무말
      아무말아무말아무말아무말아무말아무말</p>
        <img src="https://i.pinimg.com/236x/6c/b9/28/6cb928784c5ec399ebcbf626d8a4fe48.jpg" />
        <p>아무말아무말아무말아무말아무말아무말</p>
        
        <p>망아무말아무말
        아무말아무말
        아무말아무말
        아무말아무말
        아무말아무말</p>
        `,
      img_urls: [
        "https://i.pinimg.com/236x/6c/b9/28/6cb928784c5ec399ebcbf626d8a4fe48.jpg",
      ],
      mood: "😍",
      emoji: "🏠",
      privacy: "private",
      music: {
        url: "https://www.youtube.com/watch?v=m2iuZ-uDziM",
        title: "Sticky",
        artist: "키스오브라이프",
      },

      weather: {
        icon: "☁️",
        location: "대전",
        avg_temperature: 35,
      },
      background_color: "yellow",
    },
  },
  {
    id: 5,
    user_id: "5",
    like_count: 5,
    created_at: "2024-08-05",
    body: {
      title: "아무말아무말",
      content: `<p>아무말아무말 아무말아무말
      아무말아무말아무말아무말아무말아무말</p>
        <img src="https://i.pinimg.com/236x/67/ff/9a/67ff9af50557a252ac449ee0499874d4.jpg" alt="Diary Image" />
        <p>아무말아무말아무말아무말아무말아무말</p>
        <p>망아무말아무말
        아무말아무말
        아무말아무말
        아무말아무말
        아무말아무말</p>
        `,
      img_urls: [
        "https://i.pinimg.com/236x/67/ff/9a/67ff9af50557a252ac449ee0499874d4.jpg",
      ],
      mood: "😍",
      emoji: "🏠",
      privacy: "private",
      music: {
        url: "https://www.youtube.com/watch?v=4U031MuTa-s",
        title: "青い珊瑚礁",
        artist: "Newjeans 하니(Hanni)",
      },

      weather: {
        icon: "☁️",
        location: "대전",
        avg_temperature: 35,
      },
      background_color: "yellow",
    },
  },
];

export const dummyUsers = [
  {
    user_id: 1,
    profileImgURL:
      "https://i.pinimg.com/236x/af/2b/53/af2b53799b1f93d7e508d60fd7d7b6a1.jpg",
    profile_background_img_url: null,
    nickname: "김머쓱",
    email_address: "musseuk@example.com",
    mate_count: 15,
    diary_count: 27,
  },
  {
    user_id: 2,
    profileImgURL: null,
    profile_background_img_url: null,
    nickname: "Kim",
    email_address: "Kim@example.com",
    mate_count: 15,
    diary_count: 27,
  },
  {
    user_id: 3,
    profileImgURL: null,
    profile_background_img_url: null,
    nickname: "Lee",
    email_address: "Lee@example.com",
    mate_count: 15,
    diary_count: 27,
  },
  {
    user_id: 4,
    profileImgURL: null,
    profile_background_img_url: null,
    nickname: "따봉고양이",
    email_address: "Lee@example.com",
    mate_count: 15,
    diary_count: 27,
  },
  {
    user_id: 5,
    profileImgURL: null,
    profile_background_img_url: null,
    nickname: "구름강쥐",
    email_address: "Lee@example.com",
    mate_count: 15,
    diary_count: 27,
  },
  {
    user_id: 6,
    profileImgURL: null,
    profile_background_img_url: null,
    nickname: "심슨냥이",
    email_address: "Lee@example.com",
    mate_count: 15,
    diary_count: 27,
  },
  {
    user_id: 7,
    profileImgURL: null,
    profile_background_img_url: null,
    nickname: "식빵목걸이",
    email_address: "Lee@example.com",
    mate_count: 15,
    diary_count: 27,
  },
];

export const dummyLikedUsers = [
  { id: 1, nickname: "user1", profileImgURL: null },
  { id: 2, nickname: "user2", profileImgURL: null },
  { id: 3, nickname: "user3", profileImgURL: null },
];

export const dummyDiaryData = {
  diaryID: 2764,
  likeCount: 10,
  userHasLiked: false,
};

export const dummyFriendRequests = [
  { id: 1, nickname: "김머쓱", profileImgURL: null },
  { id: 2, nickname: "Kim", profileImgURL: null },
];

export const dummyMates = [
  { id: 3, nickname: "Lee", profileImgURL: null },
  { id: 4, nickname: "따봉고양이", profileImgURL: null },
  { id: 5, nickname: "구름강쥐", profileImgURL: null },
  { id: 6, nickname: "심슨냥이", profileImgURL: null },
];
