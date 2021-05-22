sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("project4.controller.View1", {
			onInit: function () {
console.log("New change");
console.log("New change in child branch");

			}
		});
	});
