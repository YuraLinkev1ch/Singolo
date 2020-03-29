const chevLeft = document.getElementById('slider__arrowPrev');
const chevRight = document.getElementById('slider__arrowNext');
const phonesBlock = document.getElementById('phones');
const iphoneVertical = document.getElementById('iphone-vertical');
const iphoneHorizontal = document.getElementById('iphone-horizontal');
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const firstPhoneButton = document.getElementById('first-phone-button');
const secondPhoneButton = document.getElementById('second-phone-button');

navigation.addEventListener('click', (event)=> {
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('header__link_active'));
    event.target.classList.add('header__link_active');
})

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
       })
    })
}


firstPhoneButton.addEventListener('click', ()=> {
    if(firstScreen.classList.contains('first-black-screen')){
        firstScreen.classList.remove('first-black-screen');
    } else {
        firstScreen.classList.add('first-black-screen');
    }
})

secondPhoneButton.addEventListener('click', ()=> {
    if(secondScreen.classList.contains('second-black-screen')){
        secondScreen.classList.remove('second-black-screen');
    } else {
        secondScreen.classList.add('second-black-screen');
    }
})


/* portfolio buttons */

let imagesNodeList = document.getElementById('portfolioProjects');
let buttonsNodeList = document.getElementById('portfolioButtons');

buttonsNodeList.addEventListener('click', (event) => {
    buttonsNodeList.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    const lastPicture = document.getElementById('portfolioProjects').lastChild;
    imagesNodeList.prepend(lastPicture);
});

const portfolioBlock = document.getElementById('portfolioProjects');

portfolioBlock.addEventListener('click', (event)=> {
    portfolioBlock.querySelectorAll('img').forEach(el => el.classList.remove('activeCurrent'));
    event.target.classList.add('activeCurrent');
    portfolioBlock.classList.remove('activeCurrent');
})

/* form */

const button = document.getElementById('formSubmit');
const mail = document.getElementById('formEmail');
const name = document.getElementById('formName');
const subject = document.getElementById('formSubject');
const textarea = document.getElementById('formTextarea');
const subjectFill = document.getElementById('subjectFill');
const textareaFill = document.getElementById('textareaFill');

function subjectFunc(string) {
    if (string === '') {
        return 'Без темы';
    } else {
        return 'Тема: ' + string;
    }
}

function textareaFunc(string) {
    if (string === '') {
        return 'Без описания';
    } else {
        return 'Описание: ' + string;
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (name.checkValidity() && mail.checkValidity()) {
        subjectFill.innerText = subjectFunc(subject.value.toString());
        textareaFill.innerText = textareaFunc(textarea.value.toString());
        document.getElementById('message-block').classList.remove('hidden');
    }
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    name.value = '';
    mail.value = '';
    subject.value = '';
    textarea.value = '';
    document.getElementById('message-block').classList.add('hidden');
});



/* carousel */

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.slider__arrow-next').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.slider__arrow-prev').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});











































/*





*/


