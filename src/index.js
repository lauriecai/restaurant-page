import loadPage from './modules/page-load';
import loadMenu from './modules/menu';
import loadLocation from './modules/location';
import loadStory from './modules/our-story';

initialize();

function initialize() {
    loadPage();
    addNavEvents();
}

function addNavEvents() {
    const menuButton = document.querySelector('.menu');
    const locationButton = document.querySelector('.location');
    const ourStoryButton = document.querySelector('.our-story');

    menuButton.addEventListener('click', loadMenu);
    locationButton.addEventListener('click', loadLocation);
    ourStoryButton.addEventListener('click', loadStory);
}