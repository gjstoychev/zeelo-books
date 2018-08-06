import { connect } from 'react-redux'
import { createItem, getListItem, setActivePage } from '../reducers/books'
import BookList from '../components/BookList'

export const mapStateToProps = (state) => ({
  books: state.books.listItems,
  pagination: state.books.pagination,
  loading: state.books.loading
})

export const mapDispatchToProps = {
  createItem,
  getListItem,
  setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
