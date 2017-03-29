module.exports = function addCardReq(card) {
	return new Promise ( (resolve, reject) => {
		function reqListener(){
			console.log('response text: ', this.responseText);
			let data = JSON.parse(this.responseText);
			// console.log('data in add task', data);
			resolve(data);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener('load', reqListener);
		oReq.open('POST', 'api/board/new');
		oReq.setRequestHeader("Content-Type", "application/json");
		oReq.send(JSON.stringify(card));
	});
};