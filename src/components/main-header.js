import React,{ Component } from 'react'
import { connect } from 'react-redux'

require('@componentCss/main-header.less');

class Header extends Component{
    render () {
        if(this.props.path !=='/home'){
            return <div className="head-box">{ this.props.title }</div>
        }else{
            return <div className="head-box-home"></div>
        }
    }
}

// export default Header
export default connect(
    state => ({ title : state.router_data.title, path : state.router_data.path })
)(Header);
