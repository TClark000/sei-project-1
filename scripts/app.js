function init() {
  console.log('Yippie')
  
  //elements
  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#startButton')
  const spanGameCycle = document.querySelector('#gameCycle')

  //classes
  class gridLayout {
    constructor(name, level, width, design){
      this.name = name
      this.level = level
      this.width = width
      this.design = design
    }
  }

  class Infrastructure {
    constructor(name, type, solid = true, color){
      this.name = name
      this.type = type
      this.solid = solid
      this.color = color
      Infrastructure.addArrInfra(this)
    }
    static addArrInfra(item) {
      arrInfra.push(item)
    }
  }

  class Character {
    constructor(name, type, position, color, image, imageAuth){
      this.name = name
      this.type = type
      this.position = position
      this.color = color
      this.image = image
      this.imageAuth = imageAuth
      Character.addArrCharacter(this)
    }
    static addArrCharacter(item){
      arrCharacter.push(item)
    }
  }

  //variables

  const gridAlpha = new gridLayout('alpha', 1, 12, [
    'wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall', 
    'wall','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall',
    'wall', 'wall', 'emptySpace','wall','wall','wall','wall','secretPassage','wall','emptySpace','wall', 'wall',
    'emptySpace','wall','emptySpace','wall','emptySpace','emptySpace','emptySpace','emptySpace','wall','emptySpace','wall','emptySpace',
    'wall','wall','emptySpace','wall','emptySpace','wall','wall','emptySpace','wall','emptySpace','wall','wall',
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'wall','wall','emptySpace','wall','emptySpace','wall','wall','emptySpace','wall','emptySpace','wall','wall',
    'emptySpace','wall','emptySpace','wall','emptySpace','emptySpace','emptySpace','emptySpace','wall','emptySpace','wall','emptySpace',
    'wall', 'wall', 'emptySpace','wall','secretPassage','wall','wall','wall','wall','emptySpace','wall', 'wall',
    'wall','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall',
    'wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall'
  ])

  const currentGridLayout = gridAlpha
  // console.log('gridLayoutName: ', currentGridLayout.name, 'width: ', currentGridLayout.width)
  const gridCellCount = currentGridLayout.width * currentGridLayout.width
  const cells = []
  const arrInfra = []
  const arrCharacter = []
  let arrTimerID = []

  //objects
  const wall = new Infrastructure('wall', 'wall', true, 'blue')
  const secretPassage = new Infrastructure('secretPassage', 'wall', false, 'palevioletred')
  const emptySpace = new Infrastructure('emptySpace', 'path' , false, 'whitesmoke')
  const trapFloor = new Infrastructure('trapfloor', 'path' , false, 'gray')
  
  const whenuaH = new Character('whenuaH', 'hero', 0, 'green', '.images/—Pngtree—earth png elements_2854043.png',"<a href='https://pngtree.com/so/earth-vector'>earth-vector png from pngtree.com</a>")
  const redV = new Character('redV', 'virus', 0, 'red', '.images/—Pngtree—red covid-19 bacteria isolated on_5340587.png',"<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")
  const blueV = new Character('blueV', 'virus', 0, 'paleblue', '.images/—Pngtree—red covid-19 bacteria isolated on_5340587.png',"<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")


  whenuaH.position = 122
  redV.position = 66
  let gamePlay = false

  console.log(arrInfra)
  console.log(arrCharacter)

  //functions
  function createGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      cell.setAttribute('data-i', i)
      cells.push(cell)
      grid.appendChild(cell)
    }
  }

  function getColor(name){
    for (let i = 0; i < arrInfra.length; i++){
      if (name === arrInfra[i].name) {
        return arrInfra[i].color
      }
    }
  }

  function getSolid(name){
    for (let i = 0; i < arrInfra.length; i++){
      if (name === arrInfra[i].name) {
        // console.log(name, arrInfra[i].solid, i)
        return arrInfra[i].solid
      }
    }
  }

  function addInfrastructure(currentGridLayout){
    for (let i = 0; i < gridCellCount; i++){
      cells[i].classList.add(currentGridLayout.design[i])
      cells[i].style.backgroundColor  = getColor(currentGridLayout.design[i])
    }
  }

  function addCharacter(character){
    cells[character.position].classList.add(character.name)
    cells[character.position].style.backgroundColor  = character.color
  }

  function removeCharacter(character){
    let classList = cells[character.position].classList.value
    if (classList.includes(' ')) {
      classList = classList.slice(0, classList.search(' '))
    }
    cells[character.position].classList.remove(character.name)
    cells[character.position].style.backgroundColor  = getColor(classList)
  }

  function gameTimer(){
    let countCycle = Number(spanGameCycle.textContent)
    const timerName = 'gameCycle'

    addTimerObj(timerName)
    const arrIndex = getArrTimerID(timerName)

    gamePlay = true
    addVirusCharacters(redV)

    window.addEventListener('scroll', docuScroll)

    arrTimerID[arrIndex].timerElement.timerID = setInterval(()=>{
      
      if (countCycle === 1){
        gamePlay = false
        clearInterval(arrTimerID[arrIndex].timerElement.timerID)
        window.alert('Game Over')
        endGame()
      }
      countCycle --
      spanGameCycle.textContent = countCycle
    }, 5000)
  
  }

  function docuScroll(){
    window.scrollTo(0,0)
  }

  function addVirusCharacters(virus){
    let counterV = 10
    const virusName = virus['name']
    addTimerObj(virusName)
    const arrIndex = getArrTimerID(virusName)

    console.log(arrTimerID)

    addCharacter(virus)

    arrTimerID[arrIndex].timerElement.timerID = setInterval(()=>{
      if (counterV === 0){
        clearInterval(arrTimerID[arrIndex].timerElement.timerID)
      }
      counterV --
    },1000)

  }

  function addTimerObj(name){
    const timerElement = {}
    timerElement.name = name
    timerElement.timerID = null
    arrTimerID.push({ timerElement: timerElement })
  }

  function getArrTimerID(name){
    for (let i = 0; i < arrTimerID.length; i++){
      if (name === arrTimerID[i].timerElement.name) {
        return i
      }
    }
  }

  const handleKeyup = function(param1, param2){
    // console.log(event.keyCode, param1, param2)

    if (gamePlay){
      removeCharacter(param1)

      const x = param1.position % currentGridLayout.width
      const y = Math.floor(param1.position / currentGridLayout.width)

      switch (event.keyCode){
        case 39: // arrow right
          if (x < (currentGridLayout.width - 1) && !(getSolid(currentGridLayout.design[param1.position + 1]))) param1.position++
          break
        case 37: // arrow left
          if (x > 0 && !(getSolid(currentGridLayout.design[param1.position - 1]))) param1.position--
          break
        case 38: //arrow up
          if (y > 0 && !(getSolid(currentGridLayout.design[param1.position - currentGridLayout.width]))) param1.position -= currentGridLayout.width
          break
        case 40: //arrow down
          if (y < (currentGridLayout.width - 1) && !(getSolid(currentGridLayout.design[param1.position + currentGridLayout.width]))) param1.position += currentGridLayout.width
          break
        default:
          console.log('Try an arrow key.')
      } 
      addCharacter(param1)
    }
  }

  function endGame(){

    arrTimerID = []

    removeCharacter(redV)

    window.addEventListener('scroll', docuScroll)
  }

  //execution

  createGrid()
  addInfrastructure(currentGridLayout)
  console.log(cells)

  addCharacter(whenuaH)
  

  //listeners
  startButton.addEventListener('click', gameTimer)
  document.addEventListener('keyup', handleKeyup.bind(event, whenuaH))

}
window.addEventListener('DOMContentLoaded', init)