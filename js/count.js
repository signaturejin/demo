//증가될 숫자를 넣을 태그 생성
const countNum = document.querySelectorAll(".countNumber");

//배열 객체 생성
let countList = [
    {
        incNum: 30,
        complete: 1200,
        tag: countNum[0],
        speed: 30
    },
    {
        incNum: 2,
        complete: 120,
        tag: countNum[1],
        speed: 15
    },
    {
        incNum: 1,
        complete: 5,
        tag: countNum[2],
        speed: 100
    },
    {
        incNum: 1,
        complete: 20,
        tag: countNum[3],
        speed: 50
    }
];

//스크롤을 내려서 다섯번째구역 시작위치값에 도달하였을 때 카운트 발생
window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    let contStart = document.querySelector(".counting").offsetTop;

    if(scTop >= contStart - 104){
        //반복문 안에서 함수 호출
        countList.forEach(function(item,index){
            autoCount(item.incNum,item.complete,item.tag,item.speed);
        });
    }
});

//함수 생성
function autoCount(incNum,complete,tag,speed){
    //변수 생성
    let num = 0;

    //자동함수를 이용하여 숫자 증가
    let counting = setInterval(function(){

        //num에 증가시키고픈 숫자만큼 더해서 다시 num에 대입하여준다.
        num += incNum;

        //num의 숫자가 목표숫자보다 크거나 같다면 목표숫자를 화면에 보여준다.
        if(num >= complete){
            //자동함수 멈춤
            clearInterval(counting);
            tag.innerHTML = complete;
        }
        else{
            //아닐 때는 증가되는 숫자를 보여줌
            tag.innerHTML = num;
        }

    },speed);
}