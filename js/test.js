//인풋값을 가져오기 위한 태그 생성
const inputTags = document.querySelectorAll("#user_form input");
//최종 확인을 위한 버튼태그 생성
const formBtn = document.querySelector("#user_form button");

//배열 객체 생성
let inputData = [
    {
        check: /^[\w]{2,5}$/
    },
    {
        check: /^([a-z][A-Z][0-9]){5,10}+\@+[a-z]{3,10}+\.+[a-z]{2,3}$/
    },
    {
        check: /^$/
    },
    {
        check: /^(010)+[0-9]{3,}$/
    }
];