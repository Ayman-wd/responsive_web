/*toggle nav-bar*/

const navToggle = document.querySelector('.burger-menu');
const navLink = document.querySelector('.nav-links');

navToggle.addEventListener('click',function(button){
    navLink.classList.toggle('toggle');
})


/*new arrivals selector*/
// later with php
const allCard =document.querySelectorAll('.card');
const containerCard =document.querySelector('.card-container');
const allBtns =document.querySelectorAll('.arrivals-btn');


allBtns.forEach(function(ele){
    ele.addEventListener('click',function(){
            allBtns.forEach(function(e){
                e.classList.remove("active");
            })
        ele.classList.add("active");
       if(ele.innerText === allCard.data-id){
        containerCard.innerHTML = allCard.data-id
       }
    })
    // ele.onclick = function(){
    //     allBtns.forEach(function(e){
    //         e.classList.remove("active");
    //     })
    //     ele.classList.add("active");
    // };   
})


/*countdwon timer*/

//for coding countdown
function countdwon(){
    const countDate = new Date("Nov 30, 2021 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const countdwon = countDate - nowDate;
    
    const second = 1000;
    const minute = second * 60 ;
    const hour = minute * 60;
    const day = hour * 24;
    
    const dayTime = Math.floor( countdwon/day );
    const hourTime = Math.floor( (countdwon % day) / hour );
    const minuteTime = Math.floor( (countdwon % hour) / minute );
    const secondTime = Math.floor( (countdwon % minute )/ second );
    
    //for display countdown
    const dayDisplay = document.querySelector('.day p');
    const hourDisplay = document.querySelector('.hour p');
    const minuteDisplay = document.querySelector('.minute p');
    const secondDisplay = document.querySelector('.second p');
    
    dayDisplay.innerText= dayTime;
    hourDisplay.innerText= hourTime;
    minuteDisplay.innerText= minuteTime;
    secondDisplay.innerText= secondTime;
    
}


setInterval(countdwon,1000);

/*best sell*/

const slides = document.querySelectorAll('.best-sell-slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
})

let counter = 0 ;

nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
})

prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
})

function carousel() {
    if(counter === slides.length){
        counter = 0;
    }
    if(counter< 0 ){
        counter = slides.length - 1;
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter *100}%)`;
    })
}

// pop up user login & search
const sectionLogin = document.querySelector('.login');
const userLogin = document.querySelector('.login-user');
const closeLogin = document.querySelector('.btn-close-modal');
const searchUser = document.querySelector('.search');
const searchBtn = document.querySelector('.search-user');

function openCloseUserLogin(){
    userLogin.addEventListener('click', function(){
        if(userLogin.classList.contains('login-user')){
            sectionLogin.style.display ="block"
        }else{
            sectionLogin.style.display ="none"
        }
    })
    
    closeLogin.addEventListener('click', function(){
        if(closeLogin.classList.contains('btn-close-modal')){
            sectionLogin.style.display ="none"
        }else{
            sectionLogin.style.display ="block"
        }
    })


    searchBtn.addEventListener('click', function(){
       
            searchUser.classList.toggle('toggle-search')
       
    })


}

openCloseUserLogin()