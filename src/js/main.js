// Main --------------------------------------------------------
/* exported main, updateGuiInfo */

import NeuralNetwork from './neuralnet'
import { scene } from './scene'
import initGui from './gui'
import run from './run'

var gui, gui_info, gui_settings

export default function main () {
  var neuralNet = window.neuralNet = new NeuralNetwork()
  scene.add(neuralNet.meshComponents)

  initGui()

  run()
}
