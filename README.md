> [프로그래머스] 타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js) 2기

<br/>

<div align="center">
  <h1>🎧 MeloDiary 🎧</h2>
  <p>MeloDiary는 매일 일기를 작성하며 그날의 기분을 음악과 이모지로 표현하고, 친구와 일기 및 음악 목록을 공유할 수 있는 웹 서비스입니다.</p>
  <p>밖에서는 하지 못하는 이야기를 조심스럽게 나누어볼까요? 🤫 </p>
</div>

> url :  https://melodiary.site/

## 🖥️ 프로젝트 기능
### 📌 랜딩 페이지
> 회원가입 및 로그인
- 구글, 카카오, 네이버 계정을 이용하여 회원가입, 로그인 가능

|랜딩 페이지|![image](https://github.com/user-attachments/assets/5115206a-e559-4de5-867c-50f455537e5b)|
|:-:|:-:|
|회원가입|![image](https://github.com/user-attachments/assets/908c4e6b-7eaf-4e5a-bd72-193657597151)|
|로그인|![image](https://github.com/user-attachments/assets/ff734b59-f63a-4974-ba67-8f9aa5f305d7)|

### 📌 Home
> 사용자의 달력, 플레이리스트, 날짜에 해당하는 일기를 볼 수 있는 페이지
#### `캘린더`
- 월 간 이동 가능
- 일기를 쓴 날에는, 사용자가 설정한 이모지가 달력에 표시
- 아직 오지 않은 미래 날짜에는 회색 원으로 표시
#### `일기`
  - 달력에 표시된 이모지 클릭 시, 오른쪽 화면에 일기 표시
  - 확장 버튼을 통해 일기를 확장하여 전체 화면으로 보기 가능
#### `친구`
  - 친구 프로필을 들어갔을 때에는 친구의 홈을 볼 수 있음
  - 친구 신청 및 삭제를 할 수 있음

  |친구가 되어있을 때|친구 요청을 보냈을 때|친구가 안되어있을 때|
  |:-:|:-:|:-:|
  |![image](https://github.com/user-attachments/assets/a00381e5-1bb5-49c0-ab26-0e5ea40f877a)|![image](https://github.com/user-attachments/assets/849b5299-949c-4a33-b5c1-9336b190c394)|![image](https://github.com/user-attachments/assets/cf8177f8-4d47-4a63-9000-6538854cbcd7)|

|홈|![스크린샷 2024-08-29 오후 5 53 53](https://github.com/user-attachments/assets/727dc2a6-5c92-48d6-89b7-ea2506091243)|
|:-:|:-:|
|친구 홈|<img width="1189" alt="스크린샷 2024-08-29 오후 6 56 40" src="https://github.com/user-attachments/assets/ba687fc4-3df6-4a33-991e-f6b614cebcd7">|

### 📌 Explore
> MeloDiary에 게시된 <전체공개> 일기들을 무한 스크롤 형태로 확인하고 소통할 수 있는 페이지
- 각 다이어리는 요약된 형태로 제공 (클릭 시 해당 다이어리로 이동)
- 해당 다이어리로 들어가지 않아도 좋아요 누르기 가능
- 해당 다이어리에 있는 이미지로 스와이프로 넘겨보기 가능

|전체공개 페이지|![explore](https://github.com/user-attachments/assets/cf3b0303-0da2-4200-8337-b5b109b163f6)|
|:-:|:-:|

### 📌 Mates
> 자신의 친구 목록을 관리하고, 친구들의 활동을 확인할 수 있는 페이지
- 친구 요청 및 거절을 할 수 있음
- 친구 목록에서 프로필 클릭 시, 친구의 홈으로 이동

|친구공개 페이지|![mates](https://github.com/user-attachments/assets/6d0ff80c-507a-4e29-a889-32826f79ff99)|
|:-:|:-:|

### 📌 MyPage
> 사용자의 전체일기 목록, 기분 그래프, 플레이리스트, 닉네임 변경 및 회원탈퇴를 할 수 있는 페이지
#### `전체일기 목록`
- 사용자가 작성한 모든 일기 조회 가능
- page, limit를 이용한 무한 스크롤 (마지막 페이지에 데이터가 없다면 호출 중지)

#### `기분 그래프`
- 날짜 별 기분을 확인할 수 있는 그래프
- ApexCharts 라이브러리 사용

#### `플레이리스트`
- 일기에 사용한 음악 리스트
- <보러가기> 버튼을 누르면 해당 일기로 이동

#### `환경설정`
- 닉네임 변경 시 중복확인 필수
- 회원탈퇴 기능

|전체일기 목록|![mypage-alldiaries-scroll](https://github.com/user-attachments/assets/f1cfa128-2a8c-442d-832c-6b771f0aec27)|
|:-:|:-:|
|기분 그래프|![mypage-moodgraph](https://github.com/user-attachments/assets/c1ef6390-f716-410a-9f1c-eb7e571b1c03)|
|플레이리스트|<img width="1189" alt="스크린샷 2024-08-29 오후 7 47 14" src="https://github.com/user-attachments/assets/a99e3709-de0a-410e-a8bc-03f503bb446a">|
|환경설정(닉네임변경)|![changeNickname](https://github.com/user-attachments/assets/afd3fd5f-4cdd-4b4f-bdfb-f51e8e0bf421)|
|환경설정(회원탈퇴)|![mypage-deleteAccount](https://github.com/user-attachments/assets/f8562de7-71ed-4cf0-9745-aa8296574fc1)|

<br/>

## 📄 BE 설계
|시스템 아키텍처 다이어그램|<img width="942" alt="스크린샷 2024-08-29 오후 8 23 54" src="https://github.com/user-attachments/assets/dcd6585f-4227-4095-824f-7cccd950d33a">|
|:-:|:-:|
|데이터베이스 설계 ERD|![image](https://github.com/user-attachments/assets/8ba9f766-dc25-4161-aabf-48fa018265f1)|

<br/>

## 🛠️ 기술 스택
<img width="1149" alt="skills" src="https://github.com/user-attachments/assets/dbd194e7-2cc7-4b0f-bba1-a57b4ab2a7c4">

<br/>

## 📆 개발 기간
```
2024.07.29 - 2024.08.29
```
<a href="https://prgrms.notion.site/837195e233544e6b9f1948b9c1ac535d?pvs=4"> 서비스 소개 보러가기</a>

<br/>

## 🎧 MeloDiary 구성원
### `🍀 Frontend`
|김가현|안예린|이다미|
|:-:|:-:|:-:|
|<img src="https://avatars.githubusercontent.com/u/117976216?v=4" width="150" height="150"/><br/>[@gahyeon11](https://github.com/gahyeon11)|<img src="https://avatars.githubusercontent.com/u/29669560?v=4" width="150" height="150"/><br/>[@yeah1832](https://github.com/yeah1832)|<img src="https://avatars.githubusercontent.com/u/58524208?v=4" width="150" height="150"/><br/>[@Dami-LEE00](https://github.com/Dami-LEE00)|

### `🍀 Backend`
|고상민|김건우|
|:-:|:-:|
|<img src="https://avatars.githubusercontent.com/u/43366876?v=4" width="150" height="150"/><br/>[@Dukkov](https://github.com/Dukkov)|<img src="https://avatars.githubusercontent.com/u/18142686?v=4" width="150" height="150"/><br/>[@GonnaWooh](https://github.com/GonnaWooh)|
