// Importing the h1 tag.
let date = document.getElementById('time');

// Defining and updating the time by every 1 second.
setInterval(() => {
    let newtime = new Date();
    let time = new Date().toLocaleTimeString();
    date.innerText = `Current time is ${time}`; // Displaying the time on the screen.
}, 1000);

// Our JavaScript part is completed, you can style it further using CSS.

// Our JavaScript Clock is ready !!! 

