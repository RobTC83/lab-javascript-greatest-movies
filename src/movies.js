
  

// Iteration 1: All directors? - Get the array of all directors.

// function getAllDirectors (someArr) {

//     const directors = someArr.map(function(movie){
//            return movie.director;
//      });
//         return directors
//      }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.

// function howManyMovies(array) {
    
//     const dramaMovies = array.filter((dramaMovie)=> {
//         return (dramaMovie.director==="Steven Spielberg" && dramaMovie.genre.indexOf('Drama') > -1)
//         })
//         console.log(dramaMovies.length)
//         return dramaMovies.length
// }



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(movies){
//   if(!movies.length){return 0}
//   else{
//   const ratesArr = movies.map((arr)=>{
//     return (arr.rate)
//   })

//   const sumRates = ratesArr.reduce((a,b)=>{
//     return a+b 
//   })

//   const avgMovies =  (sumRates / movies.length)

//   return Math.round (avgMovies*100) /100
// }
// }





  
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dataMovies) {
  
  dataMovies.filter((movie)=>{
    const onlyDramaMovies = movie.genre.includes("Drama"===true)
    return onlyDramaMovies
  })
  if (!onlyDramaMovies.length){return 0}
  else{
    const sumOnlyDramaRates = onlyDramaMovies.reduce((a,b)=>{
      return (a+b).rate
    })

    const avgDramaRates = sumOnlyDramaRates / dataMovies.length
      return Math.round(avgDramaRates*100)/100
    }
}
    
     

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(someArr) {

//     const moviesYear = someArr.sort(function(a,b){
//       return a.year-b.year})
//       //console.log(moviesYear)
    
//     }
//     orderByYear(movies)
    
    
// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(arrmovies) {

//     const movieNew = arrmovies.map(e =>e.title)
//     movieNew.sort()
//     const prim20 = movieNew.slice(0,20)
//     return prim20 
//     }
//     orderAlphabetically(movies)

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// */