const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
const containerEl = document.querySelector(".loading-container");

let idx = 0;

updateNum();

function updateNum() {
    counterEl.innerText = `${idx}%`;
    barEl.style.width = `${idx}%`; 
    
    
    barEl.style.backgroundColor = `rgb(${255 - idx * 2}, ${idx * 2}, 50)`;

    idx++;

    if (idx < 101) {
        setTimeout(updateNum, 20);
    } else {
        setTimeout(() => {
            containerEl.innerHTML = ""; 
            containerEl.innerHTML = `<h2 class="complete-message">🎉 Installation Completed 🎉</h2>`;
        }, 500);
    }
}
