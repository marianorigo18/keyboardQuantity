const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const buttonAddQ = document.querySelector('#buttonAddQy');

buttons.forEach(element => {
    element.onclick=()=>{
        if(element.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1)
        }else{
            display.innerText += element.id     
        }
        if(display.innerText !=""){
            buttonAddQ.disabled = false;
        }else{
            buttonAddQ.disabled = true;
        }
    }

})


// if(e.target.classList.contains('input-card')){
//     if(input > '0'){
//         buttonPush.disabled = false;
//     }else{
//         buttonPush.disabled = true;
//     }
//     if(input == ''){
//         buttonPush.disabled = true;
//     }
// }