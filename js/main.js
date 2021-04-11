(()=>{

	console.log("javascript is linked up");

	const burgerBtn = document.querySelector("#burger"),
			burgerCon = document.querySelector("#burgerCon"),

			aboutBanner = document.querySelectorAll(".aboutBanner");


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		burgerBtn.classList.toggle("expanded");
	}

	function expandText(event) {
		console.log(event);
		let currentBanner = event.target.dataset.about;
		document.querySelector(`#${currentBanner}Text`).style.display = "block";
	}


	burgerBtn.addEventListener("click", hamburgerMenu, false);

	aboutBanner.forEach(banner => banner.addEventListener("click", expandText));



})();