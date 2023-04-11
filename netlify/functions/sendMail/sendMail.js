require("dotenv").config();

const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
	process.env.MJ_APIKEY_PUBLIC,
	process.env.MJ_APIKEY_PRIVATE
);

exports.handler = async (event) => {
	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: "vanajmoorthy@gmail.com",
					Name: "Vanaj and Simar Relationship Contract",
				},
				To: [
					{
						Email: event.queryStringParameters.email,
					},
				],
				Subject: "Congratulations on renewing your relationship!",
				TextPart:
					"Dear Simar & Vanaj. Congratulations on renewing your relationship for the year " +
					new Date().getFullYear() +
					"!",
				HTMLPart: `<h3>Signed: ${
					event.queryStringParameters.partyOneName
				} and ${
					event.queryStringParameters.partyTwoName
				}</h3> on ${new Date().toDateString()}`,
			},
		],
	});

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
