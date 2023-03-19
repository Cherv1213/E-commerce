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
/*-------------------------------------------------------------------------------------------------*/
const paymentMeth = document.querySelectorAll('.payment__name input');
const paymentBody = document.querySelectorAll('.payment__body');

   paymentMeth.forEach(elem => {
      elem.addEventListener('click', open);
   })

   function open (evt) {
      const tabTarget = evt.currentTarget;
      const payment = tabTarget.dataset.payment;

      paymentMeth.forEach((item) => {
         item.classList.remove('open-payment');
      });

      paymentBody.forEach((item) => {
         item.classList.remove('open-payment');
      });

      document.querySelector(`${payment}`).classList.add('open-payment');
   }