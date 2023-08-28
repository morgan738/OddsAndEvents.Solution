// TODO: this file! :)
const state = {
    number: [],
    odd: [],
    even: []
}

const form = document.querySelector("form")
const numBank = document.querySelector("#numberBank output")
const oddBank = document.querySelector("#odds output")
const evenBank = document.querySelector("#evens output")
const sortOne = document.querySelector("#sortOne")
const sortAll = document.querySelector("#sortAll")

function render(){
    const numbers = state.number.map((num) => {
        return `<span> ${num}</span>`
    })
    numBank.innerHTML = numbers.join("")

    const odds = state.odd.map((num) => {
        return `<span> ${num}</span>`
    })
    oddBank.innerHTML = odds.join("")

    const evens = state.even.map((num) => {
        return `<span> ${num}</span>`
    })
    evenBank.innerHTML = evens.join("")
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const numAdded = event.target.number.value

    state.number.push(numAdded)
    
    render()
})

sortOne.addEventListener("click", () => {
    const sorting = state.number.shift()
    if(sorting%2 === 0){
        state.even.push(sorting)
    }else{
        state.odd.push(sorting)
    }
    render()
})

sortAll.addEventListener("click", () => {
    state.number.map((num)=> {
        if(num%2 === 0){
            state.even.push(num)
        }else{
            state.odd.push(num)
        }
    })
    state.number = []

    render()
})