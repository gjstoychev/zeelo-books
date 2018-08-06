import { connect } from 'react-redux'
import { getItemDetails } from '../reducers/books'
import BookDetails from '../components/BookDetails'

export const mapStateToProps = (state) => ({
  details: state.books.itemDetails,
  loading: state.books.loading
})

export const mapDispatchToProps = {
  getItemDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails)
