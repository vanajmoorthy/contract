const submitBtnTwo = document.getElementById("submit-two");

let dateSigned;

let nameFormTwo = document.getElementById("second-party");
let eSignTwo = document.getElementById("second-party-e-sign");

submitBtnTwo.addEventListener("click", async () => {
	if (nameFormTwo.value == "" || eSignTwo.value == "") {
		alert("Both fields must be filled out");
	}

	localStorage.setItem("second-party-name", nameFormTwo.value);

	const response = await fetch(
		"/.netlify/functions/sendMail?" +
			new URLSearchParams({
				email: "vanaj.india@gmail.com",
				partyOneName: localStorage.getItem("first-party-name"),
				partyTwoName: localStorage.getItem("second-party-name"),
			})
	).then((response) => response.json());

	console.log(response);
});
