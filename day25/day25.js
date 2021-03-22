// top n elem in the function
function getTopN(objArr,n=10){
    if(objArr.length < n){
        return objArr
    }
    return objArr.slice(0,n)
}

// top n elem of population
function findTop10Population(objArr,n=10){
    const sortedArr = objArr.slice()
    sortedArr.sort((a,b)=> b.population- a.population)
    return getTopN(sortedArr,n)
}

// calculate population size
function calculatePopulation(objArr){
    return objArr.reduce( (acc,cur)=> acc + cur.population,0 )
}

// create count of distinct countries
function countAppearanceOfDistinctLangs(objArr){
    let languages = {}
    objArr.reduce((acc,cur)=>{
        if(cur.languages.length>=1){
            cur.languages.forEach(lang => {
                lang = lang.toLowerCase()
                if(languages.hasOwnProperty(lang)){
                    languages[`${lang}`] = languages[`${lang}`]+1
                }else{
                    languages[`${lang}`] = 0
                }
            });
        }
    })
    

    return Object.entries(languages).sort((a,b)=> b[1] - a[1])
}

// create progress bar
function createProgress(leftText,progress,rightText,color){
    const progressRow = document.createElement('div')
    progressRow.setAttribute('class','row')
    progressRow.style.color = "black"
    progressRow.style.fontSize = "20px"
    progressRow.style.fontWeight = "bold"
    progressRow.style.margin = "10px"

    const leftCol2 = document.createElement('div')
    leftCol2.setAttribute('class','col-2')
    leftCol2.innerHTML = leftText

    const rightCol2 = document.createElement('div')
    rightCol2.setAttribute('class','col-2')
    rightCol2.innerHTML = rightText

    const middlecol8 = document.createElement('div')
    middlecol8.setAttribute('class','col-8')

    const progressChart = document.createElement('div')
    progressChart.setAttribute('id','myProgress')
    progressChart.style.width = "100%"
    progressChart.style.backgroundColor = "grey"
    
    const mybar = document.createElement('div')
    mybar.setAttribute('id','myBar')
    mybar.style.width = `${progress}%`
    mybar.style.backgroundColor = `${color}`
    mybar.style.height = "50px"

    progressChart.appendChild(mybar)

    middlecol8.appendChild(progressChart)

    progressRow.appendChild(leftCol2)
    progressRow.appendChild(middlecol8)
    progressRow.appendChild(rightCol2)

    return progressRow
}

// calculate percent of country poplution
function countryPopulationPercent(population,allpopulation){
    return Math.floor( (population/allpopulation)*100 )
}


const populationsBtn = document.querySelector("#population")
const languagesBtn = document.querySelector("#languages")

populationsBtn.addEventListener('click', ()=>{

    const containerProgress = document.querySelector(".container")

    containerProgress.innerHTML = ''

    let top10population = findTop10Population(countries,10)
    const allpopulation = calculatePopulation(countries)
    let progress;

    progress = createProgress("World", countryPopulationPercent(allpopulation,allpopulation), allpopulation, "#FFC107" )
    containerProgress.appendChild(progress)

    top10population.forEach(element => {
        console.log(element);
        progress = createProgress(element.name, countryPopulationPercent(element.population,allpopulation), element.population, "#FFC107" )
        containerProgress.appendChild(progress)
    });
})

languagesBtn.addEventListener('click', ()=>{

    const containerProgress = document.querySelector(".container")

    containerProgress.innerHTML = ''
    const langs = countAppearanceOfDistinctLangs(countries)
    let top10langs = getTopN( langs,10 )
    const alllangs = langs.length
    let progress;

    top10langs.forEach(element => {
        progress = createProgress(element[0], countryPopulationPercent(element[1],alllangs), element[1], "#FFC107" )
        containerProgress.appendChild(progress)
    });
})






