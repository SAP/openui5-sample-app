sap.ui.core.UIComponent.extend('todo.Component', {
	metadata: {
		name: 'Sample todo app',
		version: '1.0.0',
		includes: ['css/styles.css'],
		dependencies: {
			libs: ['sap.m']
		},
		rootView: 'todo.view.App'
	}
});
