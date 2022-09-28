// header 태그 생성
const header = document.querySelector("#header");
//로고img 태그 생성
const logoImg = document.querySelector(".logo a img");

//스크롤의 위치가 두번째 영역 시작위치값에 도달하였을 때
//로고 바뀜 + 헤더에 클래스 fixed 붙여주는 기능
window.addEventListener("scroll",function(){
    //scroll의 값을 변수에 담아줌
    let scTop = window.scrollY;
    //윈도우를 스크롤하였을 때 두번째 영역 시작위치값 변수에 담아줌
    let cont2Start = document.querySelector(".about_me").offsetTop; 
    
    if(scTop >= cont2Start){//스크롤의 값이 두번째영역 시작값보다 크거나 같을 경우
        header.classList.add("fixed");//클래스 붙여줌
        logoImg.setAttribute("src","img/logo.png");//로고이미지 바꿔줌
    }
    else{//아닐 경우 클래스 없애주고 기존 이미지로 변경
        header.classList.remove("fixed");
        logoImg.setAttribute("src","img/logo2.png");
    }
});