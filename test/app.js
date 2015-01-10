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

  // Recently Viewed Files 
  this.recentlyViewed = {
    'firstEntry' : element(by.css('#history > optgroup:nth-of-type(1) > option')),
    'secondEntry': element(by.css('#history > optgroup:nth-of-type(2) > option')),
    'thirdEntry' : element(by.css('#history > optgroup:nth-of-type(3) > option')),
    'fourthEntry': element(by.css('#history > optgroup:nth-of-type(4) > option'))
  } 

  // Simply navigates to V2 URL
  this.getApp = function() {
    browser.get('http://localhost:8000/v2/#/');
  }

  this.refreshBrowser = function() {
    browser.refresh();
  }

  // Verifies that correct error message is shown to the user on alert dialogues
  this.verifyCorrectAlertMessageIsDisplayed = function(message) {
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual(message);
  }
};

module.exports = V2App;