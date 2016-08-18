!function() {
  setTimeout(function() {
    var bg = document.querySelector('.home-bg')
    if (bg) {
      bg.className += ' loaded'
    }
  }, 100)
}()
