import React, { Component } from 'react'
import { connect } from 'react-redux'

require('@pageCss/shopCart/shopCart.less')

class ShopCart extends Component{

    render () {
        return (
            <div className="shopCart-page">欢迎来到我的购物车</div>
        )
    }
}


export default connect( 
    state => state
)(ShopCart)

