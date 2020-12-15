function loadPage() {
    const content = document.querySelector('.content');

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = 
    `
    <div class="nav">
        <div class="nav-logo">ICHIRAN RAMEN</div>
        <div class="nav-links">
            <div class="left-nav-links">
                <a href="#" class="menu">MENU</a>
                <a href="#" class="location">LOCATION</a>
            </div>
            <div class="right-nav-links">
                <a href="#" class="our-story">OUR STORY</a>
            </div>
        </div>
    </div>
    <div class="page-content">
        <h2 class="content-source">WELCOME!</h2>
    </div>
    `;
    
    content.appendChild(container);
}

export default loadPage;