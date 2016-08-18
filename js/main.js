!function() {
  setTimeout(function() {
    var bg = document.querySelector('.home-bg')
    if (bg && !bg.hasClass('nope')) {
      bg.className += ' loaded'
    }
  }, 100)
}()
