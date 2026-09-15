const menuEl = document.querySelector('.fa-bars');
 const closeEl = document.querySelector('.fa-close');
 const 
 mobileContainerEl = document.querySelector(
 '.mobile-icon-container'
 );
 const slideUpEL=document.querySelectorAll('.slideUp');
 console.log(slideUpEL);
 const slideLeft=document.querySelectorAll('.slideLeft')
 const slideRight=document.querySelectorAll('.slideRight')
 


 const observer= new IntersectionObserver((entries)=>{
    entries.forEach((el)=>{
        if(el.isIntersecting){
        if(el.target.classList.contains('slideUp')){
            el.target.classList.add('show');
        } 
        if(el.target.classList.contains('slideLeft')){
            el.target.classList.add('showLeft')
        }
         if(el.target.classList.contains('slideRight')){
            el.target.classList.add('showRight')
        }      
        }
        else{
            el.target.classList.remove('show');
            el.target.classList.remove('showLeft');
              el.target.classList.remove('showRight');
        }
    })
 })
 slideUpEL.forEach((el)=>{
    observer.observe(el)
 })
 slideLeft.forEach((el)=>{
    observer.observe(el)
 })
 slideRight.forEach((el)=>{
    observer.observe(el)
 })

 menuEl.addEventListener('click', ()=>{
 mobileContainerEl.classList.add('active')
 });
 closeEl.addEventListener('click', ()=>{mobileContainerEl.classList.remove('active');
 })
