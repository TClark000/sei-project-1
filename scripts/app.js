function init() {
  console.log('Yippie')
  
  //elements
  const grid = document.querySelector('.grid')
  const spanTitle = document.querySelector('#title')
  const spanSubTitle = document.querySelector('#subtitle')
  let spanPoints = document.querySelector('#points')
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
    constructor(name, type, position, previousPosition, speed, life, strength, vulnerable, color, image, imageSize, imageAuth){
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

  class GridObject {
    constructor(name, type, gridDesign, position, time, points, color, image, imageSize, imageAuth){
      this.name = name
      this.type = type
      this.gridDesgin = gridDesign
      this.position = position
      this.time = time
      this.points = points
      this.color = color
      this.image = image
      this.imageSize = imageSize
      this.imageAuth = imageAuth
      GridObject.addArrGridObject(this)
    }
    static addArrGridObject(item){
      arrGridObject.push(item)
    }
  }

  //variables

  const gridAlpha = new gridLayout('alpha', 1, 12, [
    'wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall', 
    'wall','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall',
    'wall', 'wall', 'emptySpace','wall','wall','wall','wall','secretPassage','wall','emptySpace','wall', 'wall',
    'cupboard','wall','emptySpace','wall','emptySpace','emptySpace','emptySpace','emptySpace','wall','emptySpace','wall','cupboard',
    'wall','wall','emptySpace','wall','emptySpace','wall','wall','emptySpace','wall','emptySpace','wall','wall',
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'wall','wall','emptySpace','wall','emptySpace','wall','wall','emptySpace','wall','emptySpace','wall','wall',
    'cupboard','wall','emptySpace','wall','emptySpace','emptySpace','emptySpace','emptySpace','wall','emptySpace','wall','cupboard',
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
  const arrGridObject = []
  const arrTimerID = []

  //objects
  const wall = new Infrastructure('wall', 'wall', true, 'blue')
  const secretPassage = new Infrastructure('secretPassage', 'wall', false, 'palevioletred')
  const cupboard = new Infrastructure('cupboard', 'wall', true, 'blue')
  const emptySpace = new Infrastructure('emptySpace', 'path' , false, 'whitesmoke')
  const trapFloor = new Infrastructure('trapfloor', 'path' , false, 'gray')
  
  const whenuaH = new Character('whenuaH', 'hero', 0, 0, 1000, true, 100, true, 'aqua', 'papayawhip url("../sei-project-1/images/earth.png") no-repeat center','180%', "<a href='https://pngtree.com/so/earth-vector'>earth-vector png from pngtree.com</a>")
  const redV = new Character('redV', 'virus', 0, 0, 500,  true, 100, false,'lightpink', 'whitesmoke url("../sei-project-1/images/virusred.png") no-repeat center','100%', "<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")
  const greenV = new Character('greenV', 'virus', 0, 0, 1000, true, 100, false, 'palegreen', 'whitesmoke url("../sei-project-1/images/virusgreen.png") no-repeat center','90%', "<a href='https://pngtree.com/so/coronavirus'>coronavirus png from pngtree.com</a>")
  const blueV = new Character('blueV', 'virus', 0, 0, 1500, true, 100, true, 'paleturquoise', 'whitesmoke url("../sei-project-1/images/virusblue.png") no-repeat center','140%', "<a href='https://pngtree.com/so/viral'>viral png from pngtree.com</a>")

  // earthMask png "<a href='https://pngtree.com/so/earth-icons'>earth-icons png from pngtree.com</a>"

  const potion = new GridObject('potion', 'points', 'alpha', [22, 130], 20, 100, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/potion.png") no-repeat center', '80%', "<a href='https://pngtree.com/so/magic-clipart'>magic-clipart png from pngtree.com</a>")

  const starterGameTime = 40 //overall time allowed for the game
  let gameCounter = starterGameTime
  const whenuaHStartPosition = 122
  const gamePlacement = true
  const virusStartPosition = 65
  let gamePlay = false
  const starterSubtitle = spanSubTitle.textContent
  const starterGameCycle = 3
  const pointsVirusExpire = 200
  let gameDelayHeroExpire = false

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

  function addGridObjectVitamin(){
    let arrVitamin = []
    const arrPotion = potion.position
    for (let i = 0; i < gridCellCount; i++){
      if (currentGridLayout.design[i] === 'emptySpace') {
        arrVitamin.push(i)
      }
    }
    arrVitamin = arrVitamin.filter(position => {
      return !arrPotion.includes(position)
    })
    arrVitamin = arrVitamin.filter(position => {
      return position !== whenuaHStartPosition
    })
    const vitamin = new GridObject('vitamin', 'points', currentGridLayout.name, arrVitamin, 1, 5, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/music.png") no-repeat center', '30%')
    arrVitamin.forEach(i => {
      cells[i].classList.add(vitamin.name)
      cells[i].style.background  = vitamin.image
      cells[i].style.backgroundSize  = vitamin.imageSize
    })
  }

  function addGridObjectPotion(){
    const arrPotion = potion.position
    arrPotion.forEach(i => {
      cells[i].classList.add(potion.name)
      cells[i].style.background  = potion.image
      cells[i].style.backgroundSize  = potion.imageSize
    })
  }

  function addCharacter(character){
    if (gamePlay || gamePlacement) {
      cells[character.position].classList.add(character.name)
      console.log('add/move Character: ', character.name)
      cells[character.position].style.backgroundColor  = character.color
      cells[character.position].style.background  = character.image
      cells[character.position].style.backgroundSize =  character.imageSize
    }
  }

  function removeCharacter(character){
    const removePosition = character.position
    cells[removePosition].classList.remove(character.name)
    let classList = cells[removePosition].classList.value
    classList = classList.split(' ')    
    if (classList.length === 1){
      cells[character.position].style.background = ''
      cells[character.position].style.backgroundColor = getColor(currentGridLayout.design[character.position])
    } else {
      const classListObj = arrSingleCellObj(classList)
      if (classListObj.length >= 1){
        // if (classListObj.length > 1) {
        //   console.log('classListObj: ', classListObj)
        //   console.log(classListObj[0].name, ' wins image display')
        // }
        // console.log('classListObj: ', classListObj)
        cells[removePosition].style.backgroundColor  = classListObj[0].color
        cells[removePosition].style.background  = classListObj[0].image
        cells[removePosition].style.backgroundSize =  classListObj[0].imageSize
      }
    }
  }

  function arrSingleCellObj(classList){
    classList.splice(0, 1) //remove infrastructure element
    const classListObj = []
    classList.forEach(element => {
      let charObj = {}
      for (let i = 0; i < arrCharacter.length; i++){
        if (element === arrCharacter[i].name) {
          charObj = arrCharacter[i]
        }
      }
      for (let i = 0; i < arrGridObject.length; i++){
        if (element === arrGridObject[i].name) {
          charObj = arrGridObject[i]
        }
      }
      classListObj.push(charObj)
    })
    return classListObj
  }

  function gameTimer(){
    spanSubTitle.textContent = starterSubtitle
    spanPoints.textContent = 0
    spanGameTime.textContent = starterGameTime
    spanGameCycle.textContent = starterGameCycle
    gameCounter = starterGameTime
    
    const timerName = 'gameTime'
    const indexGameCycle = addTimerObj(timerName)

    gamePlay = true
    
    for (let i = arrCharacter.length - 1; i >= 0; i-- ){
      arrCharacter[i].type === 'virus' ? (addVirusCharacters(arrCharacter[i])) : (addCharacter(arrCharacter[i]))
    }

    window.addEventListener('scroll', docuScroll)

    arrTimerID[indexGameCycle]['timerID'] = setInterval(()=>{
      gameCounter --
      spanGameTime.textContent = gameCounter
      if ((gameCounter <= 0) || (!gamePlay)) {
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
    if (!gameDelayHeroExpire){
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
  }

  const handleKeyup = function(param1, param2){
    // console.log(event.keyCode, param1, param2)
    if (gamePlay && !gameDelayHeroExpire) {
      console.log('gameDelayHeroExpire', gameDelayHeroExpire)
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
      checkForGridObject(param1)
    }
  }

  function checkForAnotherChar(character){
    for (let i = arrCharacter.length - 1; i >= 0; i-- ){
      if ((character.name !== arrCharacter[i].name) && (character.position === arrCharacter[i].position) && (character.type !== arrCharacter[i].type) && (character.vulnerable !== arrCharacter[i].vulnerable)) {
        console.log(character.position, character.name, 'vuln: ', character.vulnerable, ' vs ', arrCharacter[i].name, arrCharacter[i].vulnerable)
        if ((character.type === 'hero' && character.vulnerable) || (arrCharacter[i].type === 'hero' && arrCharacter[i].vulnerable)){
          const cycle = Number(spanGameCycle.textContent)
          if (cycle >= 2){
            spanGameCycle.textContent = cycle - 1
            console.log('hero expires')
            removeCharacter(whenuaH) //code only if 1 hero
            whenuaH.position = whenuaHStartPosition //code only if 1 hero
            addCharacter(whenuaH) //code if only 1 hero, add other viruses during delay if life true
            gameDelayHeroExpire = true 
            let counterGameDelayHeroExpire = 0
            const GameDelayHeroExpireTimerID = setInterval(function(){
              counterGameDelayHeroExpire ++
              if (counterGameDelayHeroExpire >= 3){
                console.log('expire delay')
                gameDelayHeroExpire = false
                clearInterval(GameDelayHeroExpireTimerID)
                return
              }
            }, 1000)
            // window.alert('Hero looses a life, back to the start point!')
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

  function checkForGridObject(character){
    const currentPosition = character.position
    let classList = cells[currentPosition].classList.value
    classList = classList.split(' ')    
    const arrClassListObj = arrSingleCellObj(classList)
    console.log('arrClassListObj: ', arrClassListObj)
    arrClassListObj.forEach(element => {
      if (element.type === 'points'){
        spanPoints.textContent = Number(spanPoints.textContent) + element.points
        console.log('points!')
        cells[currentPosition].classList.remove(element.name)
        if (element.name === 'potion'){
          console.log('potion!')
          potionPlay()
        }
      }
    })
  }

  function potionPlay(){
    arrCharacter.forEach(charObj => {
      if (charObj.type === 'virus'){
        charObj.vulnerable = true
        console.log(charObj.name, charObj.vulnerable )
      } else {
        charObj.vulnerable = false
      }
    })
    console.log(arrCharacter)
  }

  function virusExpire(character){
    console.log(character.name, ': virus expires, points added')
    spanPoints.textContent = Number(spanPoints.textContent) + pointsVirusExpire
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
      arrCharacter[i].type === 'virus' ? (arrCharacter[i].position = virusStartPosition + 1) : arrCharacter[i].position = whenuaHStartPosition
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
  
  addGridObjectVitamin()
  addGridObjectPotion(arrGridObject)
  console.log(arrGridObject)

  addCharacter(whenuaH)
  
  //listeners
  startButton.addEventListener('click', gameTimer)
  document.addEventListener('keyup', handleKeyup.bind(event, whenuaH))

}
window.addEventListener('DOMContentLoaded', init)