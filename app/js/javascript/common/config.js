(function () {
    "use strict";

    /**
     *
     */

    configModule.constant('RegExPatterns', {
        numericOnly: "/^[0-9]+$/",
        decimalType: "/^[0-9]+(.[0-9]+)?$/",
        ukPhoneNumber: "/^\\(?(?:(?:0(?:0|11)\\)?[\\s-]?\\(?|\\+)44\\)?[\\s-]?\\(?(?:0\\)?[\\s-]?\\(?)?|0)(?:\\d{2}\\)?[\\s-]?\\d{4}[\\s-]?\\d{4}|\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{3,4}|\\d{4}\\)?[\\s-]?(?:\\d{5}|\\d{3}[\\s-]?\\d{3})|\\d{5}\\)?[\\s-]?\\d{4,5}|8(?:00[\\s-]?11[\\s-]?11|45[\\s-]?46[\\s-]?4\\d))(?:(?:[\\s-]?(?:x|ext\\.?\\s?|\\#)\\d+)?)$/"
    });

    configModule.constant('FormErrorMessages', {
        url: "Please enter a valid URL",
        email: "Please enter a valid email address",
        text: "Please enter some text",
        number: "Please enter a vaid number",
        maxlength: "Max length reached",
        minlength: "Min length reached",
        pattern: "Invalid pattern entered",
        min: "Min Value",
        max: "Max value reached",
        required: "Required!"
    });

}());