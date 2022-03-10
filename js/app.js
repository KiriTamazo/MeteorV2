$(document).ready(function () {
	$(window).on("load", function () {
		$(".loader-container").fadeOut(500, function () {
			$(this).remove();
		});
	});

	// Navbar
	$(".navbar-toggler").click(function () {
		$(".navbar-toggler").hasClass("collapsed")
			? $(".toggler-icon").removeClass("fa-times")
			: $(".toggler-icon").addClass("fa-times");
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		scroll >= 100
			? $(".navbar").addClass("transparent")
			: $(".navbar").removeClass("transparent");

		scroll >= 100
			? $(".up-arrow").addClass("show")
			: $(".up-arrow").removeClass("show");
	});

	// Active nav
	function setActive(current) {
		$(".nav-link").removeClass("actives");
		$(`.nav-link[href='#${current}']`).addClass("actives");
	}
	function navScroll() {
		let currentSection = $("section[id]");
		currentSection.waypoint(
			function (direction) {
				if (direction == "down") {
					let currentSectionId = $(this.element).attr("id");
					setActive(currentSectionId);
				}
			},
			{
				offset: "50px",
			}
		);
		currentSection.waypoint(
			function (direction) {
				if (direction == "up") {
					let currentSectionId = $(this.element).attr("id");
					setActive(currentSectionId);
				}
			},
			{
				offset: "-600px",
			}
		);
	}
	navScroll();
	/* =============Dark light Theme============= */
	const themeButton = document.getElementById("theme-button");
	const darkTheme = "dark-theme";
	const iconTheme = "fa-sun";

	// Previously selected topic (if user selected)
	const selectedTheme = localStorage.getItem("selected-theme");
	const selectedIcon = localStorage.getItem("selected-icon");

	// We obtain the current theme that the interface has by validating the dark-theme class
	const getCurrentTheme = () =>
		document.body.classList.contains(darkTheme) ? "dark" : "light";
	const getCurrentIcon = () =>
		themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

	// We validate if the user previously chose a topic
	if (selectedTheme) {
		// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
		document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
			darkTheme
		);
		themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
			iconTheme
		);
	}

	// Activate / deactivate the theme manually with the button
	themeButton.addEventListener("click", (e) => {
		// Add or remove the dark / icon theme
		document.body.classList.toggle(darkTheme);
		themeButton.classList.toggle(iconTheme);
		// We save the theme and the current icon that the user chose
		localStorage.setItem("selected-theme", getCurrentTheme());
		localStorage.setItem("selected-icon", getCurrentIcon());
	});


	// OwlCarousel
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				item: 2,
			},
		},
	});
	$("#testimonial").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: false,
		margin: 10,
		dots: true,
		// animateOut: 'slideOutDown',
		// animateIn: 'flipInX',
	});

	// Skills

	$("#progress-bars").waypoint(
		function () {
			$(".progress-bar").each(function () {
				$(this).animate(
					{
						width: $(this).attr("aria-valuenow") + "%",
					},
					1000
				);
			});
			this.destroy();
		},
		{
			offset: "bottom-in-view",
		}
	);

	// Tab
	$("#tab").responsiveTabs({
		animation: "slide",
		startCollapsed: "tabs",
	});
	AOS.init({
		offset: 100,
		easing: 'linear',
		delay: 80,
		disable: 'mobile'
	  });
});
