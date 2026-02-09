/* ⏳ TEMPORIZADOR */
const targetDate = new Date("2026-02-09T00:00:00").getTime();

const countdown = document.getElementById("countdown");
const countdownContainer = document.getElementById("countdown-container");
const content = document.getElementById("valentine-content");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        countdownContainer.style.display = "none";
        content.style.display = "block";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const m = Math.floor((distance / (1000 * 60)) % 60);
    const s = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `${d} días 💖 ${h} h 💘 ${m} m 💝 ${s} s`;
}, 1000);

/* 💌 ANIMACIONES */
$(document).ready(function () {

    $('#card').css({
        display: 'none',
        opacity: 0,
        transform: 'scale(0.1)'
    });

    $('.valentines-day').on('click', function () {

        $(this).css('pointer-events', 'none');

        $('.envelope').css({
            animation: 'fall 3s linear 1'
        });

        $('.envelope').fadeOut(800, function () {

            $('.heart, .text, .front').fadeOut(300);

            $('#card')
                .css('display', 'flex')
                .animate({ opacity: 1 }, {
                    duration: 1000,
                    step: function (now) {
                        let scale = 1 + Math.sin(now * Math.PI) * 0.08;
                        $(this).css('transform', 'scale(' + scale + ')');
                    }
                });
        });
    });
});
