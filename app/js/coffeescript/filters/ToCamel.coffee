

filtersModule.filter('toCamel', () ->
	(value) ->
		if value and value.toLowerCase and value.toUpperCase
			return value.toLowerCase().replace(/-(.)/g, (match, group1) ->
				return group1.toUpperCase()
			)
		else
			return ''
)
