const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTransitions() {
    //Buttons click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    // sections active class
    allSections.addEventListener('click', (e) => {
        console.log(e.target);
    })
}
// 'this' keyword doesn't exist in arrow functions, which is why there was an error in the arrow function; it was then changed for a usual function
pageTransitions()
