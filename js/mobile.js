var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var highlightElement = document.getElementById('Highlight');

  if (/android/i.test(userAgent)) {
    highlightElement.classList.add("android");
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    highlightElement.classList.add("ios");
  }
