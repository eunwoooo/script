  //var 썻을 떄 안 썻을 때 비교 시험 문제 나옴거임 차이점 생기는 거 확인 꼭 해야함!
function greeting() {
  var hi = "hello"
}
greeting()
document.write(`greeting 함수 실행: ${hi}<br>`)

//let 으로 전역변수 선언했을 때 ? 변수값? 잘못들음 이해가안감감
let bye = "bye";
function greeting2() {
  document.write(`greeting2 함수 실행: ${bye}<br>`);
}
greeting2();

function change() {
  bye = "bye bye";
}
change();
document.write(`change 함수 실행: ${bye}<br>`)