(function() {
	'use strict';

	sap.ui.controller('todo.view.App', {

		onInit: function() {
			this.oModel = new sap.ui.model.json.JSONModel({
				newTodo: '',
				todos: [
					{
						title: 'Start this app',
						completed: true
					},
					{
						title: 'Learn OpenUI5',
						completed: false
					}
				],
				someCompleted: true,
				completedCount: 1
			});
			this.getView().setModel(this.oModel);
		},

		addTodo: function() {
			var aTodos = this.oModel.getObject('/todos');
			aTodos.unshift({
				title: this.oModel.getProperty('/newTodo'),
				completed: false
			});
			this.oModel.setProperty('/newTodo', '');
		},

		toggleCompleted: function(oEvent) {
			this.setCompletedCount(this.oModel.getObject('/todos').filter(function(mTodo) {
				return mTodo.completed;
			}).length);
		},

		clearCompleted: function(oEvent) {
			var aTodos = this.oModel.getProperty('/todos');
			this.oModel.setProperty('/todos', aTodos.filter(function(mTodo) {
				return !mTodo.completed;
			}));
			this.setCompletedCount(0);
		},

		setCompletedCount: function(iCount) {
			this.oModel.setProperty('/completedCount', iCount);
			this.oModel.setProperty('/someCompleted', iCount > 0);
		}

	});

})();
