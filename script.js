let navBar = document.querySelectorAll('nav a');
for(let everyNav of navBar){
    everyNav.addEventListener('click',function(e){
        e.preventDefault();
        let destination = e.target.innerText.toLowerCase();
        if(destination == 'home'){
            return;
        }
        let destinationElement = document.getElementById(destination);
        let id = setInterval(function(){
            let distance = destinationElement.getBoundingClientRect();
            if(distance.y <= 0){
                clearInterval(id);
            }
            scrollBy(0,10);
        },1);
    })
}