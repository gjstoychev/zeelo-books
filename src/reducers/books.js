import '../api/axios'

// Actions
export const GET_LIST_ITEMS = 'GET_LIST_ITEMS'
export const GET_LIST_ITEMS_SUCCESS = 'GET_LIST_ITEMS_SUCCESS'

export const GET_ITEM_DETAILS = 'GET_ITEM_DETAILS'
export const GET_ITEM_DETAILS_SUCCESS = 'GET_ITEM_DETAILS_SUCCESS'

export const CREATE_ITEM = 'CREATE_ITEM'
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS'

export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'

// Action Creators
export const getListItem = (offset, count) => {
  let pagination

  if (count || offset !== undefined) {
    pagination = {
      offset,
      count
    }
  }

  return {
    type: GET_LIST_ITEMS,
    payload: {
      request: {
        method: 'get',
        url: '/api/v1/items',
        pagination
      }
    }
  }
}

export const getItemDetails = (id) => {
  return {
    type: GET_ITEM_DETAILS,
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/items/${id}`
      }
    }
  }
}

export const createItem = (count) => {
  return {
    type: CREATE_ITEM,
    payload: {
      request: {
        method: 'post',
        url: '/api/v1/items',
        count
      }
    }
  }
}

export const setActivePage = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    page: Number(page)
  }
}

// Reducer
export const initialState = {
  listItems: [],
  pagination: {
    activePage: 1
  },
  itemDetails: {},
  loading: true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_ITEMS:
      return {
        ...state,
        loading: true
      }

    case GET_LIST_ITEMS_SUCCESS:
      return {
        ...state,
        listItems: action.payload.data.books,
        pagination: {
          ...state.pagination,
          totalItems: action.payload.data.totalItems,
          totalPages: action.payload.data.totalPages,
          offset: action.payload.data.offset,
          count: action.payload.data.count
        },
        loading: false
      }

    case GET_ITEM_DETAILS:
      return {
        ...state,
        loading: true
      }

    case GET_ITEM_DETAILS_SUCCESS:
      return {
        ...state,
        itemDetails: action.payload.data,
        loading: false
      }

    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        listItems: action.payload.data.books,
        pagination: {
          ...state.pagination,
          activePage: action.payload.data.activePage,
          totalItems: action.payload.data.totalItems,
          totalPages: action.payload.data.totalPages,
          offset: action.payload.data.offset,
          count: action.payload.data.count
        }
      }

    case SET_ACTIVE_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          activePage: action.page
        }
      }

    default:
      return state
    }
}
