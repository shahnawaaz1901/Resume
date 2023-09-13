let id = setInterval(()=>{
    if(count == song[index].duration){
        clearInterval(id);
    }
    document.getElementById('TotalTime').innerText = count;
    count++;
},1000);
