const link = document.querySelector('.link-fruit');

link.addEventListener('click', function(event){
   event.preventDefault();
});

const openModal = document.querySelector('.user__basket');//кнопка открытия модалки
const closeX = document.querySelector('.close-modal'); //кнопка забкрытия внутри модалки
const modalBody = document.querySelector('.bkg-modal');//модалка
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
const tabLink = document.querySelectorAll('.tab-link');
const bodyContent = document.querySelectorAll('.body-content');

tabLink.forEach(function(item){
   item.addEventListener("click", function(){
      let frutBtn = item;
      let frutId = frutBtn.getAttribute("data-tabs");
      let frutTab = document.querySelector(frutId);

      if ( ! frutBtn.classList.contains('active')){
         tabLink.forEach(function(item){
            item.classList.remove('active');
            item.classList.remove('green');
         });
   
         bodyContent.forEach(function(item){
            item.classList.remove('active');
         });
         frutBtn.classList.add('green');
         frutTab.classList.add('active');
         frutBtn.classList.add('active');
      };
      
   });
});
   
 document.querySelector('.tab-link').click();


const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>{
   item.addEventListener('click', () =>{
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
   })
});

/*-------------------------------------------------------------------------------------------------*/
const rangeSlider = document.getElementById('range-slider');

if(rangeSlider){
   noUiSlider.create(rangeSlider, {
      start: [0, 100000],
      connect: true,
      step:1,
      range: {
          'min': [0],
          'max': [100000]
      }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0,input1];

  rangeSlider.noUiSlider.on('update', function(values,handle){
   inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
   let arr = [null,null];
   arr[i] = value;

   rangeSlider.noUiSlider.set(arr)
  };

  inputs.forEach((el, index) => {
   el.addEventListener('change', (e) =>{
      setRangeSlider(index, e.currentTarget.value);
   });
  });
}