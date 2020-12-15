import { container } from "webpack";

let classNames = [
    'container', 
        'nav', 
            'nav-logo', 
            'nav-links', 
                'left-nav-links', 
                    'menu', 
                    'location', 
                'right-nav-links', 
                    'our-story', 
        'page-content', 
            'content-source'
]

classNames.forEach((item) => {
    // create a div and assign classname
    let div = document.createElement('div');
    div.className = `'${item}'`;
    // selectors
    item = document.querySelector(`'.${item}'`);
    console.log(item);
})

const pageLoad = () => {
    console.log('hi');
}

export default pageLoad