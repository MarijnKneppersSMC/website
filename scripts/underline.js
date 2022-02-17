function updateUnderline(id) {

	let element = document.getElementById(id);

	if (element.classList.contains("active")) {

		element.classList.remove("active");

	}

	else {

		element.classList.add("active");

	}

	let elements = document.getElementsByClassName("active");

	for (let i = 0; i < elements.length; i++) {

		if (elements[i].id != id) {

			elements[i].classList.remove("active");

		}

	}

}