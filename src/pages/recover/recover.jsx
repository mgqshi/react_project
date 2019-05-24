import React,{Component, PureComponent} from 'react'
//轮播插件
import ReactSwiper from 'reactjs-swiper';
//页面跳转
import { goPage } from '@utils/changeUrl'
//search组件
import Search from '@/components/search'
//redux state共享
import { connect } from 'react-redux'

require('@pageCss/recover/recover.less')

const imgs = [
    {
        id:0,
        image:'https://p.iquhuan.com/qiniuyun/94ace4ff-8e7b-4f1b-aee2-03e5163c31af.png'
    },
    {
        id:1,
        image:'https://p.iquhuan.com/qiniuyun/c71306ea-5d3a-4c6e-af36-8a819a2fffd5.png'
    },
    {
        id:2,
        image:'https://p.iquhuan.com/qiniuyun/4e79a734-9cc2-4172-b94b-112ef3309da4.png'
    }
]
//轮播组件
class ReactSwiperHome extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        swiperOptions: {
            preloadImages: false,
            autoplay: 3000,
            showPagination: false,
            autoplayDisableOnInteraction: false
        },
        items:props.imgList
        }
    }

    render() {
        return (
        <div className="swiper-box">
            <ReactSwiper swiperOptions={this.state.swiperOptions} showPagination items={this.state.items} key="" className="card-swipe" >
            </ReactSwiper>
        </div>
        )
    }
}

//本机评估
class PhoneAssess extends Component {
    render () {
        return(
            <div className="recover-assess">
                <div className="recover-assess-img"></div>
                <div className="recover-assess-msg">
                    <div className="recover-assess-title">iPhone6 Plus</div>
                    <div className="recover-assess-price">最高回收价<span>￥718</span></div>
                </div>
                <div className="recover-assess-btn" onClick={()=>goPage('/evaluate')}>本机评估</div>
            </div>
        )
    }
}


//回收分类
class RecoverClassify extends Component{
    render () {
        return(
            <div className="recover-classify">
                <div className="recover-classify-item"></div>
                <div className="recover-classify-item"></div>
                <div className="recover-classify-item"></div>
            </div>
        )
    }
}

//流程与服务
class RecoverServe extends Component{
    render () {
        return(
            <div className="recover-serve">
                <div className="recover-serve-title">流程与服务</div>
                <div className="recover-serve-tab"></div>
                <div className="recover-serve-content">用户可根据质检结果，在其他任意正规回收平台进行估价对比，若爱趣换平台价格低于其他平台，我们承诺以其他平台最高价进行回收。</div>
            </div>
        )
    }
}


const phones = [
    {id:0,title:'iPhone X',price:'4599',img:''},
    {id:1,title:'iPhone Xs',price:'4799',img:''},
    {id:2,title:'iPhone 6',price:'2099',img:''},
    {id:3,title:'iPhone 7',price:'2999',img:''},
    {id:4,title:'iPhone 8',price:'3599',img:''}
]
//热门机型
class PhoneItem extends Component{
    render () {
        return(
            <div className="recover-hots-item">
                <div className="recover-hots-img">
                    {/* <img src={this.props.img} alt=""/> */}
                </div>
                <div className="recover-hots-title">{this.props.title}</div>
                <div className="recover-hots-price">最高价：<span>￥{this.props.price}</span></div>
                <div className="recover-hots-btn" onClick={()=>goPage('/evaluate')}>马上估价</div>
            </div>
        )
    }
}
class RecoverHots extends Component{
    render () {
        return(
            <div className="recover-hots">
                <div className="recover-hots-header">热门机型</div>
                <div className="recover-hots-list">
                    {
                        this.props.phoneList.map((item)=>{
                            return <PhoneItem title={item.title} price={item.price} img={item.img} key={item.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}


class Recover extends Component{
    render () {
        return(
            <div className="recover-page">
                <div className="recover-swiper">
                    <Search />
                    <ReactSwiperHome imgList={ imgs } />
                </div> 
                <div className="recover-content">
                    <PhoneAssess />
                    <RecoverClassify />
                    <RecoverServe />
                    <RecoverHots phoneList={phones} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => state
)(Recover);