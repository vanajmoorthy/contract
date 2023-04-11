const submitBtn = document.getElementById("submit-one");

submitBtn.addEventListener("click", async () => {
	const response = await fetch("/.netlify/functions/sendMail.js").then(
		(response) => response.json()
	);

	console.log("hello");
	console.log(response);
});
