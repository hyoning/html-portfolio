
window.onload = function() {
fetch('./common/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    // 메뉴 버튼 클릭 이벤트 처리
    document.querySelector('.menu_btn').addEventListener('click', () => {
      document.querySelector('.nav_wrap').classList.add('active');
      document.querySelector('body').classList.add('overflowH');
    });

    // 네비게이션 메뉴 링크 클릭 이벤트 처리
    document.querySelectorAll('.nav_list a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav_wrap').classList.remove('active');
        document.querySelector('body').classList.remove('overflowH');
      });
    });

    // 닫기 버튼 클릭 이벤트 처리
    document.querySelector('.close_btn').addEventListener('click', () => {
      document.querySelector('.nav_wrap').classList.remove('active');
      document.querySelector('body').classList.remove('overflowH');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
fetch('./common/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
    //마우스
    document.addEventListener("mousemove", (e) => {
      const cursorInner = document.querySelector(".cursor_inner");

      cursorInner.style.top = e.clientY + "px"
      cursorInner.style.left = e.clientX + "px"
    })
    const cursor = document.querySelector(".cursor_wrap");

    // 버튼 클릭시 ripple 
    function createRipple(e){
      let ripple = document.createElement("span")
      ripple.classList.add("ripple");
      ripple.style.top= (e.clientY - ripple.clientHeight / 2) + "px"
      ripple.style.left = (e.clientX - ripple.clientWidth / 2) + "px"
      cursor.appendChild(ripple)

      ripple.addEventListener("animationend", () => {
          cursor.removeChild(ripple)
      })
    }
    document.addEventListener("click", (e) => {
      createRipple(e)
    })

  })
  .catch(error => {
    console.error('Error:', error);
  });
}