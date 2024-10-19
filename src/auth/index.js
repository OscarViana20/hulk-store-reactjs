import { connect } from 'react-redux';
import { getErrorMessage } from '../selectors/authSelector';
import { loginRequest } from '../actions/authActions';
import { LoginPage } from './render';

const mapStateToProps = (state) => ({
    errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
    loginRequest: (payload) => dispatch(loginRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);