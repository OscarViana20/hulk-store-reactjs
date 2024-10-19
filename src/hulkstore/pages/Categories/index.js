import { connect } from 'react-redux';
import { getCategories, getErrorMessage } from '../../../selectors/categorySelector';
import { categoriesRequest } from '../../../actions/categoryActions';
import { CategoriesPage } from './render';

const mapStateToProps = (state) => ({
    errorMessage: getErrorMessage(state),
    categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
    categoriesRequest: () => dispatch(categoriesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);