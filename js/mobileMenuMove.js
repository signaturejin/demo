//필요한 태그 생성
// const sections = document.querySelectorAll(".section");
const mobileMenu = document.querySelectorAll(".mobileMenu > li");
//해당 구역의 시작 위치값 담기
// let secStart = [];
//위 변수와 상수태그는 mobileBtn.js에서 이미 만들어져있음

window.addEventListener("scroll",function(){
    // 스크롤바의 위치값 담기
    let scTop = window.scrollY;

    // 각 구역의 시작위치값 배열에 담기
    sections.forEach(function(item,index){
        secStart[index] = item.offsetTop - 100;

        // 구역에 따라 mobileBtn에 클래스 붙여주기
        if(scTop >= secStart[index] && scTop < secStart[index + 1]){
            fcBtn(item,index);

        }
        else if(scTop >= secStart[6]){
            fcBtn(item,index);
        }
    });

    //반복문을 이용해서 메뉴를 클릭하면 해당 영역으로 이동할 수 있는 기능
    mobileMenu.forEach(function(item,index){
        item.addEventListener("click",function(e){
            e.preventDefault(); //페이지 이동 방지

            window.scrollTo({
                top: secStart[index],
                behavior: "smooth"
            });
        });
    });

    
});

function fcBtn(item,index){
    //반복문을 이용하여 모바일메뉴 전부 비활성화
    mobileMenu.forEach(function(item,index){
        item.classList.remove("on");
    });
    //활성화
    mobileMenu[index].classList.add("on");
}

