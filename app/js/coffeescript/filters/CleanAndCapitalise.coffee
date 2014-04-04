
###
 # Cleans underscores and camel cases a string
 #
 # Example usage: {{ myText | clean_and_capitalise }}
###
filtersModule.filter('clean_and_capitalise', () ->
    (input) ->
        if !input then return ""
        if typeof input isnt "string" then return ""

        input.replace(/_/g, " ").toLowerCase().replace(/(?:^|\s)\S/g, (a) ->
            return a.toUpperCase()
        )
)