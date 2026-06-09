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

<br>

## 10주차 수업내용

# 10주차 실습 내용 정리

이번 주차 실습에서는 **로그인 기능 및 세션 관리, DB 엔티티 설계, 프론트엔드 라우팅 및 UI 보완** 등 전체적인 사용자 인증 흐름과 관련된 백엔드 및 프론트엔드 기능을 중점적으로 추가/수정했습니다.

---

## 1. 로그인 인증 및 사용자 관리 (백엔드)

사용자 정보를 데이터베이스에 저장하고, 폼 로그인을 통해 세션을 유지하는 기반 작업을 진행했습니다.

### 1.1. `User` 엔티티 구현 (`User.java`)

- `PanacheEntity`를 상속받아 사용자 객체를 정의했습니다.
- `username`과 `password` 필드를 추가했습니다.
- DB의 `user` 예약어 충돌을 방지하기 위해 `@Table(name = "users")` 어노테이션으로 테이블 이름을 명시적으로 지정했습니다.
- 사용자명(username)으로 데이터를 조회하는 정적 메서드 `findByUsername(String username)`을 구현했습니다.

### 1.2. 초기 사용자 데이터 주입 (`DataSeeder.java`)

- 애플리케이션 시작 시 DB에 등록된 사용자가 없다면, 기본 테스트 계정(`guest` / `123123`)을 데이터베이스에 자동 주입(Seed)하도록 로직을 추가했습니다.

### 1.3. 로그인 처리 API (`AuthResource.java`)

- 로그인 폼(form) 전송을 처리하는 `@POST @Path("/login_check")` 엔드포인트를 구현했습니다.
- 클라이언트로부터 `application/x-www-form-urlencoded` 형태로 `username`과 `password`를 전달받습니다.
- 현재는 DB 검증 로직 적용 전 단계로, 폼 전송 시 로그인 완료 페이지(`/login/main_after_login.html`)로 자동 리다이렉트(`303 See Other`) 되도록 임시 구현되었습니다.
- 정적 폴더(`/login`)와의 URL 라우팅 충돌 문제를 방지하기 위해 오작동하던 기존 `@GET @Path("/login")` 로직을 주석 처리했습니다.

### 1.4. 서버 세션 설정 (`SessionConfig.java`)

- Vert.x의 `LocalSessionStore`를 활용하여 세션 매니저를 구성했습니다.
- 세션 유지 시간(Timeout)을 1시간으로 설정하고, 세션 쿠키의 `HttpOnly` 속성을 활성화하여 브라우저 스크립트 기반 탈취 공격(XSS)을 방지하는 보안을 강화했습니다.

---

## 2. 로그인 화면 및 UI 라우팅 보완 (프론트엔드)

로그인 후 메인 화면을 새롭게 추가하고, 각 페이지 간 이동 시 발생하는 URL 경로 및 CSS/이미지 경로 오류를 수정했습니다.

### 2.1. 로그인 후 메인 페이지 추가 (`main_after_login.html`)

- 로그인이 성공했을 때 보여지는 새로운 메인 페이지를 추가 생성했습니다.
- 기존 메인 화면 레이아웃과 동일하나, 네비게이션 바 상단에 빨간색 아웃라인의 **"로그아웃"** 버튼(`<a href="/logout">`)이 신규 추가되었습니다.

### 2.2. HTML 경로 및 정적 라우팅 오류 수정 (`index.html`, `login.html`, `download.html`)

- 기존에 정적 폴더 이름(`/login`)과 JAX-RS 라우팅 주소가 겹쳐 화면이 렌더링되지 않던 버그를 해결하기 위해, 모든 로그인 링크 주소를 명확한 파일 경로(`/login/login.html`)로 일괄 수정했습니다.
- 각 하위 폴더(`login/`, `main_page_sub/`)에 위치한 HTML 파일들이 최상위 폴더에 있는 로고 이미지, CSS, JS 리소스들을 제대로 불러올 수 있도록 상대 경로(`../`)를 올바르게 연결 보완했습니다.

### 2.3. 테마 토글 및 버튼 스타일링 보완 (`download.css`)

