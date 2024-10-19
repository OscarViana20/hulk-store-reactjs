import { connect } from 'react-redux';
import { getUsername } from '../../../selectors/authSelector';
import { logoutRequest } from '../../../actions/authActions';
import { Navbar } from './render';

const mapStateToProps = (state) => ({
    username: getUsername(state),
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);