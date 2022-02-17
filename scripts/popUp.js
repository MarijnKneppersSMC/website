let shownElementId = null;

function showPopUps(id, underlineId) {

	let element = document.getElementById(id);

	if (shownElementId != null) {

		if (id == shownElementId) {

			element.classList.remove("shown");

			document.getElementById("general-info").classList.remove("down");

			shownElementId = null;

		}
		else {

			document.getElementById(shownElementId).classList.remove("shown");

			element.classList.add("shown");

			shownElementId = id;

		}

	}

	else {

		element.classList.add("shown");

		shownElementId = id;

		document.getElementById("general-info").classList.add("down");

	}

}