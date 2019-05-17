import React,{Component} from 'react'
import MainHeader from '@/components/main-header'
import MainFooter from '@/components/main-footer'
//路由入口
import RouterOne from '@/routers/router'
//redux状态
import { connect } from 'react-redux'

require('./statics/css/app.less')

class App extends Component{
  render () {
    let { path } = this.props;
    //如何页面有底部导航栏
    if( path === '/home' || path === '/classification' || path === '/shop_cart' || path === '/my'){
        //如果是首页,则头部透明
        let page_class = 'page-main';
        if(path === '/home'){
          page_class = 'page-main-home'
        }
        return (
          <div className="page-wrap">
            <MainHeader isShow={ true } />
            <main className={ page_class } >
                <RouterOne />
            </main>
            <MainFooter/>
          </div>
        )
    }else{
      //无底部导航栏情况
      return <div className="page-wrap">
        <MainHeader isShow={ true } />
          <main className="page-main-1">
              <RouterOne />
          </main>
      </div>
    }
    
  }
}

export default connect(
  state => ({ path : state.router_data.path })
)(App);