#quarkus 프로젝트 시작! (학번: 20250646 이름: 최윤수)

매 주 수업 내용을 정리하자.

## 2주차 수업 내용

실습 1 : 쿼크스 환경 구축 및 준비 완료!
실습 2 : HTML 기본 및 LOL 메인 화면 개발 완료!

<div align="center">
</div>
<br>

## 3주차 수업 내용

## 2, 3주차 수업 내용

실습 1 : 쿼크스 환경 구축 및 준비 완료!
실습 2 : HTML 기본 및 LOL 메인 화면 개발 완료!

<div align="center">

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

<div align="center">
<img src="/screenshots/page_loading.png" width="45%" alt="페이지 로딩창 실습 화면">
<img src="/screenshots/search?q=.png" width="45%" alt="검색하기 누르면 구글로 이동 실습 화면">
<img src="/screenshots/search.png" width="45%" alt="html search.js 연결 실습 화면">
</div>
<br>

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

## 7주차 수업 내용

<div align="center">
<img src="/screenshots/fix js.png" width="45%" alt="js 실습 화면">
<img src="/screenshots/fix css.png" width="45%" alt="css 실습 화면">
<img src="/screenshots/fix html.png" width="45%" alt="html 실습 화면">
</div>
<br>

- **검색 결과(Search Results) UI 및 레이아웃 추가 (`index.html`, `css/main.css`)**
  - `index.html` 하단에 챔피언 및 뉴스 검색 결과를 모아서 보여주는 `#searchResults` 레이아웃 도입.
  - 전역 디자인과 재사용 가능한 컴포넌트 관리를 위해 `css/main.css` 파일을 신규 생성. 카드 호버 효과, 아웃라인 색상, 검색 카테고리 메뉴 등 전용 스타일 적용 완성.
  - 화면 구조를 이탈시키는 부트스트랩 클래스명 오타(`cosl-lg-2` -> `col-lg-2`) 수정.

