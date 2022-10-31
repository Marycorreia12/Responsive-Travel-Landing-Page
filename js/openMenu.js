const btn = document.querySelector('.hamburguer');
const nav = document.querySelector('#menuNav');

btn.addEventListener('click', () => {
    btn.classList.toggle('change');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');

    
});

