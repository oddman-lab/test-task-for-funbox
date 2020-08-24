"use strict";

let scrollContainer = document.querySelector('.cv__timeline')
let section = scrollContainer.querySelector('.timeline__section');
let milestones = section.querySelectorAll('.timeline__header')
function round(val) {
  return Math.round(val / 10) * 10;
}

scrollContainer.addEventListener('scroll', (evt) => {
	let index = 0;
	let sumHeight = -50;
	let scrollTop = evt.target.scrollTop;

	document.querySelectorAll('.timeline__part').forEach(e=>{
    sumHeight+= e.offsetHeight + 60;
    
	if (sumHeight >= scrollTop) {
		document.querySelector(".cv__list li.active").classList.remove("active");
		document.querySelector(`.cv__list li:nth-child(${index+1})`).classList.add("active");
		return false;
	}
	  index++;
	})
})


let resumeTitle = document.querySelector('.card__title');
let calleble = false;

window.addEventListener('scroll', (evt) => {
  if (this.scrollY > resumeTitle.offsetTop - 600 && !calleble) {
    let options = {
      strings: ['Прошу рассмотртеть мою... ^1000', 'Предлагаю рассмотреть мою кандидатуру на  ^700', 'Htp.vt yf ljk;yjcnm','АААаАаАААа!!!', 'Резюме на должность Junior Frontend Developer.'],
      typeSpeed: 30,
      backSpeed: 10,
      startDelay: 1000,
    };

    let typed = new Typed(resumeTitle, options);

    calleble = true;
    }
});


let projectButton = document.querySelectorAll('.item__button')
let modalWindows = document.querySelectorAll('.modal')
let closeButtons = document.querySelectorAll('.close-modal') 

for (let j = 0; j < projectButton.length; j++) {
  projectButton[j].addEventListener('click', (evt) => {
    modalEventHandler(evt)
  });
}

for (let closeButton of closeButtons) {
  closeButton.addEventListener('click', evt => {
    modalEventHandler(evt)
  })
}

function modalEventHandler(event) {
  let openEvent = event.target.getAttribute('data-modal');
  let closeEvent = event.target.parentNode.parentNode.getAttribute('data-modal');

  for (let modal of modalWindows) {
    if (openEvent === modal.getAttribute('data-modal')) {
      showModal(modal);

      document.addEventListener('keydown', evt => {
        isEscKeycode(evt, modal);
      })
    } 
    if (closeEvent === modal.getAttribute('data-modal')) {
      closeModal(modal);
    }
  }
}

function showModal(modal) {
  modal.classList.remove('hide');
  document.querySelector('.fixed-overlay').classList.remove('visually-hidden');
}

function closeModal(modal) {
  modal.classList.add('hide');
  document.querySelector('.fixed-overlay').classList.add('visually-hidden');
}

let isEscKeycode = (evt, openedModal) => evt.keyCode === 27 ? closeModal(openedModal) : undefined;

/* МОБИЛЬНОЕ МЕНЮ */

let navList = document.querySelector('.navigation__list')
let navigation = navList.querySelectorAll('li:not(.navigation__item--logo)')


function check(flag) {

  navigation.forEach(item => {
    if (!flag) {
      item.classList.add('visually-hidden')
    } else {
      item.classList.remove('visually-hidden')
    }
  })
} 

check(false)

let i = 1;
document.querySelector('.mobile-nav').addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav--transform')
  i++;
  i % 2 === 0 ? check(true) : check(false);
})


document.addEventListener('DOMContentLoaded', (evt) => {
  if (document.documentElement.clientWidth > 600) {
    check(true);
  }
})

document.addEventListener('resize', (evt) => {
  if (document.documentElement.clientWidth > 600) {
    check(true);
  }
})

/*---------- Костыль для отступов на Firefox */

function defineBrowser() {
	let userBrowser = navigator.userAgent;
	
    if (userBrowser.search(/MSIE/) > 0) return 'Internet Explorer';
    if (userBrowser.search(/Firefox/) > 0) return 'Firefox';
    if (userBrowser.search(/Opera/) > 0) return 'Opera';
    if (userBrowser.search(/Chrome/) > 0) return 'Google Chrome';
    if (userBrowser.search(/Safari/) > 0) return 'Safari';

    if (userBrowser.search(/Gecko/) > 0) return 'Gecko';

    return 'Search Bot';
}

if (defineBrowser() === "Firefox") {
  let cardItem = document.querySelectorAll('.card__item');
  document.querySelector('.welcome').style.backgroundColor = '#b885b6';
  document.querySelector('.education').style.backgroundColor = '#272e2f';

  cardItem.forEach(item => {
    item.style.marginLeft = -4 + 'px';
  })
}