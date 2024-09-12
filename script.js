var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

const display = {
    value: '0',
    maxLength: 15,
};


for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
          
        if(btntext == 'x')
    {
        btntext='*';
    }
    if (btntext=='÷')
    {
        btntext='/';
    }
        screen.value+=btntext;
    });
}

function sin()
{
    screen.value=Math.sin(screen.value)
}
function cos()
{
    screen.value=Math.cos(screen.value)
}
function tan()
{
    screen.value=Math.tan(screen.value)
}
function log()
{
    screen.value=Math.log(screen.value)
}
function pow()
{
    screen.value=Math.pow(screen.value, 2)
}
function e()
{
    screen.value= 2.71828182846;
}
function pi()
{
    screen.value=Math.sin(screen.value)
}
function sqrt()
{
    screen.value=Math.sqrt(screen.value, 2)
}
function pi()
{
    screen.value= 3.14159265359;
}
function cube()
{
    screen.value=Math.pow(screen.value, 3)
}
function cbrt()
{
    screen.value=Math.cbrt(screen.value)
}
function factorial()
{
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
{
    f=f*i;
}

i=i-1;

screen.value=f;
}
function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
function Cto() 
{
    
   screen.value = eval((screen.value * (9/5)) + 32);
}

function Fto()  
{
    
   screen.value = eval((screen.value - 32) * (5/9));
}
function percentCalculate() {
    if (screen.includes('%')) {
        screen = screen.replace('%', '');
    } else {
        const parts = screen.split(/[-+*/]/);
        if (parts.length === 2) {
            const [num, percent] = parts;
            const result = (parseFloat(num) * parseFloat(percent)) / 100;
            screen = result.toString();
        } else {
            alert('Invalid expression');
        }
    }
    document.getElementById('screen').textContent = screen;
}
