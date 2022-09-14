
const btn = document.querySelector('#btn')
const card = document.querySelector('#card')
const title = document.querySelector('#title')
const textArea = document.querySelector('#text')
const img = document.createElement('img')
async function getAdvice(){
    await fetch('https://api.adviceslip.com/advice')
    .then( response => response.json())
    .then(setInfo)
}
btn.addEventListener('click',getAdvice)

function setInfo(data){
    if(data){
        title.innerText = `Advice Id ${data.slip.id}`
        textArea.innerText = `${data.slip.advice}`
    }
}