const submitBtnOne = document.getElementById("submit-one");

let nameFormOne = document.getElementById("first-party");
let eSignOne = document.getElementById("first-party-e-sign");

submitBtnOne.addEventListener("click", async () => {
	if (!nameFormOne.value || !eSignOne.value) {
		alert("Both fields must be filled out");
	} else {
		localStorage.setItem("first-party-name", nameFormOne.value);
		window.location.href = "second-party.html";
	}
});
