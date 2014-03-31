

###
    This directive watches the username field and raises a validation error if it already exists
###
directivesModule.directive('uniqueUsername', ($log, UserService) ->
    {
        restrict: 'A', ## Only use on attributes
        require: 'ngModel', ## Must have a ngModel
        link: (scope, elm, attrs, ctrl) ->

            elm.bind('blur', (e) =>
                if (elm?.val())
                    $log.info("Checking username: " + elm.val())

                    UserService.usernameExists(elm.val())
                        .then(
                            (data) =>
                                ctrl.$setValidity('uniqueusername', !data.result)
                                undefined ## return undefined (no model update)
                        )
            )
    }
)