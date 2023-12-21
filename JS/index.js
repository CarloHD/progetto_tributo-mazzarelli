var imgArticle = document.getElementsByTagName('img')
var arrow = document.getElementById('arrow')
var hoverCounter = 0
var allHiddenElements = document.querySelectorAll('.hidden')

/* posizionamento freccia affianco a immagine primo articolo con ritardo */
function setPositionArrow () {
  if (hoverCounter == 0) {
    arrow.style.opacity = '0%'
    arrow.style.width = '10%'

    setTimeout(function () {
      arrow.style.top = imgArticle[0].getBoundingClientRect().top + 'px'
      arrow.style.left = imgArticle[0].width + 'px'
      arrow.style.opacity = '100%'
    }, 1500)
  }
}
// EVENTI
window.addEventListener('load', setPositionArrow, false)
window.addEventListener('resize', setPositionArrow, false)
screen.orientation.addEventListener('change', setPositionArrow, false)

imgArticle[0].addEventListener(
  'mouseenter',
  function () {
    arrow.style.opacity = '0%'
    hoverCounter += 1
  },
  false
)
imgArticle[1].addEventListener(
  'mouseenter',
  function () {
    arrow.style.opacity = '0%'
    hoverCounter += 1
  },
  false
)

//Ottimizzazione per connessioni lente

//Caricamento immagine sfondo su oggetto
var src = 'image/background_70_home.webp'
var backgroundImg = new Image()
backgroundImg.src = src

//Evento load immagine sfondo
backgroundImg.addEventListener('load', function () {
  document.body.style.backgroundImage = "url('" + src + "')"
  //rimozione classe elementi nascosti
  setTimeout(function () {
    allHiddenElements.forEach(function (el) {
      el.classList.add('startTransition')
      el.classList.remove('hidden')
    })
  }, 700)
})
