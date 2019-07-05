// Assets & Loaders --------------------------------------------------------

const loadingManager = new THREE.LoadingManager()

export default (main) => {
  loadingManager.onLoad = function () {
    document.getElementById('loading').style.display = 'none' // hide loading animation when finished
    console.log('Done.')

    main()
  }

  loadingManager.onProgress = function (item, loaded, total) {
    console.log(loaded + '/' + total, item)
  }
}

const shaderLoader = new THREE.XHRLoader(loadingManager)
shaderLoader.setResponseType('text')

shaderLoader.loadMultiple = function (SHADER_CONTAINER, urlObj) {
  _.each(urlObj, function (value, key) {
    shaderLoader.load(value, function (shader) {
      SHADER_CONTAINER[key] = shader
    })
  })
}

export const SHADER_CONTAINER = {}
shaderLoader.loadMultiple(SHADER_CONTAINER, {

  neuronVert: 'shaders/neuron.vert',
  neuronFrag: 'shaders/neuron.frag',

  axonVert: 'shaders/axon.vert',
  axonFrag: 'shaders/axon.frag'

})

export const OBJ_MODELS = {}
const OBJloader = new THREE.OBJLoader(loadingManager)
OBJloader.load('models/brain_vertex_low.obj', function (model) {
  OBJ_MODELS.brain = model.children[0]
})

export const TEXTURES = {}
const textureLoader = new THREE.TextureLoader(loadingManager)
textureLoader.load('sprites/electric.png', function (tex) {
  TEXTURES.electric = tex
})
