<img src="https://sour-process-b08.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F812354cb-4304-4b1b-b07d-f3c2e18143f4%2F5920fd40-2fed-478f-8e18-c882745b255c%2F%25EC%259C%25A0%25ED%2588%25AC%25EB%25B8%258C%25EC%258D%25B8%25EB%2584%25A4%25EC%259D%25BC.jpg?table=block&id=9fbfcd2a-3e6d-40ac-8d7d-3956145a8895&spaceId=812354cb-4304-4b1b-b07d-f3c2e18143f4&width=2000&userId=&cache=v2"/>

## <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/> Youtube

Youtube clone
<br /><br />

[사이트 주소 Link.](https://fe02-clonecodingproject.vercel.app)

<br />

## 📆 프로젝트 기간

- 2023.11.06 - 2023.11.10

<br />
<br />

## 📖 주요 기능

### 1. Redux를 사용한 라우팅

### 2. Youtube api 적용 메인, 디테일 페이지 동영상 재생

### 3. Firebase 적용 로그인, 회원가입, 비밀번호찾기

### 4. 필터적용 검색

<br />
<br />
## 🛠 기술 스택

<div align=left>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>
<br>
<br>
<br/>

## 💻 라이브러리

| 이름     | 사용 이유                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| React    | Component 단위의 작성을 통해 UI를 구성하는 개별적인 뷰단위의 개발을 하여 하나의 컴포넌트를 여러 부분에 다중 사용할수 있게 만들거 생산성과 유지 보수를 용이하게 하고 JSX를 사용해 컴포넌트를 쉽게 구성할수 있도록 해주며 Vitual DOM을 이용해 연산 비용을 줄일수 있기에 React 라이브러리를 사용하게 되었습니다.                                                                                                                                                                              |
| Redux    | 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있습니다. -컴포넌트끼리 똑같은 상태를 공유해야할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태값을 전달하거나 업데이트할 수 있습니다.                                                                                                                                                                                                                                                                 |
| Axios    | 우선 Fetch 같은 경우 호환성이 떨어져 웹브라우저가 구버전일 경우 지원하지 않는 경우가 있으며, Fetch에 비해 객체의 형태로 Param이나 Query를 성정할수 있어 가독성이 뛰어나며, 따로 JSON형태의 변환이 필요없이 자동 변환이 되고 개선된 error handling의 성능을 가지고 있기에 Axios를 사용하게 되었습니다.                                                                                                                                                                                      |
| Firebase | 빠르고 간편한 개발이 가능해져서 개발자들이 시간을 효율적으로 활용할 수 있습니다. 또한, 실시간 데이터베이스를 제공하여 실시간으로 데이터를 동기화할 수 있고, 웹 및 모바일 애플리케이션에 적합한 서버리스 아키텍처를 제공해줍니다. Firebase는 인증, 클라우드 함수, 스토리지, 호스팅, 애널리틱스, 푸시 알림 등 다양한 기능을 한 곳에서 통합하여 제공하므로 개발 프로세스를 단순화하고 관리하기 쉽게 만들어줘요. 또한, Google의 인프라를 기반으로 하기 때문에 안정성과 성능이 보장되어 있어요. |

<br/><br/>

## 🔥 트러블 슈팅

<summary>➡️ Api 할당량</summary> 
  <br/>

**`문제점`**

- api의 할당량을 생각하지 못하고 코드를 작성해서 403error가 나타났다.
  데이터를 받아올 때 비효율 적인 과정이 늘어나는 것 같다.
  search header를 만드는 과정에서 api통신을 해야하는줄 착각해서 코드가 꼬이는 현상이 발생했습니다.

**`해결방안`**

- api의 할당량을 계산해서 api키를 2개로 나누었고, 팀원들과 같이 사용하던 api키도 각자 따로 사용하는 방법으로 할당량의 부담을 해소했습니다.

- 부모컴포넌트에서부터 자식으로 내려가며 코드의 흐름을 생각하고 search header에서는 keyword만 내려주면 된다는걸 알게 되었습니다.

- 자식컴포넌트인 VideoSearch에서는 useParams를 통해 부모컴포넌트에서 내려준 keyword를 사용해서 api통신을 하는 방향으로 진행했습니다.

- 검색 후 디테일 페이지에서 정보 누락이 있었기 때문에 해결하고자 디테일 페이지를 나누었습니다.

**`결과`**

- Api 할당량 부족으로 403error 현상이 사라졌습니다.

 <summary>➡️ 배포시 Environment Variables 선설정체크 못하여 배포안됨</summary> 
  <br/>
  
  **`문제점`**

- Firebase key 인증 보안문제로 배포가 되지 않았습니다.

**`해결방안`**

- Google console 및 Firebase 보안 적용
  Firebase Auth > settings > 승인된 도메인 추가
  Google Console > API> 보안 URL 추가
- .env를 /.env로 명칭변경

**`결과`**

- Firebase 보안도 해결되어 배포 완료되었습니다.

<br /><br/>

## 😎 팀원

<table>
   <tr>
    <td align="center"><b><a href="https://github.com/unchul">임운철</a></b></td>
    <td align="center"><b><a href="https://github.com/newsks">신수경</a></b></td>
    <td align="center"><b><a href="https://github.com/hanjihyeong">한지형</a></b></td>
    <td align="center"><b><a href="https://github.com/EMILYelly">이주연</a></b></td>
  </tr>
  <tr>
  <td align="center"><a href="https://github.com/unchul"><img src="https://avatars.githubusercontent.com/u/105141025?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/newsks"><img src="https://avatars.githubusercontent.com/u/129296269?v=4" width="100px" /></a></td>  
    <td align="center"><a href="https://github.com/hanjihyeong"><img src="https://avatars.githubusercontent.com/u/143388067?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/EMILYelly"><img src="https://avatars.githubusercontent.com/u/122362527?v=4" width="100px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
  </tr>
</table>
