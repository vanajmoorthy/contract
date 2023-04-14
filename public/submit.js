const submitBtnTwo = document.getElementById("submit");

let dateSigned;

let nameFormOne = document.getElementById("first-party");
let nameFormTwo = document.getElementById("second-party");

let eSignOne = document.getElementById("first-party-e-sign");
let eSignTwo = document.getElementById("second-party-e-sign");

submitBtnTwo.addEventListener("click", async () => {
	if (
		nameFormTwo.value === "" ||
		eSignTwo.value === "" ||
		nameFormOne.value === "" ||
		eSignOne.value === ""
	) {
		alert("Please fill out both parties' names and remember to e-sign!");
		return;
	}

	const response1 = await fetch(
		"/.netlify/functions/sendMail?" +
			new URLSearchParams({
				email: "vanaj.india@gmail.com",
				partyOneName: nameFormOne.value,
				partyTwoName: nameFormTwo.value,
			})
	);

	console.log(response1.status);

	// Change to simar email
	const response2 = await fetch(
		"/.netlify/functions/sendMail?" +
			new URLSearchParams({
				email: "simarkrikhy353@gmail.com",
				// email: "vanaj.india@gmail.com",
				partyOneName: nameFormOne.value,
				partyTwoName: nameFormTwo.value,
			})
	);

	if (response1.status == 200 && response2.status == 200) {
		window.location.href = "success.html";
	} else {
		alert(response1.status);
	}

	localStorage.setItem("hasSigned", true);
});

let hasFocusedOnNameInputOne;

nameFormOne.addEventListener("change", (event) => {
	nameFormOne.classList.add("focused");
});

nameFormTwo.addEventListener("change", (event) => {
	nameFormTwo.classList.add("focused");
});
