module.exports = function updateCardReq(card) {
	return new Promise ( (resolve, reject) => {
		function reqListener(){
			console.log('response text in update: ', card);
			// let data = JSON.parse(this.responseText);
			console.log('data in update: ', card);
			resolve(card);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener('load', reqListener);
		oReq.open('PUT', `api/board/edit`);
		oReq.setRequestHeader("Content-Type", "application/json");
		oReq.send(JSON.stringify(card));
	});
};