###
 Validates a password field, to ensure more then 7 chars and contain at least one non alphabetic character.
###
directivesModule.directive('passwordValidate', ($log, $filter) ->
    {
    restrict: 'A',  ## Only use on attributes
    require: '^ngModel',  ## Must have a ngModel
    link: (scope, elm, attrs, ctrl) ->
        ctrl.$parsers.unshift((viewValue) =>
            # More than 7 chars
            pwdValidLength = (viewValue && viewValue.length >= 8) ? 'valid': undefined
            # Must contain at least one non alphabetic character
            pwdComplexity = (viewValue && /(?=.*(\W|[0-9]|_))(?=.*[A-z])/.test(viewValue)) ? 'valid': undefined

            if pwdValidLength && pwdComplexity
                ctrl.$setValidity('password', true)
                viewValue
            else
                ctrl.$setValidity('password', false)
                undefined
        )

        ## Runs when the model gets updated on the scope directly and keeps our view in sync
        ctrl.$render = () =>
            elm.val(ctrl.$modelValue)
    }
)