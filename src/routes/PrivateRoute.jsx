import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <p>Loading.....</p>
  if (user) return children

  return <Navigate to='/login' state={location.pathname} replace={true} />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}
export default PrivateRoute
