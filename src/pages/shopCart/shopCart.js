import React, { Component } from 'react'
import { connect } from 'react-redux'

require('@pageCss/shopCart/shopCart.less')

//购物车底部
class ShopCartBottom extends Component{
    render () {
        return(
            <div className="shopCart-bottom">
                <div className="shopCart-bottom-checkbox">
                    <div className="shopCart-bottom-checkbox-1"></div>全选
                </div>
                <div className="shopCart-bottom-content">
                    <div className="shopCart-bottom-total">合计:<span>￥7840.00</span></div>
                    <div className="shopCart-bottom-amount">1件商品</div>
                </div>
                <div className="shopCart-bottom-btn">去结算</div>
            </div>
        )
    }
}

//购物车list
class ShopCartItem extends Component{
    render () {
        return(
            <div className="shopCart-item">
                <div className="shopCart-choose">
                    <div className="shopCart-checkbox active">✔</div>
                </div>
                <div className="shopCart-img"></div>
                <div className="shopCart-msg">
                    <div className="shopCart-title two-line" style={{"WebkitBoxOrient": "vertical"}}>99新 iPhone XS Max 256G 金色 其他版本 全网通 过保</div>
                    <div className="shopCart-subject">规格：99新/银色/其他/全网通/32G/过保</div>
                    <div className="shopCart-box">
                        <div className="shopCart-price">￥6618.00</div>
                        <div className="shopCart-number">
                            <span className="shopCart-oprater">-</span>
                            <input type="number" defaultValue="1" />
                            <span className="shopCart-oprater">+</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ShopCartList extends Component{
    render () {
        return(
            <div className="shopCart-list">
                <ShopCartItem />
            </div>
        )
    }
}

class ShopCart extends Component{

    render () {
        return (
            <div className="shopCart-page">
                <ShopCartList />
                <ShopCartBottom />
            </div>
        )
    }
}


export default connect( 
    state => state
)(ShopCart)

