/*let skills = document.querySelectorAll('.skill > div');
let skillSection = document.getElementById('skills');
let isVisible = false;
function initializeBars(){
    for(let i of skills){
        i.style.width = 0 + '%';
    }
    console.log(skillSection)
};
initializeBars();

function fillbars(){
    for(let i of skills){
        let width = i.getAttribute('data-val');
        let count = 0;
        let id = setInterval(()=>{
            if(count == width){
                clearInterval(id);
            }
            i.style.width = count + '%';
            count += 5;
        },50)
    }
} 

document.addEventListener('scroll',function(){
    let height = skillSection.getBoundingClientRect();
    console.log(height)
    // console.log(window.innerHeight);
    if(height < 0 && !isVisible){
        fillbars();
        isVisible = true;
    }else{
        isVisible = false;
    }
})*/