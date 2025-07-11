sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.HelloWorld", {

		onInit() {
			// Initialize local model for this view
			const oModel = new JSONModel({
				helloClickCount: 0,
				greetClickCount: 0,
				timeSpent: "0 minuti",
				startTime: Date.now()
			});
			
			this.getView().setModel(oModel, "helloWorld");
			
			// Start timer to track time spent
			this._startTimer();
		},

		/**
		 * Handle Hello World button press
		 */
		onHelloWorldPress() {
			const oModel = this.getView().getModel("helloWorld");
			const iCurrentCount = oModel.getProperty("/helloClickCount");
			
			oModel.setProperty("/helloClickCount", iCurrentCount + 1);
			
			// Show different messages based on click count
			let sMessage = "Hello World!";
			if (iCurrentCount === 0) {
				sMessage = "🌍 Hello World! Benvenuto!";
			} else if (iCurrentCount < 5) {
				sMessage = `🎉 Hello World #${iCurrentCount + 1}!`;
			} else if (iCurrentCount < 10) {
				sMessage = `🚀 Wow! Sei già al click #${iCurrentCount + 1}!`;
			} else {
				sMessage = `🏆 Incredibile! ${iCurrentCount + 1} click! Sei un campione!`;
			}
			
			MessageToast.show(sMessage, {
				duration: 3000
			});
		},

		/**
		 * Handle Greet User button press
		 */
		onGreetUser() {
			const oModel = this.getView().getModel("helloWorld");
			const iCurrentCount = oModel.getProperty("/greetClickCount");
			
			oModel.setProperty("/greetClickCount", iCurrentCount + 1);
			
			const aGreetings = [
				"👋 Ciao! Come stai?",
				"😊 Buongiorno! Spero tu stia bene!",
				"🌟 Salve! È un piacere rivederti!",
				"🎊 Hey! Che bella giornata!",
				"💫 Ciao amico! Come va la vita?",
				"🌈 Saluti! Il sole splende per te oggi!",
				"🎯 Ehi! Pronto per nuove avventure?",
				"⭐ Ciao! Sei fantastico!"
			];
			
			const sRandomGreeting = aGreetings[Math.floor(Math.random() * aGreetings.length)];
			
			MessageToast.show(sRandomGreeting, {
				duration: 4000
			});
		},

		/**
		 * Start timer to track time spent in the view
		 */
		_startTimer() {
			this._timer = setInterval(() => {
				const oModel = this.getView().getModel("helloWorld");
				const iStartTime = oModel.getProperty("/startTime");
				const iElapsed = Math.floor((Date.now() - iStartTime) / 1000);
				
				let sTimeText = "";
				if (iElapsed < 60) {
					sTimeText = `${iElapsed} secondi`;
				} else {
					const iMinutes = Math.floor(iElapsed / 60);
					const iSeconds = iElapsed % 60;
					sTimeText = `${iMinutes} min ${iSeconds} sec`;
				}
				
				oModel.setProperty("/timeSpent", sTimeText);
			}, 1000);
		},

		/**
		 * Clean up timer when view is destroyed
		 */
		onExit() {
			if (this._timer) {
				clearInterval(this._timer);
			}
		}
	});
});
