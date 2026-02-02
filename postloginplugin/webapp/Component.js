sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"
], function (UIComponent, MessageToast) {
    "use strict";

    return UIComponent.extend("com.postlogin.postloginplugin.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            console.log("################################################");
            console.log("### SHELL PLUGIN: PostLoginPlugin Initialized ###");
            console.log("################################################");

            // Show a toast
            MessageToast.show("Shell Plugin Loaded!");

            // Make a test API call
            this._makeTestApiCall();
            
            // Setup shell enhancements
            this._setupShellEnhancements();
        },

        _makeTestApiCall: function () {
            // Using JSONPlaceholder - a free public REST API for testing
            var sUrl = "https://jsonplaceholder.typicode.com/users/1";

            console.log("Making API call to:", sUrl);

            fetch(sUrl)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("HTTP error! status: " + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {
                    console.log("API Response received:");
                    console.log("User Name:", data.name);
                    console.log("User Email:", data.email);
                    console.log("Full Data:", data);
                    
                    MessageToast.show("API Call Success: " + data.name);
                })
                .catch(function (error) {
                    console.error("API Call Error:", error);
                    MessageToast.show("API Call Failed!");
                });
        },

        _setupShellEnhancements: function () {
            try {
                var oRenderer = sap.ushell.Container.getRenderer("fiori2");
                oRenderer.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem", {
                    id: "pluginHeaderBtn",
                    icon: "sap-icon://activate",
                    press: function() {
                        MessageToast.show("Plugin Header Button Clicked!");
                    }
                }, true, false);
                console.log("Shell header button added successfully");
            } catch (e) {
                console.error("Error setting up shell enhancements:", e);
            }
        },

        exit: function () {
            console.log("SHELL PLUGIN: Exit");
        }
    });
});