(()=>{

	console.log("javascript is linked up");

	const burgerBtn = document.querySelector("#burger"),
			burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		burgerBtn.classList.toggle("expanded");
	}

	burgerBtn.addEventListener("click", hamburgerMenu, false);



})();