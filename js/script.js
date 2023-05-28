// кнопка "вверх"
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 800) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};


// прокрутка по категориям
const categories = document.querySelectorAll('a[href*="#category"]')

for (let category of categories) {
  category.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = category.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// форматирование даты
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', ];

const monthes = [
'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' 
]

function getDayInfo(date) {
	date = date.split(".").map(i => +i);
	let t = new Date(date[2],--date[1],date[0]);	  
	let Y = t.getFullYear();
	let M = monthes[t.getMonth()];
	let D = t.getDate();
	let d = days[t.getDay()];		
	let weekNum = Math.ceil(D / 7);	
	return `${d}, ${weekNum} неделя ${M} ${Y} года`;
}

cardDates = document.querySelectorAll('.card-date')

for (let cardDate of cardDates) {
  cardDate.textContent = getDayInfo(cardDate.innerText)
}





// модальное окно
const modal = document.getElementById("modal");
const openBtn = document.querySelectorAll(".card-buy");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal () {
  modal.style.display = "flex";
}

for (let btn of openBtn) {
  btn.onclick = openModal
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// переключение темы
const btn = document.querySelector(".theme-button");
const link = document.getElementById("theme-link");

console.log(btn);
console.log(link);

btn.addEventListener("click", function () { сhangeTheme(); });

function сhangeTheme() {
  
  const lightTheme = "./css/style.css";
  const darkTheme = "./css/dark.css";
  
  let currTheme = link.getAttribute("href");
   
  if (currTheme == lightTheme) {
    currTheme = darkTheme;
  }
  else {    
    currTheme = lightTheme;
  }
  
  link.setAttribute("href", currTheme);
}


const burgerButton = document.querySelector(".burger-menu__button");
const burgerMenu = document.querySelector('.burger-menu');

// burgerButton.onclick = function() {
//   burgerMenu.style.display = "block";
// }

burgerButton.addEventListener("click", function () { toggleMenu(); });


function toggleMenu() {

  let currDisplay = window.getComputedStyle(burgerMenu).display;
  console.log(currDisplay);
   
  if (currDisplay == "none") {
    burgerMenu.style.display = "block";
  }
  else {    
    burgerMenu.style.display = "none";
  }
}


