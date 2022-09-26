//필요한 태그 생성
const view = document.querySelector(".view");
const slBtn = document.querySelectorAll(".sliderBtn li");
let num = 0;

//버튼을 누르면 해당 페이지로 슬라이딩
slBtn.forEach(function(item,index){
    item.addEventListener("click",function(e){

        //버튼 전부 비활성화
        slBtn.forEach(function(item,index){
            item.classList.remove("on");
        });
        //해당 버튼 활성화
        item.classList.add("on");
        //화면 슬라이딩
        view.style.marginLeft = -100 * index + "%";
    });
});

//자동 슬라이딩
// setInterval(function(){

//     if(num >= slBtn.length){
//         num = 0;
//     }
//     else {
//         num++;
//     }

//     view.style.marginLeft = -100 * num + "%";

// },100);