- 기본 버튼(`btn-primary`) 색상을 브랜드 컬러인 보라색(`#a020f0`) 계열로 오버라이딩하여 UI의 통일성을 맞추었습니다.
- 큰 해상도(lg 이상) 화면에서 네비게이션 바 리스트가 정확히 화면 중앙에 오도록 `.navbar-center-absolute` 클래스를 추가했습니다.
- 다른 서브 페이지의 CSS에도 라이트/다크 모드 테마 토글 버튼(`#themeToggleBtn`)과 라이트 모드 배경(`body.light-mode`) 스타일을 동일하게 이식하여 모드 전환 시 UI가 깨지지 않도록 동기화했습니다.

---

**💡 요약**
10주차 실습은 **사용자(User) DB 설계 및 세션 기반의 로그인 처리 흐름(API/Session)** 구축이 핵심이었습니다. 더불어 프론트엔드에서는 로그인 전후 상태의 뷰(View) 분리, 폴더 계층 구조화에 따른 리소스 상대 경로 이슈 해결 및 공통 디자인 룩앤필(Look&Feel) 동기화 등을 수행하여 전체 웹 애플리케이션의 완성도를 높였습니다.

# 10주차 과제

`download.css` 파일에 추가해야 하는 라이트 모드 스타일 코드입니다.

```css
body.light-mode .hero {
  background:
    linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)),
    url("../image/download-banner.jpg") center/cover no-repeat;
}
body.light-mode .hero h1 {
  text-shadow: none;
  color: #a020f0;
}
body.light-mode .btn-outline-light {
  color: #212529;
  border-color: #212529;
}
body.light-mode .btn-outline-light:hover {
  background-color: #212529;
  color: #ffffff;
}
body.light-mode .table {
  --bs-table-bg: #ffffff;
  --bs-table-color: #212529;
  --bs-table-border-color: #dee2e6;
}
body.light-mode .table th {
  background-color: #f8f9fa;
  color: #212529;
}
body.light-mode .nav-tabs .nav-link {
  color: #495057;
}
body.light-mode .nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
}
body.light-mode .nav-tabs .nav-link.active {
  background-color: #ffffff;
  color: #a020f0;
  border-color: #dee2e6 #dee2e6 #ffffff;
}
```

---

# 12주차 실습 내용 (클라이언트 유효성 검사 및 패스워드 해싱)

이번 주차에서는 프론트엔드(JavaScript) 단에서의 사용자 입력값 유효성 검사(Validation) 및 회원가입 시 패스워드 암호화(SHA-256) 처리를 집중적으로 구현했습니다.

### 1. 로그인 폼 유효성 검사 (`login.js`, `login.html`)

- `login.html`의 입력 폼 요소에 `id="usernameInput"`, `id="passwordInput"`을 추가하여 자바스크립트에서 DOM 요소를 쉽게 제어할 수 있도록 수정했습니다.
- 폼 전송 시 곧바로 서버로 보내지 않고 `validateAndLogin()` 함수를 호출하여 정규식 검사를 먼저 수행하도록 이벤트를 제어했습니다. (`onsubmit="event.preventDefault(); validateAndLogin();"`)
- `login.js`를 신규 생성하여 아래 조건으로 유효성 검사를 구현했습니다.
  - **아이디**: `/^[a-zA-Z0-9]{4,20}$/` (4~20자의 영문 및 숫자만 허용)
  - **패스워드**: `/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/` (영문, 숫자, 특수문자를 포함한 8자 이상)
  - 검사 실패 시 Bootstrap의 `.is-invalid` 클래스를 활용해 빨간색 경고 메시지를 화면에 즉시 노출합니다.

### 2. 회원가입 폼 유효성 검사 (`input_check.js`, `register.html`)

