if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

let count = () => {
    let counter = localStorage.getItem('counter')
    counter++
    document.querySelector("h2").innerHTML = counter;
    localStorage.setItem('counter', counter)

    if (counter % 5 === 0) {
        alert(`Count is now ${counter}`)
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h2').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count;

})
