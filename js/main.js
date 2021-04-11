(()=>{

	console.log("javascript is linked up");

	const burgerBtn = document.querySelector("#burger"),
			burgerCon = document.querySelector("#burgerCon"),

			aboutBanner = document.querySelectorAll(".aboutBanner"),

			sliderIcon = document.querySelectorAll(".sliderIcon"),
			promoImg = document.querySelector("#promoImg"),
			productName = document.querySelector("#productText h2"),
			productDesc = document.querySelector("#productText p"),

			playList = document.querySelectorAll(".playList"),
			videoPlayer = document.querySelector("#promoAd video");

	const productContent = [
		[`Premium Beer`, `The classic taste of CoorS is only for you. Best served when refrigerated, or added ice into beer. 330mL 4.2%ALC/VOL.`],
		[`6-Pack Beer`, `If you want to share CoorS beer with your friends, the 6-pack will be a great choice. 330mL 4.2%ALC/VOL. each.`],
		[`Membership Card`, `Joining CoorS community is more than just for discount. We also offer a custom fitness plan for you to enjoy sports with beer!`],
		[`Tote Bag`, `Whenever we purchase at the counter, using an environment-friendly tote bag is always a responsible choice to reduce plastics.`],
		[`CoorS T-shirt`, `Wearing a CoorS brand T-shirt is designed for outdoor sports. Lightweight and breathable, it helps you to get away from sweaty clothes.`]
	];


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		burgerBtn.classList.toggle("expanded");
	}

	function expandText(event) {
		console.log(event);
		let currentBanner = event.target.dataset.about;
		document.querySelector(`#${currentBanner}Text`).style.display = "block";
	}

	function slideBanner(event) {
		console.log(event);
		let multiplier = event.target.dataset.offset;
		let offsetWidth = 554;
		promoImg.style.right = `${multiplier * offsetWidth}px`;
	}

	function setProductData(name, desc) {
		productName.textContent = name;
		productDesc.textContent = desc;
	}

	function changeText(event) {
	setProductData(productContent[event.target.dataset.offset][0],
					productContent[event.target.dataset.offset][1]);
	}

	function changeVideo(event) {
		videoPlayer.src = `video/video-${event.target.dataset.videoref}.mp4`;
		videoPlayer.play();
	}


	burgerBtn.addEventListener("click", hamburgerMenu, false);

	aboutBanner.forEach(banner => banner.addEventListener("click", expandText));

	sliderIcon.forEach(icon => icon.addEventListener("click", slideBanner));
	sliderIcon.forEach(icon => icon.addEventListener("click", changeText));

	playList.forEach(selector => selector.addEventListener("click", changeVideo));



})();