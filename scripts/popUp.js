function showPopUps(id) {
	let element = document.getElementById(id);
	if (!element.classList.contains('shown')) {
		element.classList.add("shown");
	}
	else {
		element.classList.remove("shown");
	}
}