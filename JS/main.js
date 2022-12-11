const btn = document.getElementById("btn"); // 버튼
const addValue = document.getElementById("addValue"); // 할 일 입력
const result = document.getElementById("result"); // 추가된 할 일

// 할 일 추가시
function addTodo() {
  if (addValue.value === "") {
    alert("내용을 입력하세요!");
  } else {
    let list = document.createElement("li");
    let del = document.createElement("button");
    list.innerHTML = addValue.value;
    result.appendChild(list); // 추가된 할 일에 할 일 리스트 추가하기
    list.appendChild(del); // 할 일 리스트 추가시 삭제버튼도 추가
    del.innerText = "x"; //삭제버튼에 들어갈 'x'자 문자
    del.style.fontSize = "20px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
    del.style.position = "relative";
    addValue.value = ""; // 할 일 입력창 초기화
    addValue.focus(); // 강제 커서 깜빡임
    list.addEventListener("click", function () {
      // 할 일 완료후 클릭시 밑줄
      list.style.textDecoration = "line-through";
      list.style.color = "gray";
    });
  }
}

// 할 일 목록 삭제시
function deleteList(e) {
  let removeOne = e.target.parentElement; // 선택한 목록 한개만 지우기 (부모 객체 지우기)
  removeOne.remove();
}

// 전체 목록 삭제, 선택, 경고창
function allClearList(e) {
  if (confirm("정말 삭제하시겠습니까?") === true) {
    // 취소 메세지가 ok일떄
    if (result.innerHTML == "") {
      // 목록칸이 비어있다면
      alert("삭제할 목록이 없습니다."); // 경고창 표시
    } else {
      result.innerHTML = ""; // 목록칸이 비어있지않다면 전체 삭제
    }
  } else {
    // 취소 메세지가 no일떄
    return false; // 삭제 취소
  }
}
