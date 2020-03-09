let start = document.querySelector('button')
let key ="8fcb1c44-2044-4c3e-9ca0-9fb503a9658c"

start.addEventListener('click', () =>{
  // console.log("mig")
  fetch(`https://api.kanye.rest`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
       console.log(response.quote)
      document.getElementById('kanye').innerHTML=response.quote
    })
    fetch( `https://content.guardianapis.com/search?api-key=8fcb1c44-2044-4c3e-9ca0-9fb503a9658c`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
   document.getElementById('guard').innerHTML= response.response.results[0].webTitle

 // console.log(response.response.results[0].webTitle)


})
})
// currently working through edge cases on this one becuase the API from guardian is not randomizing with the guidance of Seth the alumni
