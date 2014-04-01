
describe('Static Data Filter spec', function() {

    beforeEach(module('myApp.filters'));
    beforeEach(module('myApp.services'));

    // Mock I18nResourceService
    beforeEach(module(function($provide) {
        $provide.factory('I18nResourceService', function() {
            return {
                resources: {
                    "static_data_channel": [
                     {"key": "home", "value": "Home Insurance UK"},
                     {"key": "motor","value": "Motor Insurance UK"}
                    ]
                }
            }
        });
    }));

    // Run test
    it('Should return expected value from static data resource', inject(function(static_dataFilter) {
        expect(static_dataFilter).toBeDefined();
        expect(static_dataFilter("home", "channel")).toEqual("Home Insurance UK");
        expect(static_dataFilter("motor", "channel")).toEqual("Motor Insurance UK");
    }));

    it('Should return empty value as not found in static data resource', inject(function(static_dataFilter) {
        expect(static_dataFilter).toBeDefined();
        expect(static_dataFilter("XXXX", "channel")).toEqual("");
        expect(static_dataFilter("home", "XXXX")).toEqual("");
        expect(static_dataFilter("home", "")).toEqual("");
        expect(static_dataFilter("", "")).toEqual("");
    }));

});