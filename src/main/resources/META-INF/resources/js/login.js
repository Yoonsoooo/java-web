// js/login.js

// 로그인 화면 입력값 체크 후 로그인 실행
function validateAndLogin() {
  let valid = true;

  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // 아이디 앞뒤 공백 제거 후 서버로 전송되도록 input 값도 정리
  usernameInput.value = username;

  // ① 아이디 유효성 검사
  // 조건 : 4~20자 영문/숫자만 허용
  // 정규식 : /^[a-zA-Z0-9]{4,20}$/
  if (!/^[a-zA-Z0-9]{4,20}$/.test(username)) {
    showError(
      "usernameInput",
      "usernameMsg",
      "아이디는 4~20자 영문/숫자만 입력할 수 있습니다.",
    );
    valid = false;
  } else {
    clearError("usernameInput");
  }

  // ② 패스워드 유효성 검사
  // 조건 : 8자 이상, 영문 + 숫자 + 특수문자(!@#$%^&*) 포함
  // 정규식 : /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
  if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
    showError(
      "passwordInput",
      "passwordMsg",
      "패스워드는 8자 이상이며 영문, 숫자, 특수문자(!@#$%^&*)를 포함해야 합니다.",
    );
    valid = false;
  } else {
    clearError("passwordInput");
  }

  // ③ 두 항목 모두 통과 시 로그인 실행
  if (valid) {
    submitLogin();
  }
}

// 오류 표시 함수
// 사용 예시: showError("usernameInput", "usernameMsg", "오류 메시지")
function showError(inputId, msgId, message) {
  const input = document.getElementById(inputId);
  const msg = document.getElementById(msgId);

  input.classList.add("is-invalid");
  msg.textContent = message;
}

// 오류 제거 함수
// 사용 예시: clearError("usernameInput")
function clearError(inputId) {
  const input = document.getElementById(inputId);
  input.classList.remove("is-invalid");

  if (inputId === "usernameInput") {
    document.getElementById("usernameMsg").textContent = "";
  }

  if (inputId === "passwordInput") {
    document.getElementById("passwordMsg").textContent = "";
  }
}

// 실제 로그인 form 제출
function submitLogin() {
  document.getElementById("loginForm").submit();
}

function validateAndLogin() {
  submitLogin(); // 유효성 검사(지난 주 문제)
}
async function submitLogin() {
  const password = document.getElementById("passwordInput").value;
  const hashed = await hashPassword(password);
  document.getElementById("password").value = hashed;
  document.getElementById("loginForm").submit();
}

window.addEventListener('load', function() {
  const params = new URLSearchParams(window.location.search);
  const error = params.get('error');
  if (error === '1') {
    showError("usernameInput", "usernameMsg", "아이디 또는 패스워드가 올바르지 않습니다.");
  }
});
