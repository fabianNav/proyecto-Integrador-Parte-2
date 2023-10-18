const switchButton = document.getElementById('switch')

export function cambiarTema() {
    switchButton.addEventListener('click', () => {

        document.body.classList.toggle('white');
        switchButton.classList.toggle('active');

        if (document.body.classList.contains('white')) {
            localStorage.setItem('White-mode', 'true')
        } else {
            localStorage.setItem('White-mode', 'false')
        }

    })

}


if (localStorage.getItem('White-mode') === 'true') {
    document.body.classList.add('white')
    switchButton.classList.add('active')
} else {
    document.body.classList.remove('white')
    switchButton.classList.remove('active')
}