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
				partyOneName: eSignOne,
				partyTwoName: eSignTwo,
			})
	);

	let res1 = await response1.json();

	console.log(res1);

	// Change to simar email
	const response2 = await fetch(
		"/.netlify/functions/sendMail?" +
			new URLSearchParams({
				email: "vanaj.india@gmail.com",
				partyOneName: nameFormOne.value,
				partyTwoName: nameFormTwo.value,
			})
	);

	let res2 = await response2.json();

	if (res1["Messages"][0]["Status"] && res2["Messages"][0]["Status"]) {
		window.location.href = "contract/success.html";
	} else {
		alert(res1["Messages"][0]["Status"]);
	}
});

let hasFocusedOnNameInputOne;

nameFormOne.addEventListener("change", (event) => {
	nameFormOne.classList.add("focused");
});

nameFormTwo.addEventListener("change", (event) => {
	nameFormTwo.classList.add("focused");
});
