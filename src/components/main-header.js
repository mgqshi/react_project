import React,{ Component } from 'react'
import { connect } from 'react-redux'

require('@componentCss/main-header.less');

class Header extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    //点击返回事件
    goBack(){
        window.history.go(-1);
    }

    render () {
        let { path } = this.props;
        
        let headClass = 'head-box', headContent = '';
        //需要隐藏头部的路由数组
        const noHeader = ['/home', '/classification', '/recover', '/my']
        //如果需要隐藏页面的
        if(noHeader.indexOf(path)>-1){
            headClass = "head-box-home";
            setTimeout(() => {
                let pageDiv = document.getElementById('main-page');
                pageDiv.setAttribute("class","page-main-home");
            }, 0);
        }else{
            setTimeout(()=>{
                let pageDiv = document.getElementById('main-page');
                if(path === '/shop_cart'){
                    pageDiv.setAttribute("class","page-main");
                }else{
                    pageDiv.setAttribute("class","page-main-1");
                }
            },0)

            headContent = <React.Fragment>
                            <div className="head-back" onClick={this.goBack}></div>
                            <div className="head-text">{ this.props.title }</div>
                            <div className="head-meun"></div>
                        </React.Fragment>
        }

        return <div className={headClass}> {headContent} </div>
    }
}

// export default Header
export default connect(
    state => ({ title : state.router_data.title, path : state.router_data.path })
)(Header);
