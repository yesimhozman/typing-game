const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let wordQueue;
let highlightPosition;
function startGame() {
    console.log("Game started!");

    let quoteText = "type me"; // <span>type</span><span>me</span>
    wordQueue = quoteText.split(' '); // ["type", "me"]
    quote.innerHTML = wordQueue.map(word => `<span>${word}</span>`).join('');

    highlightPosition = 0;
    quote.childNodes[highlightPosition].className = 'highlight';
   
}

function checkInput() {
    const currentWord = wordQueue[0];
    const typedValue = input.value.trim();
    if (currentWord !== typedValue) {
        input.className = currentWord.startsWith(typedValue) ? '' : 'error';
        return;
    }
    wordQueue.shift(); //remove the first element from the array
    input.value = ""; // empty textbox

    quote.childNodes[highlightPosition].className = '';
    highlightPosition++;
    quote.childNodes[highlightPosition].className = 'highlight';
}


start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);