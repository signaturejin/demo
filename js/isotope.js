//필요한 태그 생성
const isoWrap = document.querySelector(".isoWrap");
const isoMenu = document.querySelectorAll(".isoMenu li");

//isoMenu를 클릭하면 정렬되도록 클릭 기능 부여
isoMenu.forEach(function(item,index){
    item.addEventListener("click",function(e){
      e.preventDefault(); //페이지 이동 방지

      //li태그 색상 전부 비활성화
      for(let i=0; i<isoMenu.length; i++){
        isoMenu[i].classList.remove("click");
      }
      //해당 태그만 색상 활성화
      item.classList.add("click");

      //해당 속성값을 가져와서 변수에 대입시키고 정렬
      let data = item.getAttribute("data-iso");
      iso.arrange({
          filter: data,
          transitionDuration: '0.5s'
        })
    });
});


let elem = document.querySelector('.isoWrap');
let iso = new Isotope( elem, {
  // options
  itemSelector: '.portBox',
  layoutMode: 'masonry'
});