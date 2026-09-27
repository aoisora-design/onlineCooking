const fixedHeader = document.querySelector('.fixed-header');
const kv = document.querySelector('.kv');

window.addEventListener('scroll', () => {
    if (window.scrollY > kv.offsetHeight) {
        fixedHeader.classList.add('is-show');
    } else {
        fixedHeader.classList.remove('is-show');
    }
});
