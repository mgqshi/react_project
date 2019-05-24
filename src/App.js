//废弃页面
import React,{Component} from 'react'
import MainHeader from '@/components/main-header'
import MainFooter from '@/components/main-footer'
//路由入口
import RouteApp from '@/routers/router'
//redux状态
import { connect } from 'react-redux'
//全局app样式
require('./statics/css/app.less')


class App extends Component{
  
  render () {
    let { path } = this.props;
    let mainClass = "page-main-1",footStr = '';
    //没有头部的页面
    const noHeader = ['/home', '/classification', '/recover', '/my', '/shop_cart'];
    if( noHeader.indexOf(path) > -1 ){
        mainClass = 'page-main-home';
        footStr = <MainFooter />;
        if( path === '/shop_cart' ){
          mainClass = 'page-main'
        }
    }else{
        mainClass = "page-main-1";
        footStr = '';
    }

    return (
      <div className="page-wrap">
        <MainHeader isShow={ true } />
        <div className={mainClass}>
          <RouteApp />
        </div>
        {footStr}
      </div>
    )
  }
}

export default connect(
  state => ({ path : state.router_data.path })
)(App);