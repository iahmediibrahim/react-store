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
			return { ...state, all_products: [...action.products], filtered_products: [...action.products] }
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
		default:
			throw new Error(`No Matching "${action.type}" - action type`)
	}
}

export default filter_reducer
