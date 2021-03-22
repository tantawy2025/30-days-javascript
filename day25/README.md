# day-25

## exercise of day-25

![alt text](../imgs/day25.gif)

# Problem Statement

## as we see we have 3 sections
-   header section

    ![alt text](../imgs/header.png)

-  controller section which contains buttons
    -   `population button` dispalys top 10 population countries
    -   `languages button` dispalys top 10 languages

    ![alt text](../imgs/controller.png)

-   visualiztion section

    ![alt text](../imgs/visualization.png)


```html
<div class="bg-light p-5 text-center">
        <!-- header section -->
        <div class="p-5">
            <h1 class="text-warning">World Countries Data</h1>
            <h5>Currently we have 250 countries</h5>
        </div>
        <!-- controller section -->
        <div class="p-5 bg-white">
            <button class="btn btn-warning" id="population">POPULATIONS</button>
            <button class="btn btn-warning" id="languages">LANGUAGES</button>
        </div>
        <!-- visualization section -->
        <div class="container">
            <div class="row" style="color: black; font-size: 20px; font-weight: bold;">

                <p class="text-warning">Press Population or Languages to see result</p>

            </div>
        </div>
    </div>

```

### countries array object as follows

```javascript
{
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
```

# solution scenarios
>## when clicking `population button`
> behind the scene i will make this calculation

>-  implement method to get top 10 countries by population 

>`const top10population = retrieveTopNObjectsByKey(countries,'population',10)`


>-  implement method to get whole world population

>`const wholeWorldPopulation = worldPopulation(countries)`

>- query select document element where i want to put progress bar

>- `const containerProgress = document.querySelector(".container")`

>-  loop `top10population` and `createProgress(leftText,progress,rightText,color)` as follows


```javascript
top10population.forEach(element => {
        console.log(element);

        progress = createProgress(
            element.name, 
            calculatePercent(element.population,wholeWorldPopulation), 
            element.population, 
            "#FFC107" 
            )
        
        containerProgress.appendChild(progress)
    });
```

>-  create method which creates the progressbar row and takes left-col-2 value and col-8 value and right-col-2 value

>   `createProgress(leftText,progress,rightText,color) return generated progressbar row as html element`

![alt text](../imgs/visualization2.png)

>-  each row divided into 3 section
-   col-2 ===> country name
-   col-8 ===> progress bar
-   col-2 ===> population

>-  


# what we need to calculate form countries array

## we need methods or function to 

-   `getTopN(array,n) return array`
    - takes an array and returns new array of the top n elements

-   `retrieveTopNObjectsByKey(objArray,fiteringkey,n) return array of objects`
    -   objectArray => countries
    -   fiteringKey => population
    -   n           => top n elements

    > i want to get top 10 countries with the highest population
### what this function do step by step
    -   sort object array by key in this case population in descending order
    -   slice top n element
    -   return the sliced array

-   `worldPopulation(objArr) return num`
    -   return sum of all countries population

-   `countDistinctLanguageAppearance(objArr) return array of [lang,count] array`
    -   get distinct languages with occurance number
    -   then sort result in descending order
    -   `getTopN(result,10)`

-   `calculatePercent(number,devidedBy) return number`
    -   return division approximation multipy by 100


