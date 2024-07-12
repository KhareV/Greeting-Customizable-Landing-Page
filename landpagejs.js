document.addEventListener('DOMContentLoaded', function () {
    let timer = document.querySelector('.timer');
    let nameElement = document.getElementById('name');
    let focusElement = document.getElementById('focus');
    let timeElement = document.getElementById('time');

    const intv = setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        let ampm = hours >= 12 ? 'PM' : 'AM';
        let displayHours = hours % 12;
        displayHours = displayHours ? displayHours : 12; // the hour '0' should be '12'

        timer.innerHTML = `${displayHours} : ${minutes} : ${seconds} ${ampm}`;

    }, 1000);

    function setGreeting() {
        let hours = new Date().getHours();
        let greeting = 'Morning';

        if (hours >= 12 && hours < 18) {
            greeting = 'Afternoon';
        } else if (hours >= 18) {
            greeting = 'Evening';
        }

        timeElement.textContent = greeting;
    }

    function getName() {
        if (localStorage.getItem('name') === null) {
            nameElement.textContent = '[Enter Name]';
        } else {
            nameElement.textContent = localStorage.getItem('name');
        }
    }

    function setName(e) {
        if (e.type === 'keypress') {
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('name', e.target.innerText);
                nameElement.blur();
            }
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }

    function getFocus() {
        if (localStorage.getItem('focus') === null) {
            focusElement.textContent = '[Enter Focus]';
        } else {
            focusElement.textContent = localStorage.getItem('focus');
        }
    }

    function setFocus(e) {
        if (e.type === 'keypress') {
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('focus', e.target.innerText);
                focusElement.blur();
            }
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }

    nameElement.addEventListener('keypress', setName);
    nameElement.addEventListener('blur', setName);
    focusElement.addEventListener('keypress', setFocus);
    focusElement.addEventListener('blur', setFocus);

    setGreeting();
    getName();
    getFocus();
});
