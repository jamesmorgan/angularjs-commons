
###
 # Truncate Filter
 # @param {String} text the text to truncate
 # @param {Number} length the length to truncate to
 # @param {String} end, default is "..."
 #
 # Example usage: {{ myText |truncate:25:"..."}} ("..." is optional since its the default)
###
filtersModule.filter('truncate', () ->
        (text, length, end) ->

            if !end then end = "..."

            if !text then return ""

            if text.length <= length or (text.length - end.length <= length) then return text

            "#{text}".substring(0, length-end.length) + end
    )
