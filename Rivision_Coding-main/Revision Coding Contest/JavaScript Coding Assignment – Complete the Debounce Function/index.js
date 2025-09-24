
const searchInput = document.getElementById("search");

function debounce(func, delay) {
    let timer;
    
    return function(...args) {
        // Your code here to implement debouncing
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}




searchInput.addEventListener("input", debounce(() => {
    console.log("Searching for:", searchInput.value);
}, 500));