- **사이트 내장 검색 기능(DOM 제어 동적 렌더링) 완성 (`search.js`)**
  - 기존의 외부 사이트 팝업 용도로 사용되던 구글 검색 기능(더미 코드)을 삭제하고 실제 웹앱에 맞는 검색 로직으로 교체.
  - `performSearch` 함수 내 로직 스코프 밖으로 빠져있던 코드들을 함수 내부로 올바르게 재배치하여 자바스크립트 스코프(ReferenceError) 문제 해결.
  - JS 화면에 검색 키워드 및 결과 갯수를 출력할 때 문자열 치환이 발생하지 않는 문제(템플릿 리터럴 문법인 `` ` `` 대신 일반 따옴표 혼용 문제) 수정.
  - 검색 수행 시 기존 메인 화면 콘텐츠 레이아웃(hero, 특징 소개 영역 등)을 숨기고 검색 결과 화면을 띄워주는 DOM 제어 스위칭 로직 안정화.

## 9주차 수업내용

# 9주차 실습 내용 정리

이번 주차 실습에서는 크게 세 가지 주요 기능(백엔드 API 및 DB 연동, 프론트엔드 다크/라이트 모드 테마 토글, JavaScript 성능 테스트)이 추가 및 수정되었습니다. 오늘 변경된 전체 코드를 기반으로 한 상세 정리입니다.

---

## 1. Quarkus 백엔드 및 데이터베이스 연동 (Hibernate ORM + Panache)

Quarkus 프레임워크를 기반으로 MySQL 데이터베이스와 연동하고, 데이터베이스 조작을 위해 간편한 ORM(Object Relational Mapping) 기술인 Hibernate ORM with Panache를 도입했습니다.

### 1.1. 의존성 패키지 추가 (`pom.xml`)

MySQL 데이터베이스 연결과 API 데이터 직렬화를 위한 라이브러리가 추가되었습니다.

- `quarkus-jdbc-mysql`: MySQL 접속을 위한 JDBC 드라이버
- `quarkus-hibernate-orm-panache`: 간편한 ORM 처리를 위한 Panache 지원 라이브러리
- `quarkus-rest-jackson`: Java 객체를 JSON 형식으로 변환하여 REST API 통신을 돕는 직렬화 모듈

### 1.2. 데이터베이스 설정 (`application.properties`)

- `quarkus.datasource.db-kind=mysql`: 데이터베이스 종류를 MySQL로 지정
- DB 접속 정보(사용자명: root, 비밀번호: 12341234, 로컬 3306 포트 DB 연결)를 설정했습니다.
- `quarkus.hibernate-orm.database.generation=update`: 엔티티 클래스 변경 시 자동으로 DB 스키마(테이블)가 업데이트되도록 설정했습니다.
- `quarkus.hibernate-orm.log.sql=true`: 실행되는 SQL 쿼리 로그를 콘솔에서 확인할 수 있도록 활성화했습니다.

### 1.3. 챔피언 엔티티 클래스 구현 (`Champion.java`)

- 데이터베이스 테이블과 매핑되는 엔티티 객체입니다.
- `PanacheEntity`를 상속받아 기본적인 CRUD 메서드와 ID(기본키) 필드를 자동으로 제공받습니다.
- 주요 필드: `name` (챔피언 이름), `role` (역할 - 전사, 마법사 등), `line` (라인 - 탑, 미드 등)

### 1.4. 초기 데이터 시딩 (`DataSeeder.java`)

- 서버가 실행될 때(`StartupEvent` 관찰) 데이터베이스에 기본 챔피언 데이터들을 주입하는 역할을 합니다.
- 기존에 데이터가 이미 존재하는 경우(`Champion.count() > 0`)에는 중복 삽입되지 않도록 예외 처리가 되어 있습니다.
- 아트록스, 사일러스, 징크스, 야스오 등 11개 챔피언의 기본 정보를 `persist()` 메서드를 통해 저장합니다.

### 1.5. RESTful API 구현 (`ChampionResource.java`)

- 클라이언트(웹 프론트엔드 등)와 데이터를 주고받기 위한 엔드포인트(`/champions`) 리소스를 구현했습니다.
- `@GET`: `Champion.listAll()`을 호출하여 DB에 저장된 모든 챔피언 목록을 JSON 형태로 반환합니다.
- `@POST`: 새로운 챔피언 객체를 받아 데이터베이스에 추가(`champion.persist()`)합니다. 트랜잭션 처리를 위해 `@Transactional` 어노테이션이 사용되었습니다.

---

## 2. 웹 페이지 테마 토글 기능 구현 (프론트엔드)

사용자가 화면을 다크 모드와 라이트 모드로 자유롭게 전환할 수 있는 기능을 웹 페이지 전체에 걸쳐 추가했습니다.

### 2.1. 토글 버튼 인터페이스 (`index.html`, `main_page_sub/download.html`)

- 상단 네비게이션 바(Navbar)에 테마를 변경할 수 있는 버튼(`🌙 DARK`)을 배치했습니다.
- 클릭 시 `toggleTheme()` 자바스크립트 함수가 호출되도록 이벤트가 바인딩되어 있습니다.

### 2.2. 토글 자바스크립트 로직 (`js/toggle.js`)

- `toggleTheme()` 함수는 문서의 `<body>` 태그에 `light-mode` 클래스를 동적으로 추가(추가/제거)합니다.
- 클래스 유무를 검사하여 버튼의 텍스트(`🌙 DARK` ↔ `☀️ LIGHT`)를 변경하고, Bootstrap 네비게이션 바의 클래스(`navbar-dark bg-dark` ↔ `navbar-light bg-light`)를 제어해 즉각적인 색상 변환을 발생시킵니다.

### 2.3. 테마 CSS 스타일 적용 (`css/main.css`)

- 기본 상태는 다크 모드이며, `body.light-mode` 선택자를 활용해 라이트 모드 상태일 때의 스타일을 구체적으로 정의했습니다.
- 라이트 모드 시 배경은 밝은 회색 계열(`#f8f9fa`)로, 텍스트는 어두운 색상(`#212529`)으로 변경됩니다.
- 카드 디자인과 네비바, 그라데이션(hero 영역) 등 주요 UI 요소들의 색상 전환 정보가 새롭게 추가되었습니다.

---

## 3. JavaScript 데이터 처리 성능 테스트

프론트엔드에서 대규모 데이터 렌더링이나 가공이 일어날 상황을 고려하여 간단한 성능 테스트 스크립트를 작성했습니다.

### 3.1. 성능 측정 스크립트 (`js/test2.js`)

- **더미 데이터 생성**: 100만 개(1,000,000)의 단순 문자열 배열과 객체 배열을 생성합니다.
- **탐색 성능(Search)**: `indexOf` 메서드(단순 배열)와 `find` 메서드(객체 배열)를 사용하여 맨 마지막 요소를 찾는 시간을 `console.time()`으로 비교합니다.
- **가공 성능(Map)**: 전체 배열의 값을 `map` 함수를 사용해 수정할 때 걸리는 시간을 각각 측정해 단순 데이터와 객체 데이터 처리의 성능 차이를 파악합니다.

---

**💡 요약**
9주차 실습은 크게 **1. Quarkus 기반의 REST API 생성과 Panache를 통한 DB 연동 구축**과, **2. 자바스크립트/CSS를 활용한 사용자 친화적인 웹 테마 토글 기능 구현**이 메인 테마입니다. 추가적으로 자바스크립트 성능 테스트를 통해 프론트엔드 최적화에 대한 이해도를 높였습니다.
