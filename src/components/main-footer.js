import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'; 
//redux state共享
import { connect } from 'react-redux'

require('@componentCss/main-footer.less')

//img icon
class ImgBox extends Component{
    render () {
        let { path, self_path, img_src, img_src_hover } = this.props

        if(path === self_path){
            return <img src={ require("@img/system/" + img_src_hover) } alt="" />
        }else{
            return <img src={ require("@img/system/" + img_src) } alt="" />
        }
    }
}

//nav item
class NavItem extends Component{
    render () {
        let { path, self_path, img_src, img_src_hover, title } = this.props
        return(
            <div className="foot-item">
                <NavLink to={ self_path }>
                    <div className="img-box">
                        <ImgBox self_path={ self_path } path={ path } img_src={ img_src } img_src_hover={ img_src_hover } />
                    </div>
                    <div className="text-box">{ title }</div>
                </NavLink>
            </div>
        )
    }
}

/**
 * path : 当前的路由
 * self_path : 各组件对应的路由
 * img_src : 图片默认地址
 * img_src_hover : 选中时的图片地址
 * title : 导航标题
 */
class Footer extends Component{
    render (){
        let { path } = this.props;
        
        let footClass = 'foot-box';
        //需要隐藏头部的路由数组
        const noHeader = ['/home', '/classification', '/recover', '/my', '/shop_cart']
        //如果需要隐藏页面的
        if(noHeader.indexOf(path)>-1){
            footClass = "foot-box";
        }else{
            footClass = "foot-box-none";
        }
        return (
            <div className="foot-box">
                <NavItem self_path={ '/home' } path={ this.props.path } img_src={ "home.png" } img_src_hover={ "home_hover.png" } title={ "首页" } />
                <NavItem self_path={ '/classification' } path={ this.props.path } img_src={ "fenlei.png" } img_src_hover={ "fenlei_hover.png" } title={ "分类" } />
                <NavItem self_path={ '/recover' } path={ this.props.path } img_src={ "fenlei.png" } img_src_hover={ "fenlei_hover.png" } title={ "回收" } />
                <NavItem self_path={ '/shop_cart' } path={ this.props.path } img_src={ "shop_cart.png" } img_src_hover={ "shop_cart_hover.png" } title={ "购物车" } />
                <NavItem self_path={ '/my' } path={ this.props.path } img_src={ "user.png" } img_src_hover={ "user_hover.png" } title={ "我的" } />
            </div>
        )
    }
}

export default connect(
    state => ({ path : state.router_data.path })
)(Footer);