- `register.html`에 아이디, 패스워드, 패스워드 확인, 이메일, 연락처 필드를 구성했습니다.
- `input_check.js` 내에 `validateAndShowModal()` 함수를 통해 항목별로 검증을 수행합니다.
  - 패스워드 일치 여부, 이메일 형식(`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), 전화번호 형식(`/^010-\d{4}-\d{4}$/`) 로직이 추가되었습니다.
  - 모든 검증을 통과해야만 입력 정보를 최종 확인하는 모달(Modal) 창이 띄워집니다.

### 3. 패스워드 해싱 처리 (`input_sha256.js`)

- 브라우저 내장 Web Crypto API를 활용하여 사용자가 입력한 평문 패스워드를 클라이언트에서 SHA-256으로 단방향 해싱하는 `hashPassword` 비동기 함수를 구현했습니다.
- 회원가입 모달 창에서 '가입하기' 버튼을 클릭하면, 평문 패스워드 대신 해싱된 암호화 값만 hidden 필드에 담겨 서버(`/register_check`)로 전송되게 하여 보안성을 높였습니다.

### 4. 회원가입 및 중복 체크 백엔드 연동 (`AuthResource.java`, `User.java`)

- `User.java` 엔티티에 `email`, `phone` 속성을 추가하고 데이터베이스에 반영했습니다.
- `AuthResource.java`의 `/register_check` 엔드포인트에서 넘어온 폼 데이터(해시된 패스워드 포함)를 받아, DB에 이미 동일한 username이나 email이 있는지 검사합니다.
- 중복이 없다면 새로운 `User`를 DB에 삽입하고 회원가입 완료 페이지(`/register_success`)로 이동시킵니다.

---

# 13주차 실습 내용 정리 (동적 라우팅 및 로그인 보안 강화)

이번 주차에서는 메인 페이지의 동적 라우팅 처리 및 로그인 폼에서의 클라이언트 패스워드 해싱 보안 적용을 완료했습니다.

### 1. 메인 페이지 동적 라우팅 처리 (`AuthResource.java`, `main_index.html`)

- **정적 파일명 변경:** 기존 최상위 경로의 정적 파일인 `index.html`을 `main_index.html`로 파일명을 변경했습니다. 이는 Quarkus가 `/` 접속 시 자동으로 `index.html`을 찾아 렌더링하는 기본 동작을 막고, JAX-RS 컨트롤러(`AuthResource`)에서 직접 라우팅을 제어하기 위함입니다.
- **세션 기반 화면 분기:** `AuthResource.java`에 `@GET @Path("/")` 엔드포인트를 새롭게 추가했습니다.
  - 사용자가 최상위 경로(`/`)로 접속하면 `context.session().get("loginUser")`를 통해 세션 존재 여부를 확인합니다.
  - 로그인 상태(세션 있음)인 경우 `main_after_login.html`을 반환하고, 로그아웃 상태(세션 없음)인 경우 `main_index.html`을 반환하도록 동적 분기 처리를 구현했습니다.

### 2. 로그인 폼 클라이언트 패스워드 해싱 적용 (`login.html`, `login.js`)

- 12주차에서 회원가입 시 적용했던 SHA-256 단방향 해싱 암호화 로직을 로그인 폼에도 동일하게 적용했습니다. DB에 저장된 패스워드가 이미 해싱된 값이므로, 로그인 시에도 평문을 해싱하여 서버로 전송해 일치 여부를 검사해야 합니다.
- **HTML 폼 구조 변경 (`login.html`)**:
  - 패스워드 평문을 받는 `<input type="password" id="passwordInput">` 태그에서 `name="password"` 속성을 제거하여, 폼 전송 시 평문이 서버로 노출되지 않도록 차단했습니다.
  - 해싱된 패스워드 값을 담아서 보낼 `<input type="hidden" id="password" name="password">` 태그를 새롭게 추가했습니다.
  - 암호화 함수 사용을 위해 `input_sha256.js` 스크립트를 연결했습니다.
- **비동기 해싱 및 전송 로직 구현 (`login.js`)**:
  - 기존 폼의 기본 `submit` 동작을 차단하고, 버튼 클릭 시 `validateAndLogin()` 함수를 거치도록 수정했습니다.
  - `submitLogin()` 함수를 `async` 비동기 함수로 변경했습니다.
  - 사용자가 입력한 평문 패스워드를 `await hashPassword(password)`를 통해 SHA-256으로 변환한 뒤, hidden 입력 필드의 value에 넣고 `document.getElementById("loginForm").submit();`을 수동으로 호출하도록 보안 로직을 완성했습니다.

---

# 13주차 회원관리 페이지 - 2 (회원정보 수정 및 비밀번호 변경)

이번 실습에서는 사용자 개인정보 수정 및 비밀번호 변경 기능 추가, 네비게이션 바 동적 툴팁 표시, 그리고 브라우저 내장 alert 알림을 Bootstrap Toast 알림으로 전면 개편했습니다.

### 1. Bootstrap Toast 기반 알림 시스템 개편 (`test.js`, `main_index.html`, `main_after_login.html`)

- **Toast 공통 함수 작성 (`test.js`):** 기존 `test.js` 내용을 비방해형 알림창인 `showToast(message, type)` 함수로 개편하여 success(초록), danger(빨강), warning(노랑) 타입의 Bootstrap 5 Toast 알림 기능을 구현했습니다.
- **Toast HTML 컨테이너 추가:** `main_index.html`, `main_after_login.html`, `profile.html` 최하단(body 종료 태그 직전)에 Toast 템플릿 코드를 배치했습니다.
- **기존 alert의 Toast 전환:**
  - `main_index.html`: 페이지 로드 시 "메인 페이지 로딩 완료" Toast 출력 및 "무료 플레이" 버튼 클릭 시 "즐거운 플레이 되세요" Toast 출력으로 변경.
  - `main_after_login.html`: 기존 onload alert를 완전히 제거(삭제만 함)하고, "무료 플레이" 클릭 시 "즐거운 플레이 되세요" Toast 출력으로 변경.
  - `register.html` 및 `register_success.html`: 기존 onload alert를 완전히 제거했습니다.

### 2. 네비바 로그인 사용자명 동적 표시 (`main_after_login.html`, `profile.html`, `profile.js`)

- **프로필 버튼 툴팁 속성 추가:** 네비바 프로필 버튼에 `id="profileNavLink"`, `data-bs-toggle="tooltip"`, `data-bs-placement="bottom"` 속성을 추가했습니다.
- **툴팁 초기화 및 동적 사용자명 노출 (`profile.js`):** `/profile/info`에서 데이터를 조회한 후 툴팁의 `data-bs-title` 속성에 `👋 [사용자ID]`를 동적으로 할당하고 `new bootstrap.Tooltip(profileLink)`를 호출하여 툴팁을 활성화했습니다.

### 3. 회원정보 수정 기능 구현 (`profile.html`, `profile.js`, `AuthResource.java`)

- **Collapse(접기/펼치기) 수정 폼 추가 (`profile.html`):** Bootstrap의 Collapse 기능을 이용해 버튼 클릭 시 정보 수정 카드 폼이 슬라이드 다운 형태로 노출되게 구현했습니다.
- **기존 값 자동 채우기 (`profile.js`):** 페이지 로드 시 조회한 이메일과 전화번호를 수정 폼의 입력 필드에 자동으로 바인딩합니다.
- **정규식 유효성 검증 (`profile.js`):**
  - 이메일: 정규식 `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` 매칭 검사
  - 연락처: 정규식 `/^010-\d{4}-\d{4}$/` 매칭 검사
  - 검증 통과 시 `is-valid` 클래스를, 실패 시 `is-invalid`와 함께 피드백 문구를 표시합니다.
- **이메일 중복 체크 백엔드 구현 (`AuthResource.java`):** `@POST @Path("/profile/update")` 엔드포인트를 구현하여 세션을 검증하고, 본인 이메일을 제외한 다른 사용자 이메일과의 중복 여부를 체크해 DB를 갱신합니다.
- **수정 결과 피드백 (`profile.js`):** 성공 시 `✅ 개인정보가 수정되었습니다.` 메시지를, 이메일 중복 시 `⚠️ 이미 사용 중인 이메일입니다.` 메시지를 에러박스에 표시합니다.

### 4. 비밀번호 변경 및 자동 로그아웃 구현 (`profile.html`, `profile.js`, `AuthResource.java`)

- **비밀번호 변경 폼 구성 (`profile.html`):** 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인을 위한 평문 입력 필드 및 서버 전송을 차단한 암호화 해시 전달용 hidden 필드(`currentPassword`, `newPassword`)를 함께 구성했습니다.
- **유효성 검사 및 SHA-256 클라이언트 해싱 (`profile.js`):**
  - 현재 비밀번호의 빈 값 방지, 새 비밀번호의 정규식 검사(8자 이상 영문+숫자+특수문자), 새 비밀번호 확인란의 일치 여부를 검사합니다.
  - 검증 완료 후 `input_sha256.js` 라이브러리를 통해 현재/새 비밀번호를 모두 SHA-256으로 해싱하여 hidden 필드에 전달한 후 폼을 수동 submit합니다.
- **현재 비밀번호 검증 및 DB 업데이트 (`AuthResource.java`):** `@POST @Path("/profile/password")` 엔드포인트를 구현하여 세션을 확인하고, DB 내 암호화된 비밀번호와 전달된 현재 비밀번호 해시값을 비교한 후 일치하면 새 비밀번호 해시값으로 업데이트합니다.
- **로그아웃 엔드포인트 분기 처리 (`AuthResource.java`):** `@GET @Path("/logout")` 엔드포인트에 `@QueryParam("next") String next` 매개변수를 추가하여, 비밀번호 변경 후 로그아웃 시 `/logout?next=login` 호출을 통해 로그인 화면(`/login`)으로 리다이렉트하도록 수정했습니다.
- **비밀번호 변경 성공 Toast 및 딜레이 이동 (`profile.js`):** 변경 성공 시 `✅ 비밀번호가 변경 완료, 로그인 페이지로 이동합니다.` Toast를 띄우고, `setTimeout`을 통해 3.5초의 대기 시간을 가진 뒤 로그아웃 페이지로 이동시켜 자동 로그아웃 흐름을 완성했습니다.

---

# 14주차 실습 내용 정리 (프로필 페이지 구현 및 로그인/업로드 에러 피드백)

이번 주차 실습에서는 로그인한 사용자의 정보를 보여주고 프로필 이미지를 관리하는 **프로필 페이지 구현** 및 **로그인/업로드 에러 피드백 UI** 고도화를 진행했습니다.

### 1. 프로필 관리 기능 구현

- **네비바에 프로필 링크 추가 (`main_after_login.html`):**
  - 로그아웃 버튼 좌측에 유니코드 문자 U+1F464(`👤`)를 텍스트 형태로 활용한 프로필 페이지 이동 링크(`👤 프로필`)를 추가했습니다.
- **프로필 사진 필드 추가 (`User.java`):**
  - DB의 `users` 테이블에 사용자의 개별 프로필 이미지명을 담을 수 있도록 `public String profileImage;` 필드를 엔티티에 추가했습니다.
- **프로필 페이지 뷰 및 동적 데이터 연동 (`profile.html`, `profile.js`):**
  - Bootstrap 5를 활용하여 프로필 조회 및 업로드 UI를 구성했습니다.
  - 페이지 로드 시 `/profile/info` API로부터 사용자 데이터(아이디, 이메일, 전화번호, profileImage 경로)를 비동기로 받아 화면에 표시합니다.
  - `/uploads/profile/default.png` 경로에 어울리는 Neon Purple 스타일의 미려한 기본 프로필 이미지를 생성 및 배치하여 기본 프로필 화면 완성도를 높였습니다.

### 2. 백엔드 프로필 관련 API 엔드포인트 구축 (`AuthResource.java`)

- **`@GET @Path("/profile")` (HTML 반환):**
  - 세션 유무를 검사하여 로그인되지 않은 사용자가 `/profile`에 접근 시 로그인 화면으로 리다이렉트 처리합니다. 세션이 확인되면 사용자 정보를 담아 `profile.html`을 서빙합니다.
- **`@GET @Path("/profile/info")` (JSON 반환):**
  - 현재 로그인한 사용자의 정보를 JSON 응답 데이터로 안전하게 내보내는 API를 설계했습니다.
- **`@POST @Path("/profile/upload")` (이미지 업로드 처리):**
  - `@Consumes(MediaType.MULTIPART_FORM_DATA)` 형식을 통해 유저 프로필 이미지 변경 요청을 수신합니다.
  - **보안 및 규격 검사:**
    - 파일 확장자 유효성 검사(`jpg`, `jpeg`, `png`, `gif`, `webp` 패턴 매칭)
    - 파일 용량 검사(최대 5MB 제한)
  - **파일명 중복 방지:** 중복이나 경로 탈취를 방지하기 위해 파일명을 고유한 `UUID`로 새로 생성하여 `src/main/resources/META-INF/resources/uploads/profile`에 저장하고, 해당 파일명을 데이터베이스에 동기화합니다.

### 3. 사용자 피드백(에러 처리) 개선

- **로그인 에러 메시지 화면 출력 (`login.js`):**
  - 로그인 실패로 인한 리다이렉트 주소(`/login?error=1`)를 감지해, 로딩 후 `showError` 함수를 재활용하여 아이디 입력란 밑에 `"아이디 또는 패스워드가 올바르지 않습니다."` 에러 문구를 노출시켰습니다.
- **이미지 업로드 에러 메시지 동적 출력 (`profile.html`, `profile.js`):**
  - 파일 업로드 폼 위에 에러용 Alert 영역 `#uploadErrorMsg`를 구축했습니다.
  - 업로드 에러 파라미터 감지 시 `d-none` 클래스를 해제하고 상황별 메시지를 출력합니다.
    - `invalid_type` ➔ `"jpg, png, gif, webp 파일만 가능합니다."`
    - `too_large` ➔ `"파일크기는 5MB 이하여야 합니다."`
    - `upload_fail` ➔ `"업로드 실패. 다시 시도해주세요."`

---

## 📝 9주차~14주차 기말고사 핵심 요약 및 학습 정리

### 1. 백엔드(Quarkus) 및 데이터베이스 연동 핵심 요약

- **환경 구축 및 의존성 추가 (`pom.xml`)**
  - `quarkus-jdbc-mysql`: MySQL 데이터베이스 연동을 위한 전용 드라이버 라이브러리입니다.
  - `quarkus-hibernate-orm-panache`: **Active Record 패턴**을 제공하여 Java 클래스가 데이터베이스 테이블과 매핑되며, 별도의 DAO 없이 `persist()`, `listAll()`, `count()` 등의 CRUD 정적 메서드를 활용 가능하게 합니다.
  - `quarkus-rest-jackson`: 백엔드 자바 객체(Entity, DTO 등)를 REST API 규격에 맞는 JSON 데이터로 자동 변환(직렬화)하거나 그 반대(역직렬화)를 수행합니다.
- **데이터베이스 설정 (`application.properties`)**
  - `quarkus.datasource.db-kind=mysql`: 연동할 DB 종류 명시
  - `quarkus.hibernate-orm.database.generation=update`: 엔티티 필드 수정 시 자동으로 DB 테이블 스키마 구조를 갱신
  - `quarkus.hibernate-orm.log.sql=true`: 실행되는 모든 raw SQL 질의문을 콘솔 창에 상세히 로깅
- **엔티티 설계 및 데이터 시딩**
  - **테이블 예약어 충돌 방지**: DB 예약어인 `user`와의 충돌을 막기 위해 `@Table(name = "users")` 어노테이션으로 테이블명을 명시합니다.
  - **초기 데이터 생성 (`DataSeeder.java`)**: `@Observes StartupEvent`를 적용해 애플리케이션 시작 시 기본 챔피언 및 테스트 계정(`guest` / `123123`) 정보를 자동으로 삽입(Seed)합니다. 이때 데이터 중복 삽입을 막기 위해 `count() > 0` 형태의 예외 처리를 필수로 포함합니다.
- **REST API 설계 (`ChampionResource.java`)**
  - `@GET`: `Champion.listAll()`을 사용해 DB 데이터를 JSON 배열 형태로 조회 및 응답합니다.
  - `@POST` + `@Transactional`: 새로운 데이터를 DB에 영속화(`persist()`)할 때 데이터 정밀도와 원자성(Atomicity)을 보장하기 위해 반드시 **트랜잭션 어노테이션**을 동반해야 합니다.

---

### 2. 사용자 인증 및 세션 관리 핵심 요약

- **사용자 관리 엔티티 (`User.java`)**
  - `username`, `password`, `email`, `phone`, `profileImage` 등의 필수 필드 정의.
  - 사용자 이름 조회를 위해 `findByUsername(String username)`과 같은 정적 커스텀 조회 메서드를 구현했습니다.
- **세션 보안 설정 (`SessionConfig.java`)**
  - Vert.x 프레임워크의 `LocalSessionStore`를 활용하여 서버 측 세션을 생성 및 유지 관리합니다.
  - **보안 강화 (HttpOnly)**: 세션 쿠키 발행 시 `HttpOnly` 옵션을 활성화하여 브라우저의 악성 자바스크립트 스크립트(XSS)가 세션 쿠키 정보에 임의로 접근하거나 탈취하는 것을 차단합니다.
  - **세션 만료**: 비활성 상태 기준 1시간(Timeout) 설정으로 자원 낭비와 세션 하이재킹 위험을 완화합니다.
- **로그아웃 흐름 제어**
  - `/logout` 엔드포인트 호출 시 세션을 명시적으로 파괴하고, `@QueryParam("next")` 매개변수를 통해 로그아웃 성공 후 이동할 타겟 페이지(예: 로그인 화면)로 유연하게 리다이렉트합니다.

---

### 3. 보안 및 클라이언트 유효성 검사 핵심 요약

- **클라이언트 정규 표현식(Regex) 유효성 검사**
  - **아이디(ID) 검증**: `/^[a-zA-Z0-9]{4,20}$/` (영문 대소문자 및 숫자로 이루어진 4~20자 구성)
  - **비밀번호(PW) 검증**: `/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/` (영문자, 숫자, 특수문자를 최소 1개씩 포함하며 최소 8자 이상의 강력한 보안 패스워드 설정 강제)
  - **이메일 검증**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` (일반적인 이메일 포맷 패턴 매칭)
  - **전화번호 검증**: `/^010-\d{4}-\d{4}$/` (국내 모바일 번호 포맷 고정)
  - 검사 실패 시 Bootstrap의 `.is-invalid` 클래스를 해당 태그에 동적으로 추가해 사용자에게 즉각적인 시각적 경고(Validation Feedback)를 전달합니다.
- **패스워드 암호화 및 전송 보안 (`input_sha256.js`, `login.js`, `profile.js`)**
  - **SHA-256 단방향 해싱**: 브라우저 기본 탑재 Web Crypto API(`window.crypto.subtle`)를 비동기(`async/await`)로 활용해 클라이언트 단에서 평문 비밀번호를 안전한 해시값으로 인코딩합니다.
  - **평문 유출 방지 설계**: HTML 폼의 평문 비밀번호 `<input>` 태그에서 `name` 속성을 완전 제거하여, 폼이 서브밋될 때 평문이 네트워크 패킷이나 서버 로그에 평문 상태로 전송/기록되는 구조를 완전히 차단합니다.
  - 대신 별도의 `name="password"`를 가진 `<input type="hidden">`을 선언하고, 자바스크립트 검증 통과 후 획득한 SHA-256 해시값만 해당 hidden input의 value에 매핑하여 서버(`/login_check`, `/register_check`, `/profile/password`)에 제출합니다.

---

### 4. 회원 관리 및 파일 업로드 보안 핵심 요약

- **프로필 수정 및 중복 검사 (`profile.js`, `AuthResource.java`)**
  - **Collapse UI**: Bootstrap Collapse 기능을 이용해 복잡한 화면 분기 없이 한 화면에서 접고 펼치는 방식으로 정보 수정 카드를 제공하여 UX를 개선했습니다.
  - **중복 체크 검증**: 이메일 수정 요청 시, 현재 로그인한 세션 유저 본인의 기존 이메일을 제외한 **나머지 타인들의 이메일 풀**에서 중복이 존재하는지 쿼리를 날려 정합성을 확인합니다.
- **프로필 이미지 파일 업로드 보안 (`AuthResource.java`)**
  - `@Consumes(MediaType.MULTIPART_FORM_DATA)` 어노테이션으로 멀티파트 파일 폼 수신을 처리합니다.
  - **서버 측 2차 검증(필수 보안)**:
    1.  **확장자 유효성 검사**: 파일 업로드 시 클라이언트 측 수정에 대비해 서버 측에서 정규식을 사용해 이미지 포맷(`jpg`, `jpeg`, `png`, `gif`, `webp`)만 수신하도록 재검사합니다.
    2.  **용량 제한**: 5MB가 초과하는 파일 유입 시 에러를 유발해 서버 디스크 리소스 오버플로우를 미연에 방지합니다.
    3.  **파일명 난독화 및 중복 방지 (UUID)**: 원래 파일명을 그대로 쓸 경우 발생할 수 있는 경로 탈취(Path Traversal) 공격이나 동일한 파일명 덮어쓰기 오작동을 막기 위해, 고유 식별자인 `UUID.randomUUID().toString()`을 활용하여 저장 파일명을 고유하게 새로 생성하고 이를 DB 내 `profileImage` 컬럼값으로 매핑 저장합니다.

---

### 5. 프론트엔드 동적 라우팅 및 UI/UX 핵심 요약

- **동적 라우팅 제어 (`AuthResource.java`)**
  - 기존 정적 파일명인 `index.html`을 `main_index.html`로 변경하여 Quarkus가 최상위 경로(`/`)에 대해 단순 정적 파일을 즉각 매핑 서빙하는 기본 동작을 비활성화합니다.
  - 대신 백엔드 컨트롤러(`/`)로 접속하게 하여 서버가 현재 유효 세션(Session)을 가지고 있으면 로그인 후 메인인 `main_after_login.html`로 분기하고, 세션이 없으면 `main_index.html`로 동적 분기 서빙을 진행합니다.
- **비방해형 알림 시스템 (Bootstrap Toast)**
  - 사용자의 사용 흐름을 일시 정지시키고 화면을 가로막는 브라우저 내장 동기식 `alert()` 메서드를 배제하고, 우측 상단 등에 부드럽게 팝업되는 비동기식 Bootstrap Toast 컴포넌트로 전면 교체하였습니다 (`showToast(message, type)` 공통 JS 함수 설계).
- **비동기 데이터 바인딩 및 툴팁 피드백**
  - 로그인 성공 유저를 판정해 네비바 프로필 앵커 링크 툴팁에 `👋 [사용자 ID]`를 동적으로 할당하고 툴팁 객체를 인스턴스화하여 감각적인 룩앤필(Look&Feel)을 연출했습니다.

---

### 6. 자바스크립트 성능 측정 요약

- `js/test2.js` 스크립트를 통해 1,000,000(100만)개의 대형 더미 데이터를 단순 1차원 문자열 배열과 복합 객체(Object) 배열로 나누어 메모리에 적재 후 연산 성능을 비교했습니다.
- `console.time()`과 `console.timeEnd()` API를 사용해 배열의 마지막 요소를 찾아내는 순차 탐색 시간(`indexOf` vs `find`) 및 전체를 매핑 연산하는 시간(`map`)의 차이를 실시간 체크하여 프론트엔드 단에서의 자료구조 선택과 알고리즘 렌더링 최적화의 의의를 직접 관측했습니다.

---

### 🔍 9주차~14주차 실습을 통한 학습 방법 정리

본 과정은 단순히 코드 조각을 작성하는 데 머무르지 않고, **백엔드 웹 프레임워크와 프론트엔드 사용자 환경이 어떻게 실시간으로 상호작용하고 보안 경계를 형성하는지**를 시스템적으로 체득하며 학습하였습니다.

1.  **점진적 아키텍처 개선 기법 학습**:
    - 정적 페이지 작성(HTML/CSS)에서 시작하여 ➔ 프론트엔드 동적 로직 결합(JS DOM 제어) ➔ 백엔드 REST API 설계 및 영속 데이터베이스 매핑(ORM) ➔ 완성도 높은 세션 기반 로그인 인증 및 회원 정보 다각화(비밀번호 수정, 이미지 업로드)로 나아가는 단계별 아키텍처 심화 과정을 거치며 프로젝트 생명주기를 주도적으로 학습했습니다.
2.  **경로 매핑 및 정적 리소스 디버깅 능력 배양**:
    - URL 매핑 주소와 물리 폴더명이 중첩될 때 발생하는 404 및 라우팅 충돌 현상에 대응하여 직접 컨트롤러 라우팅 주소와 리다이렉션을 튜닝하고, 폴더 뎁스가 깊어졌을 때의 CSS/JS 상대경로(`../`) 매핑 관계를 디버깅하며 실무적인 에러 핸들링 역량을 함양했습니다.
3.  **철저한 이중 방어 보안 설계 의식 고취**:
    - "모든 사용자의 입력값은 변조될 수 있다"는 원칙 하에 클라이언트 단에서 정규 표현식을 사용해 1차 유효성 검사 및 SHA-256 단방향 암호화를 수행하여 브라우저 평문 탈취를 방어하고, 동시에 서버 단에서 파일 크기, 확장자, 이메일 중복 여부를 2차로 정밀하게 재검증하는 **종단간(End-to-End) 다중 보안 설계 기법**을 반복 학습하였습니다.
4.  **UI/UX 사용자 편의성 고도화 실습**:
    - Toast 팝업, Collapse를 통한 화면 전환 최소화, 툴팁 표시, 다크/라이트 모드 테마 변경 구현 등 디테일한 프론트엔드 스타일링 및 컴포넌트 활용법을 고도화하여 실제 상용 웹 서비스에 준하는 편의성과 디자인 통일성을 적용해 보았습니다.
