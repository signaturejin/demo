//스크롤 값에 따라 gnb의 메뉴 아래에 막대기가 보이는 기능
//gnb 메뉴 누르면 해당 구역으로 이동하는 기능
const sections = document.querySelectorAll(".section");
const gnbMenu = document.querySelectorAll(".gnb li");
let secStart = [];

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;

    //스크롤 값에 따라 gnb의 메뉴 아래에 막대기가 보이는 기능
    sections.forEach(function(item,index){
        secStart[index] = item.offsetTop - 90;

        if(scTop >= secStart[index] && scTop < secStart[index + 1]){
            //전부 비활성화
            gnbMenu.forEach(function(item,index){
                item.classList.remove("on");
            });
            //해당 태그 활성화
            gnbMenu[index].classList.add("on");
        }
        else if(scTop >= secStart[6]){
            //전부 비활성화
            gnbMenu.forEach(function(item,index){
                item.classList.remove("on");
            });
            //해당 태그 활성화
            gnbMenu[index].classList.add("on");
        }
    });

    //gnb 메뉴 누르면 해당 구역으로 이동하는 기능
    gnbMenu.forEach(function(item,index){
        item.addEventListener("click",function(e){
            e.preventDefault();
    
            window.scrollTo(
                {
                    top: secStart[index],
                    behavior: "smooth"
                }
            );
        });
    });
});