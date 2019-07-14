sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {

		onInit: function() {
			this.aSearchFilters = [];
			this.aTabFilters = [];
		},

		onMyPatientsTilePress: function(oEvent) {
			var iNumberOfPatients = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("patientsTileInfo", [iNumberOfPatients]));
		},

		onMyOrganzationsTilePress: function(oEvent) {
			var iNumberOfOrganizations = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("organzationsTileInfo", [iNumberOfOrganizations]));
		}
	});

});
