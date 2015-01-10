var V2App = require('./app.js');

describe('v2 app', function() {

  var app = new V2App();

  beforeEach(function() {
    app.getApp();
  });

  it('should be able to clear recently viewed files', function() {
    element(by.buttonText('CLEAR')).click();

    // Asserts that history is clear
    expect(app.recentlyViewed.firstEntry.isPresent()).toBeFalsy();

  });

  it('should be able to load sample json and add an entry to "Recently viewed"', function() {
    app.jsonBtn.click();

    element(by.buttonText('SAMPLE JSON')).click();

    app.refreshBrowser();

    // Grab second option from "Recently viewed files", make sure it was as we expect
    expect(app.recentlyViewed.secondEntry.getText()).toEqual('Textured_Lady');
  });

  it('should be able to load sample object and add an entry to "Recently viewed"', function() {
    app.objMtlBtn.click();

    element(by.buttonText('SAMPLE OBJ')).click();

    app.refreshBrowser();

    expect(app.recentlyViewed.thirdEntry.getText()).toEqual('No texture guy');
  });

  it('should be able to load sample glTF and add an entry to "Recently viewed', function() {
    app.glTFBtn.click();

    element(by.buttonText('SAMPLE glTF')).click();

    app.refreshBrowser();

    expect(app.recentlyViewed.fourthEntry.getText()).toEqual('glTF Duck');
  });

  it('should display correct error messages if required information is missing on JSON Loader', function() {
    app.jsonBtn.click();

    // Verify correct message is shown if no JSON URL or file name was provided
    element(by.buttonText('LOAD JSON')).click();
    
    app.verifyCorrectAlertMessageIsDisplayed('URL to a JSON file and a unique name required')
  });
});