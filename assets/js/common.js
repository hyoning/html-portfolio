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

window.onscroll = function() {
    var scroll = window.scrollY;
    //console.log(scroll);
    if (scroll >= 52.5) {
      //console.log('a');
      document.querySelector(".main_header").classList.add("change");
    } else {
      //console.log('a');
      document.querySelector(".main_header").classList.remove("change");
    }
  };