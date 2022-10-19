let btn = document.querySelector('#g-r')
let baseURL = "https://swapi.dev/api"
let body = document.querySelector('body')
function residentGetter() {
    axios.get(baseURL + '/planets/?search=Alderaan')
    .then(response => {
        let arr = response.data.results[0].residents
        for (let i = 0; i < arr.length; i++) {
            axios.get(arr[i])
            .then(response2 => {
                let person = response2.data.name
                let name = document.createElement('h2')
                name.textContent = person
                body.appendChild(name)
            })
        }
    })
    .catch((err) => console.log(err))
}
btn.addEventListener('click', residentGetter)