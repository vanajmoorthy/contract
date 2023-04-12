const secondsToDhms = (seconds) => {
	seconds = Number(seconds);
	let d = Math.floor(seconds / (3600 * 24));
	let h = Math.floor((seconds % (3600 * 24)) / 3600);
	let m = Math.floor((seconds % 3600) / 60);
	let s = Math.floor(seconds % 60);

	let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
};

const getTimeDelta = () => {
	let currentYear = new Date().getFullYear();

	let dueDate = new Date(`${currentYear}-05-01`);
	let today = new Date();

	let timeDelta = dueDate.getTime() - today.getTime();

	if (timeDelta < 0) {
		return false;
	}

	return secondsToDhms(timeDelta / 1000);
};
