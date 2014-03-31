

filtersModule.filter('toLower', () ->
	(value) ->
		if value and value.toLowerCase then value.toLowerCase() else ''
)
