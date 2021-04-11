(()=>{

	console.log("javascript is linked up");

	const burgerBtn = document.querySelector("#burger"),
			burgerCon = document.querySelector("#burgerCon"),

			aboutBanner = document.querySelectorAll(".aboutBanner"),

			sliderControl = document.querySelector("#sliderControl"),
			promoImg = document.querySelector("#promoImg"),
			productName = document.querySelector("#productText h2"),
			productDesc = document.querySelector("#productText p");

	const productContent = [
		[`Premium Beer`, `The classic taste of CoorS is only for you. Best served when refrigerated, or added ice into beer. 330mL 4.2%ALC/VOL.`],
		[`6-Pack Beer`, `pack beer intro`],
		[`Membership Card`, `member card intro`],
		[`Tote Bag`, `bag intro`],
		[`CoorS T-shirt`, `t-shirt intro`]
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
		let multiplier = event.target.dataset.offset;
		if (event.target.style.width="40px") {			
			offsetWidth = 262; 
			profileImages.style.right = `${multiplier * offsetWidth}px`;
		}

		else {
			offsetWidth = 450; 
			profileImages.style.right = `${multiplier * offsetWidth}px`;
		}
	}

	function setProductData(name, desc) {
		productName.textContent = name;
		productDesc.textContent = text;
	}

	function changeText(event) {
	setMemberData(productContent[event.target.dataset.offset][0],
					productContent[event.target.dataset.offset][1]);
	}


	burgerBtn.addEventListener("click", hamburgerMenu, false);

	aboutBanner.forEach(banner => banner.addEventListener("click", expandText));

	sliderControl.forEach(icon => icon.addEventListener("click", slideBanner));
	sliderControl.forEach(icon => icon.addEventListener("click", changeText));



})();