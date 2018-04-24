module.exports = function signUpReq(user) {
	return new Promise(function(res, rej) {
		function reqListener() {
			console.log("user responseText", this.responseText);
			let data = JSON.parse(this.responseText);

			res(data);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("POST", "/api/user/new");
		oReq.setRequestHeader("Content-Type", "application/json");
		oReq.send(JSON.stringify(user));
	});
};
