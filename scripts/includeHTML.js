function includeHTML() {
	let elements = document.getElementsByTagName("*");
	for (let i = 0; i < elements.length; i++) {
		let element = elements[i];
		if (element.hasAttribute("embed-html")) {

			let file = element.getAttribute("embed-html");

			let xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) { element.innerHTML = this.responseText; }
					if (this.status == 404) { element.innerHTML = "Page not found."; }
					element.removeAttribute("embed-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}
