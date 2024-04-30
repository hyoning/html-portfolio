// 모바일 환경 감지
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // 클래스 추가
  if (isMobile()) {
    document.body.classList.add('mobile');
  }
  