import React,{Component, PureComponent} from 'react'
//轮播插件
import ReactSwiper from 'reactjs-swiper';

require('@pageCss/home/home.less')


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


class Home extends Component{
    render () {
        return (
            <div className="home-page">
                <div className="home-swiper">
                    <ReactSwiperHome imgList={ imgs } />
                </div> 
                <div className="home-text">欢迎来到首页</div>
            </div>
        )
    }
}

export default Home