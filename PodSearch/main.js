const btnSwitch = document.querySelector('#switch');

// Load the theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        btnSwitch.classList.add('active');
    }
});

// Toggle the theme and save it to localStorage
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');
    
    if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
});











/* first try (only work with 1 page xd)
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');

});*/
