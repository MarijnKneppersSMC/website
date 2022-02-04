function toggleModal()
{
	let modal = document.getElementById("modal");

	let glass = document.getElementById("glass-pane")

	if(modal.classList.contains("open"))
	{
		modal.classList.remove("open");
		glass.classList.remove("shown");
	}
	else
	{
		modal.classList.add("open");
		glass.classList.add("shown");
	}
}

function setModalContent(id)
{
	let dialogue = document.getElementById("modal-dialogue");

	let data = document.getElementById(id);

	dialogue.innerHTML = data.innerHTML;
}