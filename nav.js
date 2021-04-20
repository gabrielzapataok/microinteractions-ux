/*-----------------------------BETA-----------------------------*/

const containerMain = document.getElementById('container-main')
const renderTriangle = () => containerMain.innerHTML = 'Triangle'
const renderQuad = () => containerMain.innerHTML = 'Quad'
const renderCircle = () => containerMain.innerHTML = 'Circle'

/*-----------------------------BETA-----------------------------*/

//surface SVG
const surface = document.getElementById('surface')

//array of labels
const elements = document.querySelectorAll('label')
const nth = [...elements]

//array of links
const a = document.querySelectorAll('a')
const links = [...a]

//function that move surface
const moveSurface = (coordenate) => surface.style.backgroundPositionX = `${(coordenate-1)*100}px`

for (let i = 0; i < nth.length; i++) {

    //cancel refresh document in links
    links[i].addEventListener('click',function(e){
        e.preventDefault()
    })

    //add function moveSurface to labels and click in link
    nth[i].addEventListener('click',function(){
        moveSurface(i)
        links[i].click()
    })

}


//init label 1
nth[0].click()