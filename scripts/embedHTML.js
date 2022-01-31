function embedHTML() {

	// get a list of all HTML elements with the embed-html attribute
	let elements = document.querySelectorAll('[embed-html]')

	// start a loop that loops over all html elements
	for (let i = 0; i < elements.length; i++) {

		// get the element at the current point in the loop
		let element = elements[i];

		// load page referred to in the attribute and add it to the inner html of the element
		let file = element.getAttribute("embed-html");

		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status == 200) { element.innerHTML = this.responseText; }
				if (this.status == 404) { element.innerHTML = "Page not found."; console.error(`${file} could not be found`) }
				element.removeAttribute("embed-html");
				embedHTML();
			}
		}
		xhttp.open("GET", file, true);
		xhttp.send();
		return;
	}
}