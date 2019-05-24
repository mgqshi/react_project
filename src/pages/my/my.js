import React, { Component } from 'react'
import { connect } from 'react-redux'

require('@pageCss/my/my.less')

//头部背景以及按钮
class MyOne extends Component{
    render () {
        return(
            <div className="my-header">
                <div className="my-icon-2"></div>
                <div className="my-icon-1"></div>
            </div>
        )
    }
}

//我的订单以及个人信息
class OrderClassify extends Component{
    render () {
        return(
            <div className="my-order-item">
                <div className="my-order-item-icon"></div>
                <div className="my-order-item-text">{this.props.title}</div>
            </div>
        )
    }
}
class MyMsg extends Component{
    render () {
        return(
            <div className="my-msg">
                <div className="user-msg">
                    <div className="user-avatar"></div>
                    <div className="user-name-phone">
                        <div className="user-name">我的青春我做主</div>
                        <div className="user-phone">158****0598</div>
                    </div>
                    <div className="user-setting">修改个人信息</div>
                </div>
                <div className="user-allOrder">
                    <div className="my-allOrder-title">购买订单<span>查看全部订单</span></div>
                    <div className="my-allOrder-right"></div>
                </div>
                <div className="user-classify-order">
                    <OrderClassify title="代付款" />
                    <OrderClassify title="待发货" />
                    <OrderClassify title="待收货" />
                    <OrderClassify title="待评价" />
                    <OrderClassify title="退款/售后" />
                </div>
            </div>
        )
    }
}

//各个小菜单
class MenuItem extends Component{
    render () {
        let marginStyle = this.props.isMargin?{marginTop:'20px'}:null;
        let rightStype = !this.props.isRight?{display:'none'}:null;
        return(
            <div className="my-menu-item" style={marginStyle}>
                <div className="my-menu-item-icon"></div>
                <div className="my-menu-item-text">{this.props.title} <span>{this.props.tips}</span></div>
                <div className="my-menu-item-right" style={rightStype}></div>
            </div>
        )
    }
}


class My extends Component{

    render () {
        return (
            <div className="my-page">
                <MyOne />
                <MyMsg />
                <MenuItem title="回收订单" tips="查看回收订单" isMargin={false} isRight={true} />
                <MenuItem title="我的拼团" tips="" isMargin={false} isRight={true} />
                <MenuItem title="我的帮团" tips="" isMargin={false} isRight={true} />
                <MenuItem title="电子质保卡" tips="查看电子质保卡" isMargin={true} isRight={true} />
                <MenuItem title="我的优惠劵" tips="无可用优惠劵" isMargin={false} isRight={true} />
                <MenuItem title="管理收货地址" tips="" isMargin={false} isRight={true} />
                <MenuItem title="发票管理" tips="" isMargin={false} isRight={true} />
                <MenuItem title="客服电话" tips="400-1199-692" isMargin={false} isRight={false} />
            </div>
        )
    }
}


export default connect( 
    state => state
)(My)

