module.exports = function() {
	var faker = require('faker');
	var _ = require('lodash');

	return {
		list_cars: _.times(300, function(n){
			return {
				id: n,
				brand: faker.vehicle.manufacturer(),
				pictures: faker.internet.avatar(),
				model: faker.vehicle.model(),
				color: faker.vehicle.color(),
				serial: faker.vehicle.vin()
			}
		})
	}
}