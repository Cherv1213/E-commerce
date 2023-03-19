const openModal = document.querySelector('.user__basket');
const closeX = document.querySelector('.close-modal');
const modalBody = document.querySelector('.bkg-modal');
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
