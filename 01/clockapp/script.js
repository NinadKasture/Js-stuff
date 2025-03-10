const temp=document.getElementById('timer');

const fun=()=>{
    const curr=new Date();

    const time=`${curr.getHours()}:${curr.getMinutes()}:${curr.getSeconds()}`;
    temp.innerText=time;
}

let currtime = setInterval(fun,1000);

const button=document.getElementById('btu');
const button2=document.getElementById('but');
button.addEventListener('click',()=>{
    clearInterval(currtime);
});
button2.addEventListener('click',()=>{
    currtime=setInterval(fun,1000);
})