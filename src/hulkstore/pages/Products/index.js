import { connect } from 'react-redux';
import { getAvailableProducts, getErrorMessage } from '../../../selectors/producSelector';
import { availableRequest, saveProductRequest, deleteProductRequest } from '../../../actions/productActions';
import { ProductsPage } from './render';

const mapStateToProps = (state) => ({
    errorMessage: getErrorMessage(state),
    availableProducts: getAvailableProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
    availableRequest: () => dispatch(availableRequest()),
    saveProductRequest: (payload) => dispatch(saveProductRequest(payload)),
    deleteProductRequest: (payload) => dispatch(deleteProductRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);