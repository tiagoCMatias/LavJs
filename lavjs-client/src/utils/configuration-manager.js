
/** Lavandarias */

export function getLavandarias() {
	return new Promise(function (resolve, reject) {

		let requestUrl = "http://localhost:3000/lavandaria/all";

		let requestOptions = {
			uri: requestUrl,
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'pragma': 'no-cache',
				'cache-control': 'no-cache'
			},
			//body: JSON.stringify({ "username": username, "password": password })
		}
		fetch(requestUrl, requestOptions).then(function (response) {
			if (response.status === 201) {
				return resolve(response.json());
			} else {
				return reject(Error("An error has occurred! Please try again."));
			}
		}, function (error) {
			return reject(error);
		});
	});
}

export function postLavandarias(nome, local) {
	return new Promise(function (resolve, reject) {

		let requestUrl = "http://localhost:3000/lavandaria/new";

		let requestOptions = {
			uri: requestUrl,
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'pragma': 'no-cache',
				'cache-control': 'no-cache'
			},
			body: JSON.stringify({ "name": nome, "liq_total": "0", "local": local })
		}
		fetch(requestUrl, requestOptions).then(function (response) {
			if (response.status === 201) {
				return resolve(response.json());
			} else {
				return reject(Error("An error has occurred! Please try again."));
			}
		}, function (error) {
			return reject(error);
		});
	});
}



/*** Máquinas */

export function getMaquinas() {
	return new Promise(function (resolve, reject) {

		let requestUrl = "http://localhost:3000/maquina/all";

		let requestOptions = {
			uri: requestUrl,
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'pragma': 'no-cache',
				'cache-control': 'no-cache'
			},
			//body: JSON.stringify({ "username": username, "password": password })
		}

		fetch(requestUrl, requestOptions).then(function (response) {
			if (response.status === 201) {
				return resolve(response.json());
			} else {
				return reject(Error("An error has occurred! Please try again."));
			}
		}, function (error) {
			return reject(error);
		});
	});
}

export function postMaquinas(machine_name, id_lavandaria) {
	return new Promise(function (resolve, reject) {

		let requestUrl = "http://localhost:3000/maquina/new";

		let requestOptions = {
			uri: requestUrl,
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'pragma': 'no-cache',
				'cache-control': 'no-cache'
			},
			body: JSON.stringify({ "name": machine_name, "programa": "0", "lav_id": id_lavandaria })
		}
		fetch(requestUrl, requestOptions).then(function (response) {
			if (response.status === 201) {
				return resolve(response.json());
			} else {
				return reject(Error("An error has occurred! Please try again."));
			}
		}, function (error) {
			return reject(error);
		});
	});
}
