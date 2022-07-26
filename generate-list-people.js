module.exports = function() {
	var faker = require('faker');
	var _ = require('lodash');

	return {
		list_people: _.times(200, function(n){
			return {
				id: n,
				name: faker.name.findName(),
				avatar: faker.internet.avatar(),
				nationality: faker.address.country()
			}
		})
	}
}