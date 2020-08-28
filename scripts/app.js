function init() {
  console.log('Yippie')
  
  //elements
  const grid = document.querySelector('.grid')

  //classes
  class Infrastructure {
    constructor(name, type, solid = true){
      this.name = name
      this.type = type
      this.solid = solid
    }
  }

  class Virus {
    constructor(name, type, color, sound){
      this.name = name
      this.type = type
      this.color = color
      this.sound = sound
    }
  }

  //variables
  //infrastructure variables
  const width = 12
  const gridCellCount = width * width
  const cells = []

  const arrInfraOne = [
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
  ]

  const wall = new Infrastructure('wall', 'wall', true)
  const path = new Infrastructure('emptySpace', 'path' , false)
  const secretPassage = new Infrastructure('secretPassage', 'wall', false)

  const redVirus = new Virus('fast', 'redVirus', 'red' )

  //functions
  function createGrid(){
    for (let i = 0; i < gridCellCount; i++){
      const cell = document.createElement('div')
      cell.setAttribute('data-i', i)
      cells.push(cell)
      grid.appendChild(cell)
    }
  }

  function addInfrastructure(arrInfra){
    for (let i = 0; i < gridCellCount; i++)
      cells[i].classList.add(arrInfra[i])
  }

  //execution

  createGrid()
  addInfrastructure(arrInfraOne)
  console.log(cells)

  //listeners

}
window.addEventListener('DOMContentLoaded', init)