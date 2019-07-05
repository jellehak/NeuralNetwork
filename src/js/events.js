import { camera, renderer, sceneSettings } from './scene'

window.addEventListener('keypress', function (event) {
  var key = event.keyCode

  switch (key) {
    case 32:/* space bar */ sceneSettings.pause = !sceneSettings.pause
      break

    case 65:/* A */
    case 97:/* a */ sceneSettings.enableGridHelper = !sceneSettings.enableGridHelper
      break

    case 83:/* S */
    case 115:/* s */ sceneSettings.enableAxisHelper = !sceneSettings.enableAxisHelper
      break
  }
})

$(function () {
  var timerID
  $(window).resize(function () {
    clearTimeout(timerID)
    timerID = setTimeout(function () {
      onWindowResize()
    }, 250)
  })
})

function onWindowResize() {
  const WIDTH = window.innerWidth
  const HEIGHT = window.innerHeight

  const pixelRatio = window.devicePixelRatio || 1
  const screenRatio = WIDTH / HEIGHT

  camera.aspect = screenRatio
  camera.updateProjectionMatrix()

  renderer.setSize(WIDTH, HEIGHT)
  renderer.setPixelRatio(pixelRatio)
}
