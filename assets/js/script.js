//fonction pour le scroll de la navbar en haut de page
$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 80) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}
		if (this.scrollY > 500) {
			$(".scroll-up-btn").addClass("show");
		} else {
			$(".scroll-up-btn").removeClass("show");
		}
	});


	/* Effet Typing animation (texte animation effet machine à écrire) */
	var typed = new Typed(".home-typing", {
		strings: ["Développeur Web Junior", "Développeur Web Mobile", "Développeur Front-End", "Développeur Back-End", "Développeur Full-Stack"],
		typeSpeed: 100,
		backSpeed: 50,
		loop: true
	});

	var typed = new Typed(".about-typing", {
		strings: ["ambitieux", "curieux", "efficace", "patient", "travailleur", "créatif"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	/* slide-up */
	$(".scroll-up-btn").click(function () {
		$("html").animate({
			scrollTop: 0
		});
	});
	/* Toggle Menu/ NavBar Script */
	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});
	$(".navbar .menu li a").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});


	/* Carousel des projets principaux */
	$(".carousel").owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 1200,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			},
		},
	});
});


$(function () {
	// Badge de compétence qui tourne au survol
	var $badges = $(".amg-badge img");
	function rotateBadge(passedBadge, speed) {
		var rotateSpeed = speed / 180,
			current = 0;
		function badgeRotation(passedBadge) {
			current = (current == 90) ? 271 : current + 1;
			passedBadge.css({
				"-webkit-transform": "rotate3d(0,1,0," + current + "deg)",
				"-moz-transform": "rotate3d(0,1,0," + current + "deg)",
				"transform": "rotate3d(0,1,0," + current + "deg)"
			});
			if (current == 360) {
				clearInterval(rotateInterval);
				passedBadge.removeAttr('style').removeClass('spinning');
			}
		}
		var rotateInterval = setInterval(function () {
			badgeRotation(passedBadge)
		}, rotateSpeed);
	}
	$badges.mouseenter(function () {
		if ($(this).hasClass('spinning')) {
			return false;
		} else {
			rotateBadge($(this), 500);
			$(this).addClass('spinning');
		}
	});
});