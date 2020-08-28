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
    constructor(name, type, color, sound, image){
      this.name = name
      this.type = type
      this.color = color
      this.sound = sound
      this.image = image
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

  const wall = new Infrastructure('wall', 'wall', true)
  const secretPassage = new Infrastructure('secretPassage', 'wall', false)
  const emptySpace = new Infrastructure('emptySpace', 'path' , false)
  const trapfloor = new Infrastructure('trapfloor', 'path' , false)

  const whenuaH = new Character('whenuaH', 'hero', 'green')
  const redVirus = new Character('redV', 'virus', 'red' )

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

  //execution

  createGrid()
  addInfrastructure(currentGridLayout)
  console.log(cells)

  //listeners

}
window.addEventListener('DOMContentLoaded', init)