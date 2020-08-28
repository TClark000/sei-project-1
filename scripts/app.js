function init() {
  console.log('Yippie')
  
  //elements
  const grid = document.querySelector('.grid')

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
    constructor(name, type, solid = true){
      this.name = name
      this.type = type
      this.solid = solid
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
    }
  }

  //variables
  //infrastructure variables
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
  console.log(currentGridLayout.name,  currentGridLayout.width)
  const gridCellCount = currentGridLayout.width * currentGridLayout.width
  const cells = []

  //objects
  const wall = new Infrastructure('wall', 'wall', true)
  const secretPassage = new Infrastructure('secretPassage', 'wall', false)
  const emptySpace = new Infrastructure('emptySpace', 'path' , false)
  const trapfloor = new Infrastructure('trapfloor', 'path' , false)

  const whenuaH = new Character('whenuaH', 'hero', 0, 'green', '.images/—Pngtree—earth png elements_2854043.png',"<a href='https://pngtree.com/so/earth-vector'>earth-vector png from pngtree.com</a>")
  const redV = new Character('redV', 'virus', 0, 'red', '.images/—Pngtree—red covid-19 bacteria isolated on_5340587.png',"<a href='https://pngtree.com/so/object'>object png from pngtree.com</a>")

  whenuaH.position = 122
  redV.position = 66
  
  //functions
  function createGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      cell.setAttribute('data-i', i)
      cells.push(cell)
      grid.appendChild(cell)
    }
  }

  function addInfrastructure(currentGridLayout){
    for (let i = 0; i < gridCellCount; i++)
      cells[i].classList.add(currentGridLayout.design[i])
  }

  function addCharacter(character){
    cells[character.position].classList.add(character.name)
    cells[character.position].style.backgroundColor  = character.color
  }

  //execution

  createGrid()
  addInfrastructure(currentGridLayout)
  console.log(cells)

  addCharacter(whenuaH)

  //listeners

}
window.addEventListener('DOMContentLoaded', init)