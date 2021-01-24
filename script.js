// Importing the h1 tag.
let date = document.getElementById('time');

// Defining and updating the time.
setInterval(() => {
    let newtime = new Date();
    let time = new Date().toLocaleTimeString();
    date.innerText = `Current time is ${time}`;
}, 1000);




