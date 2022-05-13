const closeAboutSection = () => {
    let aboutSection = document.getElementsByClassName('about')[0];
    aboutSection.style.display = 'none';
}

document.getElementsByClassName('menu-btn')[2].addEventListener('click', () => {
    let aboutSection = document.getElementsByClassName('about')[0];
    aboutSection.style.display = aboutSection.style.display == 'block' ? 'none' : 'block';
} );