const toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.documentElement.classList.add('light')
    } else {
        document.documentElement.classList.remove('light')
    }
});