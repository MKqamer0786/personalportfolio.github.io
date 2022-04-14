
//When read more button is clicked 

const readMoreBtn= document.querySelector('.read-more');
const readMoreContent= document.querySelector('.readMoreCls');

readMoreBtn.addEventListener('click', () =>{
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent="Show less";
    }
    else{
        readMoreBtn.textContent="Show more"
    }
})

//When Hiring button is selected

const hourlyRate= document.getElementById('hourlyRate');

function showDiv(){
    hourlyRate.style.display="block";
}

function hideDiv(){
    hourlyRate.style.display="none";
}



//When the button is clicked Show menu

//Declaring variables

const menuBtn = document.querySelector('#menuButton');
const closeBtn = document.querySelector('#closeButton');
const menu = document.querySelector('nav .primaryClass ul');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

//When the button is clicked Close menu

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

