const link = document.querySelector('.middle__image');
link.addEventListener('click', function(event){
   event.preventDefault();
});
/*-------------------------------------------------------------------------------------------------*/
const openModal = document.querySelector('.user__basket');
const modalBody = document.querySelector('.bkg-modal');
const closeX = document.querySelector('.close-modal'); 
const basket = document.querySelector('.basket-modal');
 openClose();
    function openClose(){
          openModal.addEventListener('click',function(e){
             modalBody.classList.add('open');
             
          });
          closeX.addEventListener('click',function(e){
              modalBody.classList.remove('open');
          });
          
          modalBody.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(basket);
           if(!click){
            modalBody.classList.remove('open');
           }
          })
    };

    function contentTabs (item1, item2) {
      item1.forEach(function(item){
         item.addEventListener("click", function(){
            let mainBtn = item;
            let mainId = mainBtn.getAttribute("data-tab");
            let mainTab = document.querySelector(mainId);
      
            if ( ! mainBtn.classList.contains('active')){
               item1.forEach(function(item){
                  item.classList.remove('active');
               });
         
               item2.forEach(function(item){
                  item.classList.remove('active');
               });
         
               mainTab.classList.add('active');
               mainBtn.classList.add('active');
            };
            
         });
      });
   }
/*-------------------------------------------------------------------------------------------------*/
const headerItem = document.querySelectorAll('.tab__item');
const mainContent = document.querySelectorAll('.tab-content');

contentTabs(headerItem,mainContent);
document.querySelector('.tab__item').click();

/*-------------------------------------------------------------------------------------------------*/
const tabsBtn = document.querySelectorAll('.menu__tab');
const tabsItems = document.querySelectorAll('.body__tabs');

contentTabs(tabsBtn,tabsItems)
document.querySelector('.menu__tab').click();

/*-------------------------------------------------------------------------------------------------*/
const secondItem = document.querySelectorAll('.second');
const secondContent = document.querySelectorAll('.second-body');

contentTabs(secondItem,secondContent)
document.querySelector('.second').click();
/*-------------------------------------------------------------------------------------------------*/

new Swiper('.customers-swiper',{
   loop: true,
   
   spaceBetween:32,
   speed:500,

    breakpoints:{
       1000:{
         slidesPerView:3.5,
         centeredSlides: true,
       },
       500:{
         slidesPerView:2,
       },
       320:{
         slidesPerView:1,
       },
    },
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

      simulateTouch: true,
      grabCursore: true,

     keyboard:{
      enable: true,
       onlyinViewport: true,
     },

      autoplay:{
        delay:2000,

        disableOnInteraction: false,
      },

     watchOverflow: true,
});


const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>{
   item.addEventListener('click', () =>{
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
   })
});
