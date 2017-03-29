module.exports = function updateCardReq(card) {
	return new Promise ( (resolve, reject) => {
		function reqListener(){
			console.log('response text in update: ', this.responseText);
			let data = JSON.parse(this.responseText);
			console.log('data in update: ', data);
			resolve(data);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener('load', reqListener);
		oReq.open('PUT', `api/board/`);
		oReq.setRequestHeader("Content-Type", "application/json");
		oReq.send(JSON.stringify(card));
	});
};