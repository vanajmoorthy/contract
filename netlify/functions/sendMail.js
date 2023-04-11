require("dotenv").config();

const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
	process.env.MJ_APIKEY_PUBLIC,
	process.env.MJ_APIKEY_PRIVATE
);

const request = mailjet.post("send", { version: "v3.1" }).request({
	Messages: [
		{
			From: {
				Email: "vanajmoorthy@gmail.com",
				Name: "Vanaj Moorthy",
			},
			To: [
				{
					Email: "jimmyjz1127@gmail.com",
					Name: "Jikmmy",
				},
			],
			Subject: "Your email flight plan!",
			TextPart:
				"Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
			HTMLPart:
				'<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
		},
	],
});

exports.handler = async (event) => {
	return request
		.then((result) => {
			return {
				statusCode: 200,
				body: JSON.stringify(result.body),
			};
		})
		.catch((err) => {
			return {
				statusCode: err.statusCode,
				body: JSON.stringify(err),
			};
		});
};
