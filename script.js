const result= document.getElementById('result')
const input = document.getElementById('input') 
function handleClick(el)
{
 input.value += el.innerText
 if (['+','-','*','/'].includes(el.innerText)) {return;}
 result.value= eval(input.value);
}

function reset()
{
    // console.log('reset')
    input.value="";
    result.value="";
}