//footer에 있는 로고 aos속성제거를 위한 태그 생성
const fLogo = document.querySelector("#footer .center > img");
//f-menu안에 있는 li의 aos속성을 제거해주기 위해 태그 생성
const fMenu = document.querySelectorAll(".f-menu > li");

//브라우저 화면크기 감지
window.addEventListener("resize",function(){
    //위 이벤트를 이용해서 계속해서 바뀌는 브라우저 창의 크기값을 대입시켜줌
    let bodyWidth = document.body.offsetWidth;
    console.log(bodyWidth);
    
    //조건문을 활용하여 브라우저 창이 580px이하일 때
    if(bodyWidth < 580){
        //하단영역 sns메뉴들과 로고의 data-aos 속성 제거
        fMenu.forEach(function(item,index){
            item.removeAttribute("data-aos");
        });
        fLogo.removeAttribute("data-aos");
    }
    else {
        //아닐 시 다시 속성 붙여줌
        fMenu.forEach(function(item,index){
            item.setAttribute("data-aos","fade-down");
        });
        fLogo.setAttribute("data-aos","fade-down");
    }
});