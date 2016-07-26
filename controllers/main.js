"use strict";

const config = require("../config.json");

let user = null;

module.exports.web = function* console() {
	yield this.render("web", {
		title: config.site.name,
		script: "carousel"
	});
};
module.exports.game = function* console() {
	yield this.render("game", {
		title: config.site.name,
		script: "carousel"
	});
};
module.exports.utility = function* console() {
	yield this.render("utility", {
		title: config.site.name,
		script: "carousel"
	});
};

module.exports.index = function* index() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.render("index", {
		title: config.site.name,
		user: user,
		script: "index"
	});
};
