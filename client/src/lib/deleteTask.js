module.exports = function deleteCardReq(card) {
	return new Promise ( (resolve, reject) => {
		function reqListener(){
			console.log('response text in update: ', card);
			// let card = JSON.parse(this.responseText);
			console.log('data in update: ', card);
			resolve(card);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener('progress', reqListener);
		oReq.open('DELETE', `api/board/delete`);
		oReq.setRequestHeader("Content-Type", "application/json");
		oReq.send(card);
	});
};