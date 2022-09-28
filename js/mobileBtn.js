//필요한 태그 생성
const mobileBtn = document.querySelector(".mobileBtn");
const mobileBoard = document.querySelector(".mobileBoard");

//모바일버튼을 누를때마다 모바일버튼과 모바일보드에 클래스가 붙었다 안붙었다 하게 함
mobileBtn.addEventListener("click",function(){
    mobileBtn.classList.toggle("close");
    mobileBoard.classList.toggle("show");
});