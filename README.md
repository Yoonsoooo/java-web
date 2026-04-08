#quarkus 프로젝트 시작! (학번: 20250646 이름: 최윤수)

매 주 수업 내용을 정리하자.

## 2주차 수업 내용

실습 1 : 쿼크스 환경 구축 및 준비 완료!
실습 2 : HTML 기본 및 LOL 메인 화면 개발 완료!

<div align="center">
<img src="screenshots/2026-01-26 오전 9_51_43.png" width="45%" alt="실습 1 화면">
<img src="screenshots/파일명.png" width="45%" alt="실습 2 화면">
</div>
<br>

## 3주차 수업 내용

## 2, 3주차 수업 내용

실습 1 : 쿼크스 환경 구축 및 준비 완료!
실습 2 : HTML 기본 및 LOL 메인 화면 개발 완료!

<div align="center">
<img src="screenshots/2026-01-26 오전 9_51_43.png" width="45%" alt="실습 1 화면">
<img src="screenshots/파일명.png" width="45%" alt="실습 2 화면">
</div>
<br>

## 4주차 수업 내용

실습 1 : url 링크 내 로컬 주소로 수정 - 잘못된 주소 넣으면 404 나온다.
실습 2 : 외부 이미지 직접 다운 받고 image 폴더 안에 다운 받은 이미지 넣은 후 경로 이름 설정
실습 3 : 네비게이션 바 수정 - 부트스트랩에서 네비게이션 디자인 변경 후 네비게이션 바 5개로 수정 / 메인화면, 뉴스, 챔피온, 다운로드, 로그인, 외부사이트에는 드랍다운 메뉴를 넣어 공식 웹사이트 링크 넣어서 수정 / 네비 바 디자인 DARK로 수정
실습 4 : 그리드 <div class="row row-cols-auto g-4"> 이걸로 변경 후 챔피언 카드 추가 - 기존 코드 삭제 후 Aatrox 코드 추가
실습 5 : 모달창 구현 - modals 폴더 추가 후 폴더 안에 Aatrox.html 추가 후 모달 창 넣고 iframe 으로 Aatrox.html 불러오기.

## 5주차 수업 내용

실습 1 : 서브 페이지(다운로드) 링크 연결 - 네비게이션 바 '다운로드' 메뉴에 `main_page_sub/download.html` 링크 연결
실습 2 : 게임 다운로드 전용 서브 페이지 생성 - 부트스트랩 활용 히어로 배너 적용 및 커스텀 CSS(`download.css`) 작업 수행
실습 3 : 다운로드 페이지 내 시스템 환경 안내 - 부트스트랩 Nav Tabs 컴포넌트를 활용해 Windows / Mac 운영체제별 최소/권장 시스템 사양 테이블 구현
실습 4 : 신규 챔피언 상세 정보 추가 및 모달 구현 - 자헨(Zaahen), 멜(Mell), 유나라(Yunara) 챔피언 추가(역할/난이도 기입) 및 `iframe`을 이용한 캐릭터 상세 모달창 연동

## 6주차 수업 내용

자바스크립트 기초 개념

- 자바스크립트 위치: `resources` 폴더 안에 `js` 폴더를 생성하여 자바스크립트 파일(`.js`)을 관리 및 연동합니다.
- 변수 선언
  - `const`: 선언 후 재할당이 필요 없는 상수
  - `let`: 값이 변할 수 있는 변수

### 주요 실습 내용

1. 기본 스크립트 연결 및 페이지 로드 이벤트

<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/test.js"></script>

<script>
  window.onload = function() {
    alert("메인 페이지 로딩 완료");
  }
</script>

2. 검색 기능 구현 (`search.js`)
   메인 페이지의 검색 폼 제출 이벤트를 처리하여 새 탭에서 구글 검색 결과로 이어지게 구현했습니다.

`index.html` 문서 최하단에 스크립트 로드 추가:

<script src="js/search.js"></script>

`search.js` 스크립트 내용:
document.getElementById("searchForm").addEventListener("submit", function (e) {
e.preventDefault(); // 폼 기본 동작 차단(새로고침)

const query = document.getElementById("searchInput").value.trim();
if (!query) return;

window.open(
"https://www.google.com/search?q=" + encodeURIComponent(query),
"\_blank"
);
});
