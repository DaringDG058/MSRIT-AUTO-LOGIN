// Change the Values -
const myUSN = '1MS2XXX000'; 
const myDay = 'DD ';    // Keep the space!
const myMonth = 'MM';  
const myYear = 'YYYY';

function simulateInput(element, value) {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
}

function handlePageLogic() {
    const u = document.getElementById('username');
    const loginBtn = document.querySelector('.cn-login-btn');

    if (u && loginBtn && u.value === "") {
        simulateInput(u, myUSN);
        simulateInput(document.getElementById('dd'), myDay);
        simulateInput(document.getElementById('mm'), myMonth);
        simulateInput(document.getElementById('yyyy'), myYear);

        if (typeof putdate === "function") putdate();
        
        console.log("Logging in...");
        loginBtn.click();
    }
    const buttons = document.querySelectorAll('button, a, input[type="button"]');
    buttons.forEach(btn => {
        if (btn.innerText.trim().toUpperCase() === "CLOSE") {
            console.log("Closing the attendance warning popup...");
            btn.click();
        }
    });
}


const mainInterval = setInterval(handlePageLogic, 500);
