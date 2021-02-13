// -------Auto_head------

var typed5 = new Typed(".type1", {
    strings: [
        "This is not just a restaurant....",
         "This is your second home...."
            ],
    typeSpeed: 20,
    backSpeed: 90,
    cursorChar: '_',
    shuffle: true,
    backDelay: 2000,
    smartBackspace: false,
    loop: true



    
  });
  
// *****************************************
// ---------------Jqeury-----------

//   ---------NAVBAR-FIXED---`
$(document).ready(function(){
    const line=document.querySelector('.line');
    $(window).scroll(()=>{
        if ($(window).scrollTop()>=$('.services').offset().top-600){
            $('.nav-bar').addClass('up');
        } else {$('.nav-bar').removeClass('up');}
    })
    $(window).scroll(()=>{
       
        if ($(window).scrollTop()>=$('.services').offset().top-200){
            $('.nav-bar').addClass('fixed');
            // $('.nav-bar').removeClass('up');
        } else {
            // $('.nav-bar').removeClass('up');
            $('.nav-bar').removeClass('fixed');
               
    }
    })
    $(window).scroll(()=>{
        // let navList=;
        if ($(window).scrollTop()>=$('.services').offset().top-200){
            
            $('.nav_list_item').removeClass('current-sec');
            $('.nav_list_item').eq(0).addClass('current-sec');
            $('.line').removeClass('width-100 width-40 width-80');
            $('.line').addClass('width-20');
        } 
        if ($(window).scrollTop()<$('.services').offset().top){
            $('.nav_list_item').removeClass('current-sec');
            $('.line').removeClass('width-20 width-40 width-80 width-100');
        }
        if ($(window).scrollTop()>=$('.meals_section').offset().top){
            // console.log(2);
            $('.line').removeClass('width-20 width-100 width-80');
            $('.line').addClass('width-40');
            $('.nav_list_item').removeClass('current-sec');
            $('.nav_list_item').eq(1).addClass('current-sec');
        }
        
    })

    // ---location-section---
        $(window).scroll(()=>{
            if ($(window).scrollTop()>=$('.locations_section').offset().top-300){
                $('.line').removeClass('width-20 width-40 width-100');
                $('.line').addClass('width-80');
                $('.nav_list_item').removeClass('current-sec');
                $('.nav_list_item').eq(2).addClass('current-sec');
                const locations=document.querySelectorAll('.location');
                locations.forEach(location=>{
                    location.classList.remove('opacity-0');
                })
            }
            if($(window).scrollTop()<$('.locations_section').offset().top-500){
                const locations=document.querySelectorAll('.location');
                locations.forEach(location=>{
                    location.classList.add('opacity-0');
                })
            }
            if ($(window).scrollTop()>=$('.form_section').offset().top-300){
                
                $('.line').removeClass('width-20 width-40 width-80');
                $('.line').addClass('width-100');
                $('.nav_list_item').removeClass('current-sec');
                $('.nav_list_item').eq(3).addClass('current-sec');
            }

        })


})

// ********************************************************************************************
// ---------SELECTORS-------------


const services=document.querySelectorAll('.service');
const p=document.querySelectorAll('.service p');
const titles=document.querySelectorAll('.service .service_title');
const icons=document.querySelectorAll('.service_title i');
const navList2=document.querySelectorAll('.nav_list_item a')[1];
const recept=document.querySelector('.new');
const mealsF9=document.querySelectorAll('.first-row-900');
const mealsS9=document.querySelectorAll('.second-row-900');
const paraF9=document.querySelectorAll('.first-row-900 p');
const paraS9=document.querySelectorAll('.second-row-900 p');
const mealsF45=document.querySelectorAll('.first-row-450');
const mealsS45=document.querySelectorAll('.second-row-450');
const mealsTh45=document.querySelectorAll('.third-row-450');
const paraF45=document.querySelectorAll('.first-row-450 p');
const paraS45=document.querySelectorAll('.second-row-450 p');
const paraTh45=document.querySelectorAll('.third-row-450 p');
const nav=document.querySelector('.nav-bar');
const inputs=document.querySelectorAll('.input');
const labels= document.querySelectorAll('.label');
const line=document.querySelector('.line');
const navButtons=document.querySelector('.nav_buttons');
const btnOpen=document.querySelector('.nav_btn_open');
const btnClose=document.querySelector('.nav_btn_close');
const navUl=document.querySelector('.nav-bar ul');


