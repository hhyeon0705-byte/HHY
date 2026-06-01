// DOMContentLoaded: HTML 문서가 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
    (function () {
        var y = document.getElementById('year');
        if (y) { y.textContent = new Date().getFullYear(); }
    })();

    // 2. 화면 전환용 '집 모양' 오버레이 생성 (HTML에 자동 삽입)
    const overlay = document.createElement('div');
    overlay.className = 'house-transition-overlay';
    // 크고 귀여운 꽉 찬 하얀 집 SVG 아이콘
    overlay.innerHTML = '<svg class="house-icon" viewBox="0 0 24 24" fill="white"><path d="M12 3L2 12h3v8h14v-8h3L12 3z"/></svg>';
    document.body.appendChild(overlay);

    // 3. 페이지가 열릴 때 오버레이가 위로 걷어지며 화면이 나타나는 효과
    // 약간의 딜레이를 주어야 브라우저가 애니메이션을 인식합니다.
    setTimeout(function() {
        overlay.classList.add('leaving');
    }, 50);

    // 4. 메뉴(Nav) 링크 클릭 시 화면 전환 효과 적용
    const links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetUrl = this.href;
            
            // 현재 페이지와 주소가 같거나, 새 창 열기(target="_blank")면 애니메이션 생략
            if (targetUrl === window.location.href || this.target === '_blank') return;

            // 링크 즉시 이동을 막음
            e.preventDefault(); 
            
            // 오버레이가 아래에서 올라와 화면을 덮음
            overlay.classList.remove('leaving');
            overlay.classList.add('active');

            // 애니메이션 시간(0.6초)이 끝난 후 실제 주소로 이동
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 600);
        });
    });

    // -----------------------------------------------------
    // 기존 요소별 통통 튀는 애니메이션 효과들 유지
    // -----------------------------------------------------
    const container = document.querySelector('.container');
    if(container) {
        container.classList.add('anim-slide-up');
    }

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
