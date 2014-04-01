

###
    This directive watches the username field and raises a validation error if it already exists
###
directivesModule.directive('hasRole', ($log, UserModel, I18nResourceService) ->
    {
        restrict: 'A', ## Only use on attributes
        link: (scope, elm, attrs, ctrl) ->


            scope.$watch(
                () ->
                    UserModel.authenticatedUser
                ,
                (newValue, oldValue) ->

                    allowedRoles = I18nResourceService?.resources?.static_data_user_role?.map (kv) -> kv.key

                    # always hide then show if has correct role
                    elm.removeClass("ng-show");
                    elm.addClass("ng-hide");

                    # unauthenticated - do nothing; keep hidden!
                    return if not UserModel.authenticatedUser

                    # resources must be loaded
                    return $log.error("AllowedRoles not found!") if not allowedRoles?.length

                    # must pass a valid string
                    return $log.error("Attribute value invalid #{attrs.hasRole}") if not attrs.hasRole?.length

                    roles = if attrs.hasRole.match(/\[(.*?)\]/) then eval(attrs.hasRole) else [attrs.hasRole]

                    return $log.error("Unknown role #{role}") for role in roles when not (role in allowedRoles)

                    if UserModel.authenticatedUser.role in roles
                        elm.removeClass("ng-hide");
                        elm.addClass("ng-show");
            )
    }
)