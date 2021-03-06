import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			let maxPrice = action.products.map((product) => product.price)
			maxPrice = Math.max(...maxPrice)
			return {
				...state,
				all_products: [...action.products],
				filtered_products: [...action.products],
				filters: {
					...state.filters,
					max_price: maxPrice,
					price: maxPrice,
				},
			}
		case SET_LISTVIEW:
			return {
				...state,
				grid_view: false,
			}
		case SET_GRIDVIEW:
			return {
				...state,
				grid_view: true,
			}
		case UPDATE_SORT:
			return {
				...state,
				sort: action.value,
			}
		case SORT_PRODUCTS:
			const { sort, filtered_products } = state
			let tempProducts = [...filtered_products]
			if (sort === 'price-lowest') {
				tempProducts = tempProducts.sort((a, b) => a.price - b.price)
			}
			if (sort === 'price-highest') {
				tempProducts = tempProducts.sort((a, b) => b.price - a.price)
			}
			if (sort === 'name-a') {
				tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
			}
			if (sort === 'name-z') {
				tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
			}
			return {
				...state,
				filtered_products: tempProducts,
			}
		case UPDATE_FILTERS:
			return { ...state, filters: action.filters }
		case FILTER_PRODUCTS:
			const {
				filters: { text, company, category, color, price, shipping },
				all_products,
			} = state
			let filterProducts = [...all_products]
			// filtering
			// text
			if (text) filterProducts = filterProducts.filter((product) => product.name.toLowerCase().startsWith(text))
			// category
			if (category !== 'all') filterProducts = filterProducts.filter((product) => product.category === category)
			// company
			if (company !== 'all') filterProducts = filterProducts.filter((product) => product.company === company)
			// color
			if (color !== 'all')
				filterProducts = filterProducts.filter((product) => product.colors.find((c) => c === color))
			// shipping
			if (shipping) filterProducts = filterProducts.filter((product) => product.shipping === true)
			// price
			filterProducts = filterProducts.filter((product) => product.price <= price)

			return { ...state, filtered_products: filterProducts }
		case CLEAR_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					text: '',
					company: 'all',
					category: 'all',
					color: 'all',
					price: state.filters.max_price,
					shipping: false,
				},
			}
		default:
			throw new Error(`No Matching "${action.type}" - action type`)
	}
}

export default filter_reducer
