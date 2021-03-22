

// create the whole parent div
const wholediv = document.createElement('div')
wholediv.style.background = "url(space.gif)"
wholediv.style.backgroundSize = "cover"
wholediv.style.backgroundAttachment = "fixed"
wholediv.style.width = "100vw"
wholediv.style.height = "100vh"
wholediv.style.position = "absolute"
wholediv.style.textAlign = "center"

// create title of the program
const title = document.createElement('h1')
title.innerHTML = "Calculate a weight of an object on a planet"
title.style.color = "white"
title.style.padding = "50px"

// form section has  1 input and 1 select
const form = document.createElement('form')
form.setAttribute('action','javascript:void(0);')
form.setAttribute('id','massCalculator')

// mass input
const massInput = document.createElement('input')
massInput.setAttribute('type','text')
massInput.setAttribute('name','massInput')
massInput.setAttribute('id','massInput')
massInput.setAttribute('placeholder','Mass in Kilogram')
massInput.style.display = "inline"
massInput.style.padding = "5px 20px"
massInput.style.margin = "10px"

// planet select input
const planetSelect = document.createElement('select')
planetSelect.setAttribute('name','planetSelect')
planetSelect.setAttribute('id','planetSelect')
planetSelect.setAttribute('form','massCalculator')
planetSelect.style.padding = "7px 30px"
planetSelect.style.margin = "5px"

const selectElemens = [
    {
        name: "Mercury",
        gravity: 0.38
    },
    {
        name: "Venus",
        gravity: 0.9
    },
    {
        name: "Moon",
        gravity: 0.17
    },
    {
        name: "Mars",
        gravity: 0.38
    },
    {
        name: "Jupiter",
        gravity: 2.53
    },
    {
        name: "Saturn",
        gravity: 1.07
    },
    {
        name: "Uranus",
        gravity: 0.89
    },
    {
        name: "Neptune",
        gravity: 1.14
    }
]

let option;
selectElemens.forEach(element => {
    option = document.createElement('option')
    option.setAttribute('value', JSON.stringify(element))
    option.innerHTML = element.name
    
    planetSelect.appendChild(option)
});

// claculate button
const button = document.createElement('button')
button.textContent = "Submit"
button.style.display = "inline"
button.style.width = "120px"
button.style.padding = "7px 10px"
button.style.margin = "10px"


// create result section 
const wholeResultBody = document.createElement('div')
wholeResultBody.style.margin = "auto"
wholeResultBody.style.width = "80vw"

wholeResultBody.style.backgroundColor = "#212121"
wholeResultBody.style.color = "black"
wholeResultBody.style.opacity = "0.7"

// planet image
const planetImg = document.createElement('img')
planetImg.setAttribute('src','mercury.png')
planetImg.style.width = "400px"
planetImg.style.padding = "50px"
planetImg.style.display = "inline"

// result text
const resultBody = document.createElement('div')

resultBody.style.width = "50%"
resultBody.style.backgroundColor = "white"
resultBody.style.color = "black"
resultBody.style.opacity = "0.7"
resultBody.style.display = "inline-block"
resultBody.style.position = "relative"
resultBody.style.top = "30px"

const resultPara = document.createElement('p')
resultPara.style.padding = "30px"
resultPara.style.fontSize = "25px"
resultPara.style.color = "black"
resultPara.innerHTML = ''

const resultParaNum = document.createElement('p')
resultParaNum.style.padding = "30px"
resultParaNum.style.borderRadius = "50%"
resultParaNum.style.backgroundColor = "black"
resultParaNum.style.display = "inline-block"
resultParaNum.style.opacity = "0.9"
resultParaNum.style.fontSize = "25px"
resultParaNum.style.color = "white"
resultParaNum.innerHTML = 'hello'


button.addEventListener('click', ()=>{
    const selectedObj = JSON.parse(planetSelect.value)
    if(!massInput.value){
        resultPara.innerHTML = `Mass is required`
        resultParaNum.innerHTML = ''
    }else{
        resultPara.innerHTML = `The Weight of Object on the ${selectedObj.name}`
        resultParaNum.innerHTML = `${ Math.floor( (+selectedObj.gravity * +massInput.value) * 1000) / 1000 }`
    }
    
    planetImg.setAttribute('src',`${selectedObj.name}.png`)
    console.log(selectedObj.name);
    console.log(selectedObj.gravity);
    console.log(typeof +selectedObj.gravity);
    
})


resultBody.appendChild(resultPara)
resultBody.appendChild(resultParaNum)

wholeResultBody.appendChild(planetImg)
wholeResultBody.appendChild(resultBody)

form.appendChild(massInput)
form.appendChild(planetSelect)
form.appendChild(button)

wholediv.appendChild(title)
wholediv.appendChild(form)
wholediv.appendChild(wholeResultBody)


document.body.appendChild(wholediv)


