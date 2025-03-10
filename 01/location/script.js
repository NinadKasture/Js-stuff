const pos=document.getElementById('but');

const correct=(position)=>{
    console.log(position);
}

const giveError=()=>{
    console.log('error');
}
pos.addEventListener('click',function(){
    navigator.geolocation.getCurrentPosition((correct),(giveError));
})