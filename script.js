$(function() {

    // ヒーロースライダー
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    // スクロールでヘッダーのスタイルを変更
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    // スクロールに応じたフェードイン
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
    
    // --- レスポンシブ対応 (ハンバーガーメニュー) ---
    $('.openbtn').on('click', function() {
        $(this).toggleClass('is-active');
        $('.header-nav').toggleClass('is-open');
        $('body').toggleClass('is-nav-open');
    });

    $('.header-nav a').on('click', function() {
        if (window.innerWidth <= 768) {
            $('.openbtn').removeClass('is-active');
            $('.header-nav').removeClass('is-open');
            $('body').removeClass('is-nav-open');
        }
    });

    // --- FAQ アコーディオン ---
    $('.faq-question').on('click', function() {
        $(this).next('.faq-answer').slideToggle(300);
        $(this).parent('.faq-item').toggleClass('is-open');
    });

});