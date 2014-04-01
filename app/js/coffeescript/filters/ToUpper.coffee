

filtersModule.filter('toCamel', () ->
	(value) ->
		if value and value.toUpperCase then value.toUpperCase() else ''
)
