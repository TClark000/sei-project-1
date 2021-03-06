function init() {
  console.log('Yippie')
  
  //elements
  const grid = document.querySelector('.grid')
  const spanTitle = document.querySelector('#title')
  const spanSubTitle = document.querySelector('#subtitle')
  let spanPoints = document.querySelector('#points')
  let spanGameTime = document.querySelector('#gameTime')
  const spanGameCycle = document.querySelector('#gameCycle')
  const gridButton = document.querySelector('#gridButton')
  const startButton = document.querySelector('#startButton')
  const audio = document.querySelector('#audio')

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
    constructor(name, type, solid = true, color, image, imageAuth){
      this.name = name
      this.type = type
      this.solid = solid
      this.color = color
      this.image = image
      this.imageAuth = imageAuth
      Infrastructure.addArrInfra(this)
    }
    static addArrInfra(item) {
      arrInfra.push(item)
    }
  }

  class Character {
    constructor(name, type, position, previousPosition, previousPrePosition, speed, life, strength, vulnerable, color, image, imageSize, imageAuth){
      this.name = name
      this.type = type
      this.position = position
      this.previousPosition = previousPosition
      this.previousPrePosition = previousPrePosition
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
    constructor(name, type, gridDesign, position, time, points, color, image, imageSize, opacity, imageAuth){
      this.name = name
      this.type = type
      this.gridDesign = gridDesign
      this.position = position
      this.time = time
      this.points = points
      this.color = color
      this.image = image
      this.imageSize = imageSize
      this.opacity = opacity
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
    'wall', 'wall', 'emptySpace','wall','wall','wall','wall','handBottle','wall','emptySpace','wall', 'wall',
    'cupboard','wall','emptySpace','wall','emptySpace','emptySpace','emptySpace','emptySpace','wall','emptySpace','wall','cupboard',
    'wall','wall','emptySpace','wall','emptySpace','wall','wall','emptySpace','wall','emptySpace','wall','wall',
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'wall','wall','emptySpace','wall','emptySpace','wall','wall','emptySpace','wall','emptySpace','wall','wall',
    'cupboard','wall','emptySpace','wall','emptySpace','emptySpace','emptySpace','emptySpace','wall','emptySpace','wall','cupboard',
    'wall', 'wall', 'emptySpace','wall','handBottle','wall','wall','wall','wall','emptySpace','wall', 'wall',
    'wall','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall',
    'wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall','wall', 'wall'
  ])
  const gridBeta = new gridLayout('beta', 1, 23, [
    'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall',
    'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'emptySpace', 'emptySpace', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall',  'emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'emptySpace','emptySpace', 'wall', 'emptySpace','emptySpace', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace', 'wall',
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'emptySpace','emptySpace', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 'emptySpace',  'wall', 'wall', 'wall', 'emptySpace','emptySpace','wall', 'wall', 'wall', 'emptySpace', 'wall', 
    'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'wall',  'emptySpace','emptySpace','emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'emptySpace', 'wall',
    'wall', 'emptySpace', 'handBottle', 'emptySpace','emptySpace','emptySpace','emptySpace','wall', 'wall', 'emptySpace', 'wall', 'wall', 'wall', 'emptySpace', 'wall','wall',  'emptySpace', 'emptySpace','emptySpace','emptySpace','handBottle', 'emptySpace', 'wall',
    'wall', 'wall', 'wall', 'emptySpace','emptySpace','wall', 'emptySpace','wall', 'emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','wall', 'emptySpace', 'wall', 'emptySpace','emptySpace', 'wall', 'wall', 'wall', 
    'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace',
    'wall', 'wall', 'wall', 'emptySpace','emptySpace','wall', 'emptySpace','wall', 'emptySpace','emptySpace','emptySpace','wall', 'emptySpace','emptySpace','emptySpace','wall', 'emptySpace', 'wall', 'emptySpace','emptySpace', 'wall', 'wall', 'wall', 
    'wall', 'emptySpace', 'handBottle', 'emptySpace','emptySpace','emptySpace','emptySpace','wall', 'wall', 'emptySpace', 'wall', 'wall', 'wall', 'emptySpace', 'wall','wall',  'emptySpace', 'emptySpace','emptySpace','emptySpace','handBottle', 'emptySpace', 'wall',
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'emptySpace', 'wall',
    'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'wall',  'emptySpace','emptySpace','emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'emptySpace','emptySpace', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 'emptySpace',  'wall', 'wall', 'wall', 'emptySpace','emptySpace','wall', 'wall', 'wall', 'emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'emptySpace','emptySpace', 'wall', 'emptySpace','emptySpace', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace', 'wall',
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall',  'emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 'emptySpace', 'wall', 
    'wall', 'emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace','emptySpace','emptySpace', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'emptySpace', 'wall', 
    'wall', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'emptySpace', 'emptySpace', 'emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace','emptySpace', 'wall', 
    'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' 
  ])

  let currentGridLayout = gridBeta
  let  gridCellCount = currentGridLayout.width * currentGridLayout.width
  const cells = []
  const arrInfra = []
  const arrCharacter = []
  const arrGridObject = []
  const arrTimerID = []

  //objects
  const wall = new Infrastructure('wall', 'wall', true, 'blue', null, null)
  // const wall = new Infrastructure('wall', 'wall', true, 'blue', 'url("../sei-project-1/images/wall.png") right / 100% repeat whitesmoke', "<a href='https://pngtree.com/so/green'>green png from pngtree.com</a>")
  const handBottle = new Infrastructure('handBottle', 'wall', false, 'blue', 'url("../sei-project-1/images/bottle.png") right / 100% repeat whitesmoke', "<a href='https://pngtree.com/so/yellow'>yellow png from pngtree.com</a>")
  const cupboard = new Infrastructure('cupboard', 'wall', true, 'blue', null, null)
  const emptySpace = new Infrastructure('emptySpace', 'path' , false, 'whitesmoke', null, null)
  const trapFloor = new Infrastructure('trapfloor', 'path' , false, 'gray', null, null)
  
  const whenuaH = new Character('whenuaH', 'hero', 0, 0, 0, 1000, true, 100, true, 'aqua', 'whitesmoke url("../sei-project-1/images/earthMask.png") no-repeat center','185%', "<a href='https://pngtree.com/so/virus'>virus png from pngtree.com</a>")
  const redV1 = new Character('redV1', 'virus', 0, 0, 0, 500,  true, 100, false,'whitesmoke', 'whitesmoke url("../sei-project-1/images/redV.png") no-repeat center','100%', "<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")
  const greenV1 = new Character('greenV1', 'virus', 0, 0, 0, 900, true, 100, false, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/greenV.png") no-repeat center','90%', "<a href='https://pngtree.com/so/coronavirus'>coronavirus png from pngtree.com</a>")
  const blueV1 = new Character('blueV1', 'virus', 0, 0, 0, 1200, true, 100, true, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/blueV.png") no-repeat center','140%', "<a href='https://pngtree.com/so/viral'>viral png from pngtree.com</a>")

  // earth png "<a href='https://pngtree.com/so/earth-vector'>earth-vector png from pngtree.com</a>"
  // earthMask png "<a href='https://pngtree.com/so/earth-icons'>earth-icons png from pngtree.com</a>"
  // earthMask png without eyes <a href='https://pngtree.com/so/virus'>virus png from pngtree.com</a>
  // potion virus image <a href='https://pngtree.com/so/2019-ncov-virus'>2019-ncov-virus png from pngtree.com</a>
  // earth Home safe & healthy <a href='https://pngtree.com/so/png'>png png from pngtree.com</a>
  
  const potion = new GridObject('potion', 'points', 'alpha', [22, 130], 20, 100, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/potion.png") no-repeat center', '80%', "<a href='https://pngtree.com/so/magic-clipart'>magic-clipart png from pngtree.com</a>")

  let starterGameTime = 40 //overall time allowed for the game, changes with gridlayout
  let gameCounter = starterGameTime
  let booChaseHeroTime = 25 // alpha grid
  const startPlacement = true //placement when game is loaded initially
  let whenuaHStartPosition = 122 // alpha grid
  const whenuaHSecondImage = 'whitesmoke url("../sei-project-1/images/earthmask.png") no-repeat center'
  const whenuaHFirstImage = 'whitesmoke url("../sei-project-1/images/earth.png") no-repeat center'
  const whenuaHHome = 'whitesmoke url("../sei-project-1/images/earthHome.png") no-repeat center'
  const defaultColor = 'whitesmoke'
  const virusPotionColor = '#ffff1a'
  const ImageDetail = '* url("../sei-project-1/images/*.png") no-repeat center'
  const arrImageDetailSplit = ImageDetail.split('*')
  let audioSrcPlay = '../sei-project-1/sounds/Blip.wav'

  let virusStartPosition = 65 //within a wall lair alpha
  let virusTally = 0
  let gamePlay = false
  const starterSubtitle = spanSubTitle.textContent
  const starterGameCycle = 3
  const pointsVirusExpire = 200
  let gameDelayHeroExpire = false
  let booChaseHero = false
  const virusSpeedChaseHero = 350
  let counterPotion = 0

  //functions
  function createGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      cell.setAttribute('data-i', i)
      cells.push(cell)
      grid.appendChild(cell)
    }
  }

  function deleteGrid(){
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild)
    }
    cells.forEach(cell => {
      cells.pop(cell)
    })
    cells.length = 0
  }

  function getColor(name){
    for (let i = 0; i < arrInfra.length; i++){
      if (name === arrInfra[i].name) {
        return arrInfra[i].color
      }
    }
  }

  function getImage(name){
    for (let i = 0; i < arrInfra.length; i++){
      if (name === arrInfra[i].name && arrInfra[i].image !== null)  {
        return arrInfra[i].image
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
      cells[i].style.background = getImage(currentGridLayout.design[i])
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
    if (arrGridObject.length === 1){ // need better condition
      const vitamin = new GridObject('vitamin', 'points', currentGridLayout.name, arrVitamin, 1, 5, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/fruit.png") no-repeat center', '40%', '1', "<a href='https://pngtree.com/so/fruits'>fruits png from pngtree.com</a>")
    }
    arrGridObject[1].position = arrVitamin
    arrVitamin.forEach(i => {
      cells[i].classList.add(arrGridObject[1].name)
      cells[i].style.background  = arrGridObject[1].image
      cells[i].style.backgroundSize  = arrGridObject[1].imageSize
      cells[i].style.opacity  = arrGridObject[1].opacity
    })
  }

  function refreshGridObjectVitamin(){
    const arrVitamin = arrGridObject[1].position
    arrVitamin.forEach(position => {
      cells[position].classList.add(arrGridObject[1].name)
      cells[position].style.background  = arrGridObject[1].image
      cells[position].style.backgroundSize  = arrGridObject[1].imageSize
      cells[position].style.opacity  = arrGridObject[1].opacity
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

  function addSecondHeroImage(character){
    const heroImage = 'heroImage'
    const indexheroImage = addTimerObj(heroImage)
    let counterImage = 0
    arrTimerID[indexheroImage]['timerID'] = setInterval(()=>{
      counterImage++
      if (counterImage % 2  === 0){
        whenuaH.image = whenuaHSecondImage
      } else {
        whenuaH.image = whenuaHFirstImage
      }
      whenuaH.imageSize = '185%'
      cells[character.position].style.background  = character.image
      cells[character.position].style.backgroundSize =  character.imageSize
    }, 400)
  }

  function addSoundPlay(){
    const soundPlayTitle = 'soundPlay'
    const indexSoundPlay = addTimerObj(soundPlayTitle)      
    checkForPotionAndChase()
    arrTimerID[indexSoundPlay]['timerID'] = setInterval(()=>{
      audio.src = audioSrcPlay
      audio.play()
    },1200)
  }

  function checkForPotionAndChase(){
    if (counterPotion > 0){
      audioSrcPlay = '../sei-project-1/sounds/potionSound.wav'
    } else if (booChaseHero){
      audioSrcPlay = '../sei-project-1/sounds/Blop.wav'
    } else {
      audioSrcPlay = '../sei-project-1/sounds/Blip.wav'
    }
    window.setTimeout(checkForPotionAndChase, 100)
  }

  function addSoundEndGameGong(){
    const audioSrc = '../sei-project-1/sounds/endGameGong.wav'
    audio.src = audioSrc
    audio.play()
  }

  function addSoundEndGameTaDa(){
    const audioSrc = '../sei-project-1/sounds/endGameTaDa.wav'    
    audio.src = audioSrc
    audio.play()
  }

  function addCharacter(character){
    if ((gamePlay && character.life) || startPlacement) {
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
    console.log(classList)
    if (classList.length === 1){
      if (classList[0] === 'handBottle'){
        cells[character.position].style.background = getImage(currentGridLayout.design[character.position])
      } else {
        cells[character.position].style.background = ''
        cells[character.position].style.backgroundColor = getColor(currentGridLayout.design[character.position])
      }
    } else {
      const classListObj = arrSingleCellObj(classList)
      if (classListObj.length >= 1){
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

    if (gamePlay) {
      return
    }
    gamePlay = true
    refreshGridObjectVitamin(arrGridObject)
    addGridObjectPotion(arrGridObject)

    spanSubTitle.textContent = starterSubtitle
    spanPoints.textContent = '0'
    spanGameTime.textContent = starterGameTime
    spanGameCycle.textContent = starterGameCycle
    gameCounter = starterGameTime
    virusTally = 0
    booChaseHero = false

    const gameHighestScore = determineGamePoints()
    console.log('Highest score available: ', gameHighestScore)
    const timerName = 'gameTime'
    const indexGameCycle = addTimerObj(timerName)

    addSecondHeroImage(whenuaH)
    addSoundPlay()
    
    arrCharacter.forEach(i => {
      if (i.type === 'virus'){
        addVirusCharacters(i)
        i.speed = Number(virusSpeedChaseHero) + Math.floor(Math.random() * 800)
      } else if (i.type === 'hero'){
        addCharacter(i)
      }
    })
    // comment out forEach statement above for testing
    // addVirusCharacters(redV) 
    // addCharacter(whenuaH)

    window.addEventListener('scroll', docuScroll)

    arrTimerID[indexGameCycle]['timerID'] = setInterval(()=>{
      gameCounter --
      spanGameTime.textContent = gameCounter
      if (gameCounter === booChaseHeroTime) {
        booChaseHero = true
        arrCharacter.forEach(i => {
          if (i.type === 'virus'){
            i.speed = virusSpeedChaseHero
          }
        })
      }
      if (Number(spanPoints.textContent) === gameHighestScore){
        gamePlay = false
        spanTitle.textContent = 'Wow you won, with the highest score and ' + virusTally + ' viruses!' 
        console.log('Wow you won!')
        addSoundEndGameTaDa()
        endGame()
        return
      }
      if ((gameCounter <= 0) || (!gamePlay)) {
        gamePlay = false
        console.log('Game time reached.')
        addSoundEndGameGong()
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
        return
      }
      moveVirus(virus)
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

  function moveVirus(name){
    if (!gameDelayHeroExpire){
      let arrNewPosition = []
      let arrPossiblePosition = []
      const arrOption = [[name.position - 1, false, ''],[name.position + 1, false, ''] , [name.position - currentGridLayout.width, false, ''], [name.position + currentGridLayout.width, false, '']]
      removeCharacter(name)
      for (let i = 0; i < arrOption.length; i++) {
        // (arrOption[i][0] !== name.previousPosition) 
        if (!getSolid(currentGridLayout.design[arrOption[i][0]])){
          arrOption[i][1] = true
          switch (i){
            case 0: 
              arrOption[i][2] = 'left'
              break
            case 1: 
              arrOption[i][2] = 'right'
              break
            case 2: 
              arrOption[i][2] = 'upper'
              break
            case 3: 
              arrOption[i][2] = 'lower'
              break
            default:
              break
          }
        }
      }
      console.log('Current position:', name.position)
      console.log('Previous Pos: ', name.previousPosition)
      arrPossiblePosition = arrOption.filter(solid => solid[1] === true )
      console.log('Poss position:', arrPossiblePosition)
      if (arrPossiblePosition.length === 1) {
        name.previousPrePosition = name.previousPosition
        const holdingPosition = name.position
        name.position = name.previousPosition
        name.previousPosition = holdingPosition
        
      }
      const arrPossiblePositionWithoutPrior = arrOption.filter(element => ((element[1] === true)  && (element[0] !== name.previousPosition)) )
      console.log('arrPossiblePositionWithoutPrior', arrPossiblePositionWithoutPrior)
      if ((!booChaseHero) && (arrPossiblePositionWithoutPrior.length >= 1)) {
        arrNewPosition = (arrPossiblePositionWithoutPrior[Math.floor(Math.random() * arrPossiblePositionWithoutPrior.length)])
        console.log(arrNewPosition, arrNewPosition[0])
        name.previousPrePosition = name.previousPosition
        name.previousPosition = name.position
        name.position = arrNewPosition[0]
        console.log(name.name, 'New:', name.position,  'prev:', name.previousPosition )
      } else if ((booChaseHero) && (arrPossiblePosition.length > 1)) {
        const xH = whenuaH.position % currentGridLayout.width
        const yH = Math.floor(whenuaH.position / currentGridLayout.width)
        const xV = name.position % currentGridLayout.width
        const yV = Math.floor(name.position / currentGridLayout.width)

        let xHV = ''
        let yHV = ''
        xH <= xV ? (xHV = 'xH < xV') : (xHV = 'xH > xV')
        yH <= yV ? (yHV = 'yH < yV') : (yHV = 'yH > yV')
        const quadrantExp = xHV + ', ' + yHV
        console.log(quadrantExp)
        let heroQuadrant = []
        switch (quadrantExp ){
          case 'xH < xV, yH < yV':
            if (Math.abs(xH - xV) > Math.abs(yH - yV)){
              heroQuadrant = ['left', 'upper']
            } else {
              heroQuadrant = ['upper', 'left']
            }
            break
          case 'xH > xV, yH < yV':
            if (Math.abs(xH - xV) > Math.abs(yH - yV)){
              heroQuadrant = ['right', 'upper']
            } else {
              heroQuadrant = ['upper', 'right']
            }
            break
          case 'xH < xV, yH > yV':
            if (Math.abs(xH - xV) > Math.abs(yH - yV)){
              heroQuadrant = ['left', 'lower']
            } else {
              heroQuadrant = ['lower', 'left']
            }
            break
          case 'xH > xV, yH > yV':
            if (Math.abs(xH - xV) > Math.abs(yH - yV)){
              heroQuadrant = ['right', 'lower']
            } else {
              heroQuadrant = ['lower', 'right']
            }
            break
          default:
            break
        }
        console.log('HeroQuad: ', heroQuadrant)
        let foundPref = false
        arrPossiblePosition.forEach(element => {
          console.log(element[2], heroQuadrant[0])
          if (element[2] === heroQuadrant[0]){
            console.log('First check: ', element)
            arrNewPosition = element
            foundPref = true
          }
        })
        console.log(foundPref, 'curPos:', name.position, 'prePos: ', name.previousPosition,  'pp:', name.previousPrePosition)
        if (!foundPref){
          arrPossiblePosition.forEach(element => {
            if (element[2] === heroQuadrant[1]){
              arrNewPosition = element
              foundPref = true
              console.log('2nd check', arrNewPosition, 'PrePrev:', name.previousPrePosition)
            }
          })
        }
        if (((foundPref) && (name.position === name.previousPrePosition) && (arrPossiblePositionWithoutPrior.length === 1)) || ((!foundPref) && (arrPossiblePositionWithoutPrior.length === 1))){
          arrNewPosition = arrPossiblePositionWithoutPrior[0]
          console.log('3rd check: ', arrNewPosition, arrPossiblePositionWithoutPrior[0], arrNewPosition[0])
        } else if (!foundPref) {
          arrNewPosition = [name.previousPosition, true]
          console.log('Default to previous location: ', arrNewPosition)
        }
        name.previousPrePosition = name.previousPosition
        name.previousPosition = name.position
        name.position = arrNewPosition[0]
      }
      checkForAnotherChar(name)
      if (name.life && gamePlay) {
        addCharacter(name)
      }
    }
  }

  const handleKeyup = function(param1, param2){
    // console.log(event.keyCode, param1, param2)
    if (gamePlay && !gameDelayHeroExpire) {
      removeCharacter(param1)
      switch (event.keyCode){
        case 39: // arrow right
          if (param1.position === 71 && currentGridLayout.name === 'alpha') {
            (param1.position = 60)
          } else if (param1.position === 83 && currentGridLayout.name === 'alpha') {
            (param1.position = 72)
          } else if (param1.position === 275 && currentGridLayout.name === 'beta') {
            (param1.position = 253)
          } else if (!getSolid(currentGridLayout.design[param1.position + 1])) {
            param1.position++
          }
          break
        case 37: // arrow left
          if (param1.position === 60 && currentGridLayout.name === 'alpha') {
            (param1.position = 71)
          } else if (param1.position === 72 && currentGridLayout.name === 'alpha') {
            (param1.position = 83)
          } else if (param1.position === 253 && currentGridLayout.name === 'beta') {
            (param1.position = 275)
          } else if (!getSolid(currentGridLayout.design[param1.position - 1])) {
            param1.position--
          }
          break
        case 38: //arrow up
          if (!getSolid(currentGridLayout.design[param1.position - currentGridLayout.width])) param1.position -= currentGridLayout.width
          break
        case 40: //arrow down
          if (!getSolid(currentGridLayout.design[param1.position + currentGridLayout.width])) param1.position += currentGridLayout.width
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
            spanSubTitle.textContent = 'Hero expired, back to the start point!'
            spanSubTitle.style.fontWeight = 'bold'
            if (character.type === 'hero'){             
              removeCharacter(character) 
              character.position = whenuaHStartPosition 
            } else {
              removeCharacter(arrCharacter[i]) 
              arrCharacter[i].position = whenuaHStartPosition 
            }
            arrCharacter.forEach(charObj => {
              if (charObj.life === true) { 
                addCharacter(charObj)
              }
            })
            gameDelayHeroExpire = true 
            let counterGameDelayHeroExpire = 0
            const GameDelayHeroExpireTimerID = setInterval(function(){
              counterGameDelayHeroExpire ++
              if (counterGameDelayHeroExpire >= 3 && gamePlay){
                console.log('expire delay')
                gameDelayHeroExpire = false
                spanSubTitle.textContent = starterSubtitle
                spanSubTitle.style.fontWeight = 'initial'
                clearInterval(GameDelayHeroExpireTimerID)
              }
            }, 1000)
          } else {
            gamePlay = false
            spanGameCycle.textContent = 'zero'
            console.log('Game lives at zero')
            addSoundEndGameGong()
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
    // console.log('arrClassListObj: ', arrClassListObj)
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
    if (gamePlay) {
      arrCharacter.forEach(charObj => {
        if (charObj.type === 'virus'){
          charObj.vulnerable = true
          console.log(charObj.name, charObj.vulnerable )
        } else {
          charObj.vulnerable = false
        }
      })
      booChaseHero = false
      spanSubTitle.textContent = 'Potion in effect & virus resistant!'
      spanSubTitle.style.fontWeight = 'bold'

      arrCharacter.forEach(element => {
        if (element.type === 'virus' && element.life === true){
          element.image = virusPotionColor + arrImageDetailSplit[1] + 'virusPotion' + arrImageDetailSplit[2]
          cells[element.position].style.background  = element.image
          cells[element.position].style.backgroundSize =  element.imageSize
        }
      })
    
      counterPotion = 0
      const potionTimerID = setInterval(function(){
        counterPotion ++
        spanSubTitle.style.display = (spanSubTitle.style.display === 'none' ? '' : 'none')
        if (counterPotion >= 8){
          console.log('potion bonus ends')
          counterPotion = 0
          arrCharacter.forEach(charObj => {
            if (charObj.type === 'virus'){
              charObj.vulnerable = false
              console.log(charObj.name, charObj.vulnerable )
            } else {
              charObj.vulnerable = true
            }
            booChaseHero = true
          })
          arrCharacter.forEach(element => {
            if (element.type === 'virus'){
              element.image = defaultColor + arrImageDetailSplit[1] + element.name.slice( 0, -1 ) + arrImageDetailSplit[2]
              if (element.life === true){
                cells[element.position].style.background  = element.image
                cells[element.position].style.backgroundSize =  element.imageSize
              }
            }
          })

          if (gamePlay){
            spanSubTitle.textContent = starterSubtitle
          }
          spanSubTitle.style.fontWeight = 'initial'
          clearInterval(potionTimerID)
        }
      }, 800)
      counterPotion = 0
      console.log(arrCharacter)
    }
  }

  function virusExpire(character){
    console.log(character.name, ': virus expires, points added')
    spanPoints.textContent = Number(spanPoints.textContent) + pointsVirusExpire
    character.life = false
    virusTally++
    removeCharacter(character)
    character.position = virusStartPosition
    cells[character.position].style.background = ''
    cells[character.position].style.backgroundColor = getColor('wall')
    console.log(character.name.slice(0, -2 ))
    spanSubTitle.textContent = 'The ' + (character.name.slice( 0, -2 ))  + ' virus expired, points added!'
    spanSubTitle.style.fontWeight = 'bold'
    let counterVirusExpire = 0
    const virusExpiredTimerID = setInterval(function(){
      counterVirusExpire ++
      spanSubTitle.style.display = (spanSubTitle.style.display === 'none' ? '' : 'none')
      if (counterVirusExpire >= 4 && gamePlay){
        spanSubTitle.textContent = starterSubtitle
        spanSubTitle.style.fontWeight = 'initial'
        clearInterval(virusExpiredTimerID )
      }
    }, 1200)
    console.log(character)
  }

  function determineGamePoints(){
    let arrPointsPerGridObject = []
    arrPointsPerGridObject = arrGridObject.map(element => {
      return (Number(element.position.length) * Number(element.points))
    })
    const sumPointsPerGridObject = arrPointsPerGridObject.reduce((a,b) => a + b, 0)
    const gameHighestScore = sumPointsPerGridObject + (arrCharacter.filter(element => element.type === 'virus').length * pointsVirusExpire)
    return gameHighestScore
  }

  function endGame(){
    console.log('Game Ended Function')
    const vitaminTally = cells.filter(cell => {
      return (cell.classList.value).includes('vitamin')
    })
    const consumedVitamin = arrGridObject[1].position.length - vitaminTally.length
    spanSubTitle.textContent = '** Game Over | ' + consumedVitamin + ' fruit bowls and viruses vaporized: ' + virusTally + ' **'
    for (let i = arrCharacter.length - 1; i >= 0; i-- ){
      removeCharacter(arrCharacter[i])
      arrCharacter[i].life = true
      arrCharacter[i].type === 'virus' ? (arrCharacter[i].position = virusStartPosition + Math.floor(Math.random() * 2)) : arrCharacter[i].position = whenuaHStartPosition
    }

    for (let i = arrTimerID.length - 1; i >= 0; i-- ){
      clearInterval(arrTimerID[i]['timerID'])
      arrTimerID.splice(i, 1)
    }

    whenuaH.image = whenuaHHome
    whenuaH.imageSize = '100%'
    cells[whenuaH.position].style.background  = whenuaH.image
    cells[whenuaH.position].style.backgroundSize =  whenuaH.imageSize
    window.addEventListener('scroll', docuScroll)
  }

  function gridLayOutSettings(){
    if (gamePlay) {
      return
    }
    spanSubTitle.textContent = starterSubtitle
    spanPoints.textContent = '0'
    if (event.type === 'click') {
      deleteGrid()
      currentGridLayout.name === 'alpha' ? currentGridLayout = gridBeta : currentGridLayout = gridAlpha
      console.log('New Grid:', currentGridLayout)
      gridCellCount = currentGridLayout.width * currentGridLayout.width   
    }
    createGrid()
    addInfrastructure(currentGridLayout)

    if (currentGridLayout.name === 'alpha') {
      grid.style.width = '600px'
      grid.style.height = '600px'
      cells.forEach(cell => {
        cell.style.width = '8%'
        cell.style.height = '8%'
      })
      starterGameTime = 40
      spanGameTime.textContent = starterGameTime
      gameCounter = starterGameTime
      booChaseHeroTime = 25
      whenuaHStartPosition = 122
      virusStartPosition = 65
      if (arrCharacter.length > 4){
        const removedCharacters = arrCharacter.splice(4,5)
      }
      arrCharacter.forEach(i => {
        if (i.type === 'virus'){
          i.position = virusStartPosition + Math.floor(Math.random() * 2)
        } else if (i.type === 'hero'){
          i.position = whenuaHStartPosition
        }
      })
      potion.design = 'alpha'
      potion.position = [22, 130]
    } else if (currentGridLayout.name === 'beta'){
      grid.style.width = '690px'
      grid.style.height = '690px'
      cells.forEach(cell => {
        cell.style.width = '4%'
        cell.style.height = '4%'
      })
      starterGameTime = 140
      spanGameTime.textContent = starterGameTime
      gameCounter = starterGameTime
      booChaseHeroTime = 110
      virusStartPosition = 241
      whenuaHStartPosition = 471
      if (arrCharacter.length < 5){
        const redV2 = new Character('redV2', 'virus', 0, 0, 0, 500,  true, 100, false,'whitesmoke', 'whitesmoke url("../sei-project-1/images/redV.png") no-repeat center','100%', "<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")
        const greenV2 = new Character('greenV2', 'virus', 0, 0, 0, 900, true, 100, false, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/greenV.png") no-repeat center','90%', "<a href='https://pngtree.com/so/coronavirus'>coronavirus png from pngtree.com</a>")    
        const blueV2 = new Character('blueV2', 'virus', 0, 0, 0, 1200, true, 100, true, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/blueV.png") no-repeat center','140%', "<a href='https://pngtree.com/so/viral'>viral png from pngtree.com</a>")
        const purpleV1 = new Character('purpleV1', 'virus', 0, 0, 0, 900, true, 100, false, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/purpleV.png") no-repeat center','160%', "<a href='https://pngtree.com/so/drugs'>drugs png from pngtree.com</a>")    
        const purpleV2 = new Character('purpleV2', 'virus', 0, 0, 0, 900, true, 100, false, 'whitesmoke', 'whitesmoke url("../sei-project-1/images/purpleV.png") no-repeat center','160%', "<a href='https://pngtree.com/so/drugs'>drugs png from pngtree.com</a>")    
      }
      arrCharacter.forEach(i => {
        if (i.type === 'virus'){
          i.position = virusStartPosition + Math.floor(Math.random() * 2)
        } else if (i.type === 'hero'){
          i.position = whenuaHStartPosition
        }
      })
      potion.design = 'beta'
      potion.position = [72, 88, 164, 180, 348, 364, 440, 456]
    }

    addGridObjectVitamin()
    addGridObjectPotion()
    addCharacter(whenuaH)

    console.log(cells)
    console.log(arrGridObject)
    console.log(arrInfra)
    console.log(arrCharacter)
    
  }

  //execution

  gridLayOutSettings() //used to also toggle between grids

  //listeners
  startButton.addEventListener('click', gameTimer)
  gridButton.addEventListener('click', gridLayOutSettings)
  document.addEventListener('keyup', handleKeyup.bind(event, whenuaH))

}
window.addEventListener('DOMContentLoaded', init)