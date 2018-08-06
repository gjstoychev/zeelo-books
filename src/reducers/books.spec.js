import reducer from './books'
import * as books from './books'

describe('(Redux Module) books', () => {
  describe('(Action Creators)', () => {
    it('should return the action object on getListItem call with offset and count', () => {
      const got = books.getListItem(0, 50)

      const want = {
        type: books.GET_LIST_ITEMS,
        payload: {
          request: {
            method: 'get',
            url: '/api/v1/items',
            pagination: {
              offset: 0,
              count: 50
            }
          }
        }
      }

      expect(got).toEqual(want)
    })

    it('should return the action object on getListItem call without pagination', () => {
      const got = books.getListItem()

      const want = {
        type: books.GET_LIST_ITEMS,
        payload: {
          request: {
            method: 'get',
            url: '/api/v1/items',
            pagination: undefined
          }
        }
      }

      expect(got).toEqual(want)
    })

    it('should return the action object on getItemDetails for a specific ID', () => {
      const got = books.getItemDetails(9)

      const want = {
        type: books.GET_ITEM_DETAILS,
        payload: {
          request: {
            method: 'get',
            url: '/api/v1/items/9'
          }
        }
      }

      expect(got).toEqual(want)
    })

    it('should return the action object on createItem for a specific count', () => {
      const got = books.createItem(20)

      const want = {
        type: books.CREATE_ITEM,
        payload: {
          request: {
            method: 'post',
            url: '/api/v1/items',
            count: 20
          }
        }
      }

      expect(got).toEqual(want)
    })

    it('should return the action object on setActivePage for a selected results page', () => {
      const got = books.setActivePage('18')

      const want = {
        type: books.SET_ACTIVE_PAGE,
        page: 18
      }

      expect(got).toEqual(want)
    })
  })

  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})
      const want = books.initialState
      expect(got).toEqual(want)
    })

    it('should return the previous state if no action matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})
      expect(got).toEqual(state)
    })

    it('should set loading state to true on GET_LIST_ITEMS', () => {
      const state = {
        listItems: [1, 2, 3],
        loading: false
      }

      const got = reducer(state, {
        type: books.GET_LIST_ITEMS
      })

      const want = {
        listItems: [1, 2, 3],
        loading: true
      }

      expect(got).toEqual(want)
    })

    it('should add book list and pagination to the state on GET_LIST_ITEMS_SUCCESS', () => {
      const state = {}

      const got = reducer(state, {
        type: books.GET_LIST_ITEMS_SUCCESS,
        payload: {
          data: {
            books: [1, 2, 3, 4],
            totalItems: 200,
            totalPages: 10,
            offset: 0,
            count: 20
          }
        }
      })

      const want = {
        listItems: [1, 2, 3, 4],
        pagination: {
          totalItems: 200,
          totalPages: 10,
          offset: 0,
          count: 20
        },
        loading: false
      }

      expect(got).toEqual(want)
    })

    it('should set loading state to true on GET_ITEM_DETAILS', () => {
      const state = {
        listItems: [1, 2, 3],
        loading: false
      }

      const got = reducer(state, {
        type: books.GET_ITEM_DETAILS
      })

      const want = {
        listItems: [1, 2, 3],
        loading: true
      }

      expect(got).toEqual(want)
    })

    it('should add book details to the state on GET_ITEM_DETAILS_SUCCESS', () => {
      const state = {}

      const got = reducer(state, {
        type: books.GET_ITEM_DETAILS_SUCCESS,
        payload: {
          data: {
            id: 1,
            title: 'Alamut',
            author: 'Vladimir Bartol'
          }
        }
      })

      const want = {
        itemDetails: {
          id: 1,
          title: 'Alamut',
          author: 'Vladimir Bartol'
        },
        loading: false
      }

      expect(got).toEqual(want)
    })

    it('should add created item and pagination to the state on CREATE_ITEM_SUCCESS', () => {
      const state = {}

      const got = reducer(state, {
        type: books.CREATE_ITEM_SUCCESS,
        payload: {
          data: {
            books: [1, 2, 3, 4],
            activePage: 1,
            totalItems: 100,
            totalPages: 10,
            offset: 0,
            count: 10
          }
        }
      })

      const want = {
        listItems: [1, 2, 3, 4],
        pagination: {
          activePage: 1,
          totalItems: 100,
          totalPages: 10,
          offset: 0,
          count: 10
        }
      }

      expect(got).toEqual(want)
    })

    it('should add active page to the state on SET_ACTIVE_PAGE', () => {
      const state = {}

      const got = reducer(state, {
        type: books.SET_ACTIVE_PAGE,
        page: 34
      })

      const want = {
        pagination: {
          activePage: 34
        }
      }

      expect(got).toEqual(want)
    })
  })
})
