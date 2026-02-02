/*global QUnit*/

sap.ui.define([
	"com/demo/mydemoappbwz/demoappbwz/controller/demoview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("demoview Controller");

	QUnit.test("I should test the demoview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
