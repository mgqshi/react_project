import React,{Component, PureComponent} from 'react'
import {withRouter} from "react-router-dom";
//轮播插件
import ReactSwiper from 'reactjs-swiper';
import { goPage } from '@utils/changeUrl'  //地址跳转
//redux状态
import { connect } from 'react-redux'
//search组件
import Search from '@/components/search'


require('@pageCss/home/home.less')

//轮播数据
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
const phones = [
  {
    id:0,
    description:'99新 iPhoneXSMax 64G 黑色 其他版本 全网通哈哈哈哈哈哈哈哈',
    imgSrc:'',
    price:'4999',
  },
  {
    id:1,
    description:'99新 iPhoneXSMax 64G 黑色 其他版本 全网通哈哈哈哈哈哈哈哈',
    imgSrc:'',
    price:'4999',
  },
  {
    id:2,
    description:'99新 iPhoneXSMax 64G 黑色 其他版本 全网通哈哈哈哈哈哈哈哈',
    imgSrc:'',
    price:'4999',
  },
  {
    id:3,
    description:'99新 iPhoneXSMax 64G 黑色 其他版本 全网通哈哈哈哈哈哈哈哈',
    imgSrc:'',
    price:'4999',
  },
  {
    id:4,
    description:'99新 iPhoneXSMax 64G 黑色 其他版本 全网通哈哈哈哈哈哈哈哈',
    imgSrc:'',
    price:'4999',
  },
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

//首页导航栏
class NavItem extends Component{

  render () {
    return(
      <div className="nav-item"  onClick={()=>goPage(this.props.url)}>
        <div className="nav-img">
          {/* <img src={ require('@img/home'+this.props.imgSrc) } alt="" /> */}
        </div>
        <div className="nav-title">{this.props.title}</div>
      </div>
    )
  }
}
class HomeNav extends Component{
  render () {
    return (
      <div className="home-nav">
        <NavItem imgSrc="" title="苹果" />
        <NavItem imgSrc="" title="安卓" />
        <NavItem imgSrc="" title="平板" />
        <NavItem imgSrc="" title="配件" />
        <NavItem imgSrc="" title="回收" url="/recover" />
      </div>
    )
  }
}

//活动专区
class Active extends Component{
  render () {
    return (
      <div className="home-active">
        <div className="active-one"></div>
        <div className="active-two">
          <div className="active-three"></div>
          <div className="active-four">
          <div className="active-five"></div>
          <div className="active-six"></div>
          </div>
        </div>
      </div>
    )
  }
}

//猜你喜欢
class PhoneItem extends Component{
  render() {
    return(
      <div className="phone-item">
        <div className="phone-img">
          {/* <img src={this.props.imgSrc} alt=""/> */}
        </div>
        <div className="phone-descri two-line" style={{"WebkitBoxOrient": "vertical"}}>{this.props.description}</div>
        <div className="phone-price">{`￥${this.props.price}`}</div>
      </div>
    )
  }
}
class Like extends Component{
  render () {
    return (
      <div className="home-like">
        <div className="like-header">
          <div className="like-title">猜你喜欢</div>
          <div className="like-choose">
            <ul>
              <li><span>苹果</span></li>
              <li><span>安卓</span></li>
              <li><span>配件</span></li>
              <li><span className="active">平板</span></li>
            </ul>
          </div>
        </div>
        <div className="like-list">
          {
            this.props.phoneList.map((item)=>{
              return <PhoneItem imgSrc={item.imgSrc} description={item.description} price={item.price} key={item.id} />
            })
          }
        </div>
      </div>
    )
  }
}



class Home extends Component{

  constructor(props) {
    super(props);
  }

  render () {
      return (
          <div className="home-page">
              <div className="home-swiper">
                  <Search />
                  <ReactSwiperHome imgList={ imgs } />
              </div> 
              <HomeNav />
              <Active />
              <Like phoneList={ phones } />
          </div>
      )
  }
}

export default withRouter(connect(
  state => state
)(Home))