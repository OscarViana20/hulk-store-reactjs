import { connect } from 'react-redux';
import { getPaymentTypes, getErrorMessage } from '../../../selectors/shoppingSelector';
import { getStockProducts } from '../../../selectors/producSelector';
import { paymentTypesRequest } from '../../../actions/shoppingActions';
import { stockRequest } from '../../../actions/productActions';
import { ShoppingPage } from './render';

const mapStateToProps = (state) => {
    return ({
        errorMessage: getErrorMessage(state),
        paymentTypes: getPaymentTypes(state),
        stockProducts: getStockProducts(state),
    });
};

const mapDispatchToProps = (dispatch) => ({
    paymentTypesRequest: () => dispatch(paymentTypesRequest()),
    stockProductsRequest: () => dispatch(stockRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);