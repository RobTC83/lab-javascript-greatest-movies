
  

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (someArr) {

    const directors = someArr.map(function(movie){
           return movie.director;
     });
        return directors
     }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.

function howManyMovies(array) {
    
    const dramaMovies = array.filter((dramaMovie)=> {
        return (dramaMovie.director==="Steven Spielberg" && dramaMovie.genre.indexOf('Drama') > -1)
        })
        console.log(dramaMovies.length)
        return dramaMovies.length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  if(!movies.length){return 0}
  else{
  const ratesArr = movies.map((arr)=>{
    return (arr.rate)
  })

  const sumRates = ratesArr.reduce((a,b)=>{
    return a+b 
  })

  const avgMovies =  (sumRates / movies.length)

  return Math.round (avgMovies*100) /100
}
}





  
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arr) {


  const onlyDrama = arr.filter(movie => movie.genre.includes("Drama"))

  if (!onlyDrama.length){return 0}
  else{
  let onlyDramaRatesArr = onlyDrama.map((arr)=>{ return (arr.rate)})
  
  let sumOnlyDramaRatesArr = onlyDramaRatesArr.reduce((a,b)=>{
    return (a+b)
  })
  
    let finalAverage = sumOnlyDramaRatesArr/onlyDramaRatesArr.length
  
    let roundedFinalAvg = Math.round(finalAverage*100)/100
    return(roundedFinalAvg)
  }
}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
  let newArr = arr.map((arr)=>{return arr})

  let sorted = newArr.sort((a,b)=>{
    return a.year - b.year
  })
  return sorted
  }
    
    
// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

  let newArr = arr.map((arr)=>{return arr.title})
  
  let sortedTopTwenty =newArr.sort((a, b) => a.localeCompare(b))
  
  if (sortedTopTwenty.length>20){
    sortedTopTwenty.length = 20

  }
  
  return sortedTopTwenty
  }
// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// */