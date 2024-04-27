 
 window.onscroll = function() {
    var scroll = window.scrollY;
    if (scroll >= 52.5) {
      document.querySelector(".main_header").classList.add("change");
    } else {
      document.querySelector(".main_header").classList.remove("change");
    }
  };
  
 //상단 타이틀 영역, 마우스 반대로 움직이기
 const conTitle = document.querySelector(".con01_title");
 const containerFirst = document.querySelector(".container_01")

 containerFirst.addEventListener("mousemove", (e) => {
     const xRelativeToTitle = e.clientX / containerFirst.clientWidth;
     const yRelativeToTitle = e.clientY / containerFirst.clientHeight;   

     conTitle.style.transform = `translate(${xRelativeToTitle * -40}px ,${yRelativeToTitle * -40}px)`
 })

// 옆에서 나오는 전구 이미지 
const panelImg = document.querySelector('.character_icon');
const flyingBulbImage = document.querySelector('.bulb_img');

window.addEventListener("scroll", () => {
    const scrollYBottom = window.scrollY + document.documentElement.clientHeight;
    if (scrollYBottom > panelImg.offsetTop && scrollYBottom < panelImg.offsetTop + panelImg.offsetHeight + 100){
        const translateX = - 60 + 60 * 1.8 * (scrollYBottom - panelImg.offsetTop) / (panelImg.offsetHeight + 100)
        const translateY = - 50 + 50 * (scrollYBottom - panelImg.offsetTop) / (panelImg.offsetHeight + 100)
        const rotationDegree = -12 + 12 * 1.7 * (scrollYBottom - panelImg.offsetTop) / (panelImg.offsetHeight )
        flyingBulbImage.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotationDegree}deg)`
    }
})

//about 영역
document.addEventListener('DOMContentLoaded', function() {
    // 모든 'con02_ex_li' 클래스를 가진 요소를 선택
    var conExs = document.querySelectorAll('.con02_ex_li');

    // 각 요소에 대해 클릭 이벤트 리스너 추가
    conExs.forEach(function(conEx) {
        conEx.addEventListener('click', function() {
            // 클릭된 요소가 이미 'active' 클래스를 가지고 있다면 제거
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // 모든 요소에서 'active' 클래스 제거
                conExs.forEach(function(conEx) {
                    conEx.classList.remove('active');
                });
                // 클릭된 요소에만 'active' 클래스 추가
                this.classList.add('active');
            }
        });
    });
});

// center fixed
  



 window.addEventListener('scroll', function() {

    //skill progress
    let pageHeight = window.innerHeight;
    let scrollTop = window.scrollY + pageHeight;
    let container = document.querySelector(".container_03").offsetTop;
    if (container <= scrollTop - 300) {
        document.querySelectorAll('.progress-bar').forEach(function(progressBar) {
            progressBar.classList.add('animate');
        });
        let progressTitles = document.querySelectorAll('.progress_title');
        progressTitles.forEach(function(title) {
            let percentage = title.querySelector('span').textContent;
            let progressBar = title.nextElementSibling.querySelector('.progress-bar.animate');
            progressBar.style.width = percentage;
        });
    }
 });

//img fade
window.addEventListener('scroll', function() {
    document.querySelectorAll('.fade').forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if(elementPosition < windowHeight - windowHeight/6) {
            element.classList.add('fade-in');
        } else {
            // 스크롤이 요소를 지나쳤을 때 클래스 제거
            element.classList.remove('fade-in');
        }
    });
});


//contain 4 swiper
var swiper = new Swiper(".con04_swiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        // 화면 너비가 500px 이상일 때
        500: {
          slidesPerView: 3.5,
        }
      }
});