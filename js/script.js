		var btn = document.querySelector(".search-btn");
		var popup = document.querySelector(".search-form");
		var form = popup.querySelector("form");
		var checkin = popup.querySelector("#check-in");
		var checkout = popup.querySelector("#check-out");
		var adults = popup.querySelector("#adults");
		var kids = popup.querySelector("#kids");
		var storageAdults = localStorage.getItem("adults");
		var storageKids = localStorage.getItem("kids");
		btn.addEventListener("click", function(event) {
			event.preventDefault();
			if(popup.classList.contains("search-form-hide")) {
				popup.classList.remove("search-form-hide");
				popup.classList.add("search-form-show");
				if (storageAdults) {
					adults.value = storageAdults;
				}
				if (storageKids) {
					kids.value = storageKids;
				}
			} else {
				popup.classList.remove("search-form-show");
				popup.classList.add("search-form-hide");
				popup.classList.remove("search-form-error");
			}
		});
		form.addEventListener("submit",function(event) {
			if (!checkin.value || !checkout.value || !adults.value || !kids.value) {
			event.preventDefault();
			popup.classList.remove("search-form-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("search-form-error");
			} else {
				localStorage.setItem("adults", adults.value);
				localStorage.setItem("kids", kids.value);
			}
		});