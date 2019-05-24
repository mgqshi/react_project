import React,{Component} from 'react'

//search组件
import Search from '@/components/search'

require('@pageCss/classification/classification.less')

//条件类别选择
class Classify extends Component{
    render () {
        return(
            <div className="class-box">
                <div className="class-item"><span className="active">手机</span></div>
                <div className="class-item"><span>平板</span></div>
                <div className="class-item"><span>配件</span></div>
            </div>
        )
    }
}

//手机品牌栏
class Brand extends Component{
    render () {
        return(
            <ul className="brand-list">
                <li className="active">iPhone</li>
                <li>vivo</li>
                <li>华为</li>
                <li>小米</li>
                <li>三星</li>
                <li>魅族</li>
                <li>荣耀</li>
            </ul>
        )
    }
}

const phones = [
    {id:0,title:'iPhone XS Max',img:''},
    {id:1,title:'iPhone X',img:''},
    {id:2,title:'iPhone 7 plus',img:''},
    {id:3,title:'iPhone 6s',img:''},
    {id:4,title:'iPhone 6 plus',img:''},
]
//手机列表栏
class PhoneItem extends Component{
    render () {
        return(
            <div className="classify-phone-item">
                <div className="classify-phone-img">
                    {/* <img src={this.props.img} alt=""/> */}
                </div>
                <div className="classify-phone-title">{this.props.title}</div>
            </div>
        )
    }
}
class PhoneList extends Component{
    render () {
        return(
            <div className="phone-content">
                <div className="phone-advert"></div>
                <div className="classify-phone-list">
                    {
                        this.props.phoneList.map((item)=>{
                            return <PhoneItem title={item.title} img={item.img} key={item.id}  />
                        })
                    }
                </div>
            </div>
        )
    }
}


class Classification extends Component{
    render () {
        return (
            <div className="classification-page">
                <Search inputColor="#f0f0f0" />
                <Classify />
                <div className="classify-content">
                    <div className="classify-brand">
                        <Brand />
                    </div>
                    <div className="classify-list">
                        <PhoneList phoneList={phones} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Classification