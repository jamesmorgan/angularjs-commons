
###
 # Capitalize Filter
 # @param {String} input the input string to capitalise
 #
 # Example usage: {{ myText | capitalise }}
###
filtersModule.filter('capitalise', () ->
    (input) ->

        if !input then return ""
        if typeof input isnt "string" then return ""

        input.toLowerCase().replace(/(?:^|\s)\S/g, (a) ->
            return a.toUpperCase()
        )
)