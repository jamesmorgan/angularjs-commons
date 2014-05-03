'use strict';

describe('RegExPatterns Tests', function() {

    beforeEach(module('myApp.common'));

    var RegExPatterns;

    beforeEach(inject(function($injector) {
        RegExPatterns = $injector.get('RegExPatterns');
    }));

    describe('Can determine valid telephone number', function(){

        it('Validate Phone Number', function() {
            var pattern = eval(RegExPatterns.ukPhoneNumber);

            // Matching Phone Numbers
            expect("01132822828").toMatch(pattern);
            expect("0113 282 2828").toMatch(pattern);
            expect("+44 113 282 2828").toMatch(pattern);
            expect("+44 1132822828").toMatch(pattern);
            expect("07998991928").toMatch(pattern);
            expect("0799 899 1928").toMatch(pattern);
            expect("+44 799 899 1928").toMatch(pattern);

            // Not Matching Phone Numbers
            expect("1234").not.toMatch(pattern);
            expect("abcdef").not.toMatch(pattern);
            expect("+44 012345").not.toMatch(pattern);
        });
    });

    describe('Can determine valid none negative number', function(){

        it('Validate None Negative Phone Numbers', function() {
            var pattern = eval(RegExPatterns.numericOnly);

            // Matching
            expect(0).toMatch(pattern);
            expect(999).toMatch(pattern);
            expect(123456789).toMatch(pattern);
            expect("1").toMatch(pattern);

            // Not Matching
            expect("-1").not.toMatch(pattern);
            expect("0.1").not.toMatch(pattern);
            expect("-1.0").not.toMatch(pattern);
            expect("abc").not.toMatch(pattern);
        });
    });

    describe('Can determine valid Decimal number', function(){

        it('Validate None Negative Phone Numbers', function() {
            var pattern = eval(RegExPatterns.decimalType);

            // Matching
            expect(0).toMatch(pattern);
            expect(9.99).toMatch(pattern);
            expect(12345678.9).toMatch(pattern);
            expect("1").toMatch(pattern);

            // Not Matching
            expect("1.").not.toMatch(pattern);
            expect(".1").not.toMatch(pattern);
            expect("1.a").not.toMatch(pattern);
            expect("abc").not.toMatch(pattern);
        });

    });
});