// ********************************************************************************

// ---------SERVICES-SECTION-----------------


services.forEach((service, idx)=>{
    service.addEventListener('mouseover', ()=>{
        // p[idx].style.color='red';
        titles[idx].style.transform='translateX(40px)';
        icons[idx].style.transition='transform 0.4s ease, opacity 0.4s ease 0.2s';
        icons[idx].style.transform='translateX(-40px) translateY(30px)';
        icons[idx].style.opacity=1;
       
        console.log(idx);
    })
    service.addEventListener('mouseout', ()=>{
        p[idx].style.color='white';
        titles[idx].style.transform='translateX(0px)';
        icons[idx].style.transition='transform 0.4s ease, opacity 0.1s ease';
        icons[idx].style.transform='translateX(-50px) translateY(-50px)';
        icons[idx].style.opacity=0;
        
    })
})



// **************************************
// ------NAV-BUTTONS--------

btnOpen.addEventListener('click', ()=>{
    navButtons.style.transform='translateX(75px) translateY(-75px) rotate(180deg)';
    navUl.classList.add('flex-display');
})
btnClose.addEventListener('click', ()=>{
    navButtons.style.transform='translateX(75px) translateY(-75px)';
    navUl.classList.remove('flex-display')
})
navList2.addEventListener('mouseover', ()=>{
    recept.classList.add('new2');
})
navList2.addEventListener('mouseout', ()=>{
    recept.classList.remove('new2');
})
recept.addEventListener('mouseover', ()=>{
    recept.classList.add('new2');
})
recept.addEventListener('mouseout', ()=>{
    recept.classList.remove('new2');
})

// **************************************************
// ------MEALS-SECTION------------

// ----------MinWidth-900px-------
mealsF9.forEach((meal,idx)=>{
    meal.addEventListener('mouseover',()=>{
        paraF9[idx].classList.add('first-para-900');
    })
    meal.addEventListener('mouseout',()=>{
        paraF9[idx].classList.remove('first-para-900');
       })
})
mealsS9.forEach((meal,idx)=>{
    meal.addEventListener('mouseover',()=>{
        paraS9[idx].classList.add('second-para-900');
       })
    meal.addEventListener('mouseout',()=>{
        paraS9[idx].classList.remove('second-para-900');
        })
})

// ----MinWidth-450-------
mealsF45.forEach((meal,idx)=>{
    meal.addEventListener('mouseover',()=>{
        paraF45[idx].classList.add('first-para-450');})
    meal.addEventListener('mouseout',()=>{
        paraF45[idx].classList.remove('first-para-450');})
})
mealsS45.forEach((meal,idx)=>{
    if (meal==mealsS45[0]){
        meal.addEventListener('mouseover',()=>{
                paraS45[idx].classList.add('second-para-450-1');})
        meal.addEventListener('mouseout',()=>{
                paraS45[idx].classList.remove('second-para-450-1');})
    } else {
        meal.addEventListener('mouseover',()=>{
            paraS45[idx].classList.add('second-para-450-2');})
        meal.addEventListener('mouseout',()=>{
            paraS45[idx].classList.remove('second-para-450-2');})
    }
    
})
mealsTh45.forEach((meal,idx)=>{
    meal.addEventListener('mouseover',()=>{
        paraTh45[idx].classList.add('third-para-450');})
    meal.addEventListener('mouseout',()=>{
        paraTh45[idx].classList.remove('third-para-450');})
})



// ****************************************

