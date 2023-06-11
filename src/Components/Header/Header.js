import React, { Fragment } from 'react'
import { setIsCapsule } from '../../store/actions'
import {connect } from 'react-redux'
 function Header(props) {
  return (
    <Fragment>    
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand ml-5 mb-0 h1">Space X</span>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onChange={(e)=>{props.setIsCapsule(e.target.checked)}} />
        <label className="form-check-label"  >{props.is_capsulse? 'Rocket': 'Capsulse'}</label>
      </div>
    </nav>
    </Fragment>
   )
}
const mapStateToProps = state =>({
  is_capsulse: state.spacex.is_capsulse
})
const mapDispatchToprops = dispatch=>({
  setIsCapsule: isCapsulse => dispatch(setIsCapsule(isCapsulse))
})
export default connect(mapStateToProps,mapDispatchToprops)(Header)
