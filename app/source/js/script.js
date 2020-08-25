"use strict";
(function() {
  let goods = document.querySelectorAll('.product__card');

  let subtitleText = {
    default: 'Сказочное заморское явство',
    selected: 'Котэ не одобряет?',
  }

  let aboutText = {
    'default': 'Чего сидишь? Порадуй котэ, <button class="action">купи</button>',
    'fua-gra': 'Печень утки разварная с артишоками.',
    'fish': 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    'chicken': 'Филе из цыплят с трюфелями в бульоне.',
  } 

  function stateToggle(item) {
    let ctaButton = item.parentNode.querySelector('.product__cta');
    item.classList.toggle('product__card--selected');
    item.querySelector('.bage').classList.toggle('bage--selected');

    if (item.classList.contains('product__card--selected')) {
      ctaButton.textContent = aboutText[ctaButton.getAttribute('data-type')];
    } else {
      ctaButton.innerHTML = aboutText['default'];
      standartSubtitle(item)
    }

  }
  function standartSubtitle(subtitle) {
    subtitle.querySelector('.product__subtitle').style.color = '#666666';
    subtitle.querySelector('.product__subtitle').textContent = subtitleText.default;
  }

  function onHoverSubtitle(subtitle) {
    if (subtitle.classList.contains('product__card--selected')) {
      subtitle.querySelector('.product__subtitle').style.color = '#e62e7a';
      subtitle.querySelector('.product__subtitle').textContent = subtitleText.selected;
    } 
  }

  for (let item of goods) {

    if (!(item.classList.contains('product__card--disabled'))) {

      item.addEventListener('click', () => {
        stateToggle(item);
      }); 

      item.addEventListener('mouseenter', () => {
        onHoverSubtitle(item);
      });   

      item.addEventListener('mouseleave', () => {
        standartSubtitle(item)
      });

    }

  }  

  document.addEventListener('click', (evt) => {
    let isTagret = evt.target.classList.contains('action');
    let composed = evt.composedPath();


    if (isTagret) {
      stateToggle(composed[2].querySelector('.product__card'))
    }
  })

})()