// This basically represents a "page object" pattern: it encapsulates information
// about UI elements which can be re-used across multiple tests. Common user actions 
// can be defined via functions.

var V2App = function() {

  // Main nav buttoms
  // JSON
  this.jsonBtn = element(by.css('.load-button:nth-child(2)'));

  // OBJ/MTL 
  this.objMtlBtn = element(by.css('.load-button:nth-child(3)'));

  // glTF
  this.glTFBtn = element(by.css('.load-button:nth-child(4)'));

  // Simply navigates to V2 URL
  this.getApp = function() {
    browser.get('http://localhost:8000/v2/#/');
  }

  this.refreshBrowser = function() {
    browser.refresh();
  }

  this.verifyCorrectAlertMessageIsDisplayed = function(message) {
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual(message);
  }
};

module.exports = V2App;