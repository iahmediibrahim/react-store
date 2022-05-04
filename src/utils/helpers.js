export const formatPrice = (number) =>
	Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(number / 100)

export const getUniqueValues = (data, type) => {
	let unique = data.map((i) => i[type])
	if (type === 'colors') unique = unique.flat()
	return ['all', ...new Set(unique)]
}
