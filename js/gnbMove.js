//gnb의 메뉴를 클릭하면 해당 구역으로 이동하는 기능
const sections = document.querySelectorAll(".section");
const gnbMenu = document.querySelectorAll(".gnb li");
let secStart = [];

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;

    sections.forEach(function(item,index){
        secStart[index] = item.offsetTop + 40;

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

    

});