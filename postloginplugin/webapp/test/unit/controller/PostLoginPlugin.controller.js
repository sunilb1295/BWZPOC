/*global QUnit*/

sap.ui.define([
	"com/postlogin/postloginplugin/controller/PostLoginPlugin.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PostLoginPlugin Controller");

	QUnit.test("I should test the PostLoginPlugin controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
