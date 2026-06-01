// DOMContentLoaded: HTML 문서가 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
 
    (function () {
        var y = document.getElementById('year');
        if (y) { y.textContent = new Date().getFullYear(); }
    })();

  
    const overlay = document.createElement('div');
    overlay.className = 'house-transition-overlay';

    overlay.innerHTML = '<svg class="house-icon" viewBox="0 0 24 24" fill="white"><path d="M12 3L2 12h3v8h14v-8h3L12 3z"/></svg>';
    document.body.appendChild(overlay);

 
    setTimeout(function() {
        overlay.classList.add('leaving');
    }, 50);


    const links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetUrl = this.href;
            
            
            if (targetUrl === window.location.href || this.target === '_blank') return;

     
            e.preventDefault(); 
            
       
            overlay.classList.remove('leaving');
            overlay.classList.add('active');

     
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 600);
        });
    });

   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.classList.remove('anim-bounce');
            void this.offsetWidth; 
            this.classList.add('anim-bounce');
        });
    });

    const headerTitle = document.querySelector('header h1');
    if(headerTitle) {
        headerTitle.addEventListener('mouseenter', function() {
            this.classList.add('anim-bounce');
        });
        headerTitle.addEventListener('animationend', function() {
            this.classList.remove('anim-bounce');
        });
    }
});
