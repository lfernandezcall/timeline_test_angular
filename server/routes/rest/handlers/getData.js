function getData (req, res) {
	const randomData = require('../../../data/json/randomData.json')
 	res.send(randomData)
}

module.exports = getData