let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const handleClickDecrement = () => {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
};

const handleClickIncrement = () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
}


decrementButton.addEventListener("click", handleClickDecrement);
incrementButton.addEventListener("click", handleClickIncrement);

