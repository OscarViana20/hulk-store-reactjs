import { connect } from 'react-redux';
import { getCategories } from '../../../selectors/categorySelector'; 
import { categoriesRequest } from '../../../actions/categoryActions';
import { ProductModal } from './render';

const mapStateToProps = (state) => ({
    categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
    categoriesRequest: () => dispatch(categoriesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);