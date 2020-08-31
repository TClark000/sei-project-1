function init() {
  console.log('Yippie')
  
  //elements
  const grid = document.querySelector('.grid')
  const spanTitle = document.querySelector('#title')
  const spanSubTitle = document.querySelector('#subtitle')
  let spanGameTime = document.querySelector('#gameTime')
  const spanGameCycle = document.querySelector('#gameCycle')
  const startButton = document.querySelector('#startButton')

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
    constructor(name, type, position, previousPosition, speed, life, strength, vulnerable,color, image, imageSize, imageAuth){
      this.name = name
      this.type = type
      this.position = position
      this.previousPosition = previousPosition
      this.speed = speed
      this.life = life
      this.strength = strength
      this.vulnerable = vulnerable
      this.color = color
      this.image = image
      this.imageSize = imageSize
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
  const arrTimerID = []

  //objects
  const wall = new Infrastructure('wall', 'wall', true, 'blue')
  const secretPassage = new Infrastructure('secretPassage', 'wall', false, 'palevioletred')
  const emptySpace = new Infrastructure('emptySpace', 'path' , false, 'whitesmoke')
  const trapFloor = new Infrastructure('trapfloor', 'path' , false, 'gray')
  
  const whenuaH = new Character('whenuaH', 'hero', 0, 0, 1000, true, 100, false, 'aqua', 'aqua url("../sei-project-1/images/earth.png") no-repeat center','200%', "<a href='https://pngtree.com/so/earth-vector'>earth-vector png from pngtree.com</a>")
  const redV = new Character('redV', 'virus', 0, 0, 500,  true, 100, false,'lightpink', 'lightpink url("../sei-project-1/images/virusred.png") no-repeat center','110%', "<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")
  const greenV = new Character('greenV', 'virus', 0, 0, 1000, true, 100, false, 'palegreen', 'palegreen url("../sei-project-1/images/virusgreen.png") no-repeat center','100%', "<a href='https://pngtree.com/so/coronavirus'>coronavirus png from pngtree.com</a>")
  const blueV = new Character('blueV', 'virus', 0, 0, 1500, true, 100, true, 'paleturquoise', 'paleturquoise url("../sei-project-1/images/music.png") no-repeat center','80%', "")

  // earthMask png "<a href='https://pngtree.com/so/earth-icons'>earth-icons png from pngtree.com</a>"

  const starterGameTime = 20 //overall time allowed for the game
  let gameTime = starterGameTime
  const whenuaHStartPosition = 122
  const virusStartPosition = 65
  let gamePlay = false
  const starterSubtitle = spanSubTitle.textContent
  const starterGameCycle = 3

  whenuaH.position = whenuaHStartPosition
  redV.position = virusStartPosition + 1
  greenV.position = virusStartPosition + 13
  blueV.position = virusStartPosition + 1

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
    if (gamePlay){
      cells[character.position].classList.add(character.name)
      console.log('add/move/reapply Character: ', character.name)
      cells[character.position].style.backgroundColor  = character.color
      cells[character.position].style.background  = character.image
      cells[character.position].style.backgroundSize =  character.imageSize
    }
  }

  function removeCharacter(character){
    cells[character.position].classList.remove(character.name)
    let classList = cells[character.position].classList.value
    console.log(classList)
    // removed = classList.slice(0, classList.search(' '))
    classList = classList.split(' ')
    console.log(classList, typeof(classList))
    if (classList.length === 1){
      cells[character.position].style.background = ''
      cells[character.position].style.backgroundColor = getColor(currentGridLayout.design[character.position])
    } else {
      classList.forEach(element => {
        console.log(arrCharacter[element]['type'] )
        if (arrCharacter[element]['type'] === 'virus'){
          addCharacter(element)
        }
      })
    }
  }

  function gameTimer(){
    spanSubTitle.textContent = starterSubtitle
    spanGameTime.textContent = starterGameTime
    spanGameCycle.textContent = starterGameCycle
    gameTime = starterGameTime
    
    const timerName = 'gameTime'
    const indexGameCycle = addTimerObj(timerName)

    gamePlay = true
    
    for (let i = arrCharacter.length - 1; i >= 0; i-- ){
      arrCharacter[i].type === 'virus' ? (addVirusCharacters(arrCharacter[i])) : (addCharacter(arrCharacter[i]))
    }

    window.addEventListener('scroll', docuScroll)

    arrTimerID[indexGameCycle]['timerID'] = setInterval(()=>{
      gameTime --
      spanGameTime.textContent = gameTime
      if ((gameTime <= 0) || (!gamePlay)) {
        gamePlay = false
        console.log('Game time reached.')
        endGame()
      }
    }, 1000)
  }

  function docuScroll(){
    window.scrollTo(0,0)
  }

  function addVirusCharacters(virus){
    const virusName = virus['name']
    addCharacter(virus)
    const indexOfTimer = addTimerObj(virusName)
    arrTimerID[indexOfTimer]['timerID'] = setInterval(()=>{
      if ((!gamePlay) || (!virus.life)) {
        // indexOfTimer = arrTimerID.map(function(e) { 
        //   return e.name 
        // }).indexOf(virusName)
        //   const removed = arrTimerID.splice(arrTimerID[indexOfTimer], 1)
        return
      }
      moveObj(virus)
    }, virus.speed)
  }

  function addTimerObj(name){
    const timerElement = {}
    timerElement.name = name
    timerElement.timerID = null
    // arrTimerID.push({ timerElement: timerElement }) has title of timerElement
    arrTimerID.push(timerElement)
    return (arrTimerID.indexOf(timerElement))
  }

  function moveObj(name){
    let arrRandomPosition = []
    const arrOption = [[name.position + 1, false],[name.position - 1, false ] , [name.position - currentGridLayout.width, false], [name.position + currentGridLayout.width, false]]
    removeCharacter(name)
    for (let i = 0; i < arrOption.length; i++) {
      if ((arrOption[i][0] !== name.previousPosition) && (!getSolid(currentGridLayout.design[arrOption[i][0]]))){
        arrOption[i][1] = true
      }
    }
    const arrPossiblePosition = arrOption.filter(solid => solid[1] === true )
    // console.log(arrPossiblePosition)
    if (arrPossiblePosition.length > 0) {
      arrRandomPosition = (arrPossiblePosition[Math.floor(Math.random() * arrPossiblePosition.length)])
      name.previousPosition = name.position
    } else { 
      arrRandomPosition = [name.previousPosition, true]
      name.previousPosition = name.Position
    }
    // console.log(arrRandomPosition)
    name.position = arrRandomPosition[0]
    checkForAnotherChar(name)
    if (name.life && gamePlay) {
      addCharacter(name)
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
      checkForAnotherChar(param1)
      if (gamePlay){ 
        addCharacter(param1)
      }
    }
  }

  function checkForAnotherChar(character){
    for (let i = arrCharacter.length - 1; i >= 0; i-- ){
      if ((character.name !== arrCharacter[i].name) && (character.position === arrCharacter[i].position) && (character.type !== arrCharacter[i].type) && (character.vulnerable !== arrCharacter[i].vulnerable)) {
        console.log(character.position, character.vulnerable, arrCharacter[i].name)
        if (((character.type === 'hero') && (character.vulnerable)) || ((arrCharacter[i].type === 'hero') && (arrCharacter[i].vulnerable))){
          const cycle = Number(spanGameCycle.textContent)
          if (cycle >= 2){
            spanGameCycle.textContent = cycle - 1
            console.log('hero looses life.')
          } else {
            gamePlay = false
            spanGameCycle.textContent = 'zero'
            endGame()
          }
        } else if (((character.type === 'virus') && (character.vulnerable)) || ((arrCharacter[i].type === 'virus') && (arrCharacter[i].vulnerable))){
          character.type === 'virus' ? virusExpire(character) : virusExpire(arrCharacter[i])
        }
      }
    }
  }

  function virusExpire(character){
    console.log(character.name, ': virus expires')
    character.life = false
    removeCharacter(character)
    character.position = virusStartPosition
    cells[character.position].classList.add(character.name)
  }

  function endGame(){
    console.log('Game Ended Function')
    spanSubTitle.textContent = 'Game Over'  
    
    for (let i = arrCharacter.length - 1; i >= 0; i-- ){
      removeCharacter(arrCharacter[i])
      arrCharacter[i].life = true
      arrCharacter[i].type === 'virus' ? (arrCharacter[i].position = virusStartPosition) : arrCharacter[i].position = whenuaHStartPosition
    }

    for (let i = arrTimerID.length - 1; i >= 0; i-- ){
      clearInterval(arrTimerID[i]['timerID'])
      arrTimerID.splice(i, 1)
    }

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