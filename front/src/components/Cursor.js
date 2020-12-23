function Cursor () {
    
    // DOM elements
    const links = document.querySelectorAll('a');
    const cursor = document.querySelector('.cursor');
    const bubble = document.querySelector('.bubble');

    // 
    let bubbleX = window.innerWidth / 2;
    let bubbleY = window.innerHeight / 2;

    // Cursor is hovering one link ?
    let isHovering = false;

    // Last cursor coordinates
    let cursorCoords = {x: 0, y: 0};

    const moveCursor = e => {
        const { clientX: x, clientY: y } = e;

        cursor.style.transitionProperty = "";
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

        return {x, y};
    };

    const moveBubble = () => {
        if (!isHovering) {
            bubbleX += (cursorCoords.x - bubbleX) * 0.15;
            bubbleY += (cursorCoords.y - bubbleY) * 0.15;
    
            bubble.style.left = bubbleX + 'px';
            bubble.style.top = bubbleY + 'px';
        }
        requestAnimationFrame(moveBubble);
    };

    const moveLink = function (e) {
        if (e.target.querySelector('span') !== null) {
            const span = e.target.querySelector('span');
            
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = e.target,
            
            xMove = (x - (width / 2)) * 0.3,
            yMove = (y - (height / 2)) * 0.3;
            
            span.style.transform = `translate(0, 20%) translate(${xMove}px, ${yMove}px)`;
            
            if (e.type === 'mouseleave') {
                span.style.transform = '';
                isHovering = false;
            };
        }
    };

    const magneticBubble = e => {
        const x = e.target.getBoundingClientRect().left;
        const y = e.target.getBoundingClientRect().top;
        const width = e.target.offsetWidth;
        const height = e.target.offsetHeight;

        bubble.style.transform = `translate(-50%, -50%) scale(${width/40})`;
        
        bubbleX = x + (width / 2);
        bubbleY = y + (height / 2);
        
        bubble.style.left = bubbleX + 'px';
        bubble.style.top = bubbleY + 'px';
    };
    
    // Cursor updates top left positions each time mouse is moving
    document.addEventListener('mousemove', e => cursorCoords = moveCursor(e));

    // Bubble updates top left positions on each frame to follow cursor
    moveBubble();

    // Triggers enter and leave events for each link on the page
    links.forEach(link => {
        link.addEventListener('mouseover', (e) => {
            isHovering = true;
            e.target.classList.add('hover');
            bubble.style.transitionProperty = "transform, top, left";
            bubble.classList.add('onLink');
            magneticBubble(e);
        });
        link.addEventListener('mouseleave', (e) => {
            isHovering = false;
            e.target.classList.remove('hover');
            setTimeout(() => {
                bubble.style.transitionProperty = "";
            }, 100);
            bubble.style.transform = "";
            bubble.classList.remove('onLink');
        });
    });

    links.forEach(link => link.addEventListener('mouseleave', moveLink));
    links.forEach(link => link.addEventListener('mousemove', moveLink));

};

export default Cursor;
