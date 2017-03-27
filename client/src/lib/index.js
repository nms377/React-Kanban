module.exports = function getCardsReq() {
	return new Promise( (resolve, reject) => {
		function reqListener() {
			let data = JSON.parse(this.responseText);
			console.log('Data: ', data);
			resolve(data);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener('load', reqListener);
		oReq.open('GET', 'api/board');
		oReq.send();
	});
};