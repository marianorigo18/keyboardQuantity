const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const buttonAddQ = document.querySelector('#buttonAddQy');
const data = [];

buttons.forEach(element => {
    element.onclick=()=>{
        if(element.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1)
        }else{
            display.innerText += element.id     
        }
        if(element.id=="buttonAddQy"){
            data.push(display.innerText.substr(0,display.innerText.length-11))
            display.innerText= ""
            renderData(data)
        }
        if(display.innerText !=""){
            buttonAddQ.disabled = false;
        }else{
            buttonAddQ.disabled = true;
        }
    }
})
function renderData(data){
    const dataContainer = document.querySelector('.container-data')
    dataContainer.innerHTML = ""
    for(let d of data){
        let row = document.createElement('p')
        row.innerText = d
        dataContainer.appendChild(row)
    }
}
