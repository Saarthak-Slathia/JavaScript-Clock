// Importing the h1 tag.
let date = document.getElementById('time');

// Defining and updating the time.
setInterval(() => {
    let newtime = new Date();
    let time = new Date().toLocaleString();
    let hours = newtime.getHours();
    let minutes = newtime.getMinutes();
    let seconds = newtime.getSeconds();
    let ftime = `Current Time is ${hours} : ${minutes} : ${seconds}`
    date.innerText = ftime;
}, 1000);

