sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
    "use strict";
    new ComponentContainer({
        id: "todo",
        name: "sap.ui.demo.todo",
        manifest: true,
        async: true
    }).placeAt("content");
})