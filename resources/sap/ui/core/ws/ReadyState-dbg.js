/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides enumeration sap.ui.core.ws.ReadyState
sap.ui.define(function() {
	"use strict";


	/**
	 * Defines the different ready states for a WebSocket connection.
	 *
	 * @version 1.128.0
	 * @enum {int}
	 * @public
	 * @alias sap.ui.core.ws.ReadyState
	 */
	var ReadyState = {

		/**
		 * The connection has not yet been established.
		 * @public
		 */
		CONNECTING: 0,

		/**
		 * The WebSocket connection is established and communication is possible.
		 * @public
		 */
		OPEN: 1,

		/**
		 * The connection is going through the closing handshake.
		 * @public
		 */
		CLOSING: 2,

		/**
		 * The connection has been closed or could not be opened.
		 * @public
		 */
		CLOSED: 3

	};


	return ReadyState;

}, /* bExport= */ true);
