const basketModal = document.querySelector('.modal__body');

function toggleStatus(){
  const totalItems = basketModal.children.length;
   console.log(totalItems);
   
};

function calcCardPrice(){
   const cardItems = document.querySelectorAll('.modal-card');
   const totalPriceEl = document.querySelector('.total__total-price');

   let totalPrice = 0;

   cardItems.forEach(function(item){
      
      
      const priceEl = item.querySelector('.best__number');
      const priceNum = parseFloat(priceEl.innerText);

      
      totalPrice += priceNum;
   });

   totalPriceEl.innerText = parseFloat(totalPrice).toFixed(2);
   console.log(totalPriceEl);
   
};

   


window.addEventListener('click', function(event){
   if(event.target.classList.contains('best__button')){
      
      const card = event.target.closest('.best__article');

      const prodactInfo = {
         id: card.dataset.id,
         imgSrc: card.querySelector('.best__image').getAttribute('src'),
         title: card.querySelector('.best__title').innerText,
         price: card.querySelector('.best__number').innerText,
      };
     
      
     
      const cardItemHTML = `
      <article class="modal-card" data-id="${prodactInfo.id}">
                           <div class="card__left">
                              <img src="../image/best/card.png" alt="image">
                              <div class="card__what-todo">
                                 <div class="card__item item-wish">Wishlist</div>
                                 <div class="card__item item-compare">Compare</div>
                                 <div class="card__item item-remove">Remove</div>
                              </div>
                           </div>
                           <div class="card__right">
                              <div class="card__text">
                                 <h4 class="best__title">${prodactInfo.title}</h4>
                                 <div class="card__info">
                                    <p class="card__farm"><span>Farm:</span>Tharamis Farm</p>
                                    <p class="card__farm"><span>Freshness:</span>1 day old</p>
                                 </div>
                              </div>
                              <div class="rating" data-total-value="0">
                                 <div class="rating__item" data-item-value="5">★</div>
                                 <div class="rating__item" data-item-value="4">★</div>
                                 <div class="rating__item" data-item-value="3">★</div>
                                 <div class="rating__item" data-item-value="2">★</div>
                                 <div class="rating__item" data-item-value="1">★</div>
                              </div>
                              <div class="bottom">
                                 <p class="best__number card__price">${prodactInfo.price}</p>
                                 <div class="card__pcs">
                                    <div class="pcs__count">1 Pcs</div>
                                    <select name="Pcs" id="">
                                       <option value="Pcs">Pcs</option>
                                       <option value="Pcs">1</option>
                                       <option value="Pcs">2</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </article>
                        `;

      basketModal.insertAdjacentHTML('beforeend',cardItemHTML );
      
      toggleStatus();
      calcCardPrice();
      
      const removeItem = document.querySelectorAll('.item-remove');
      removeItem.forEach(function(item){
         item.addEventListener('click',function (){
            item.closest('.modal-card').remove();
            
            toggleStatus();
            calcCardPrice();
         });
      });
   };
   
});


