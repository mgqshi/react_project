import React,{Component} from 'react'
import { goPage } from '@utils/changeUrl'

require('@pageCss/recover/evaluate.less')


//进度条
class ProgressCom extends Component{
    render () {
        let nowStyle = {
            width : (this.props.step/11)*100 + '%'
        }
        return(
            <div className="evaluate-progress-box">
                <div className="evaluate-progress-text">
                    当前估价机型：iPhone 6S <span>{this.props.step}/11</span>
                </div>
                <div className="evaluate-progress-now" style={nowStyle}></div>
            </div>
        )
    }
}

//评测项目
class EvaluateItemChexkbox extends Component{
    constructor (props){
        super(props);
        this.chooseItem = this.chooseItem.bind(this);
    }
    //点击选择项目以后
    chooseItem (){
        //状态提升
        this.props.chooseEnter({label : this.props.label, value : this.props.value });
    }
    render () {
        return(
            <div className="evaluate-item-checkbox" onClick={this.chooseItem}>{this.props.label}</div>
        )
    }
}
class EvaluateItem extends Component{

    constructor (props){
        super(props);
        this.chooseItem = this.chooseItem.bind(this);
    }

    //接收子组件返回内容
    chooseItem (val){
        //告诉父组件我已经选择
        this.props.isChoose(val,this.props.idx)
    }

    render () {
        let children_1 = '',children_2='';
        //判断是否显示
        if(this.props.isShow){
            children_1 = <div className="evaluate-item-title">{this.props.title}</div>
            children_2 = <React.Fragment>
                            {
                                this.props.rows.map((item,idx)=>{
                                    return <EvaluateItemChexkbox label={item.label} value={item.id} chooseEnter={this.chooseItem} key={idx} />
                                })
                            }
                        </React.Fragment>
        }else{
            children_1 = <React.Fragment>
                            <div className="evaluate-item-title">{this.props.title}<span>{this.props.tips}</span></div>
                            <div className="evaluate-item-right"></div>  
                        </React.Fragment>
            children_2 = ''
        }

        return(
            <div className="evaluate-item">
                <div className="evaluate-item-box" onClick={()=>this.chooseItem('toggle')}>
                    { children_1 } 
                </div>
                { children_2 }
            </div>
        )
    }
}


let list = [
    { id : 0, type : 'zx', title : '是否可以注销', tips : '', layer : '' ,data : [{ label : '可以注销或无账户', value : 0}, { label : '系统账户无法注销', value : 1} ]},
    { id : 1, type : 'bb', title : '型号版本', tips : '', layer : '' ,data : [{ label : '日版', value : 0}, { label : '美版', value : 1}, { label : '欧版', value : 2}, { label : '国行', value : 3} ]},
    { id : 2, type : 'qd', title : '购买渠道', tips : '', layer : '' ,data : [{ label : '实体店', value : 0}, { label : '京东', value : 1}, { label : '淘宝', value : 3} ]},
]

//页面主入口
class Evaluate extends Component{

    constructor(props){
        super(props);
        //给对象中添加一条属性
        list = list.map((item)=>{
            item.isShow = true;
            return item;
        })
        this.state = {
            step:0,
            lists:[list[0]]
        }
        this.getChoose = this.getChoose.bind(this);
        // this.changList = this.changList.bind(this);
    }

    //改变数组对象的値
    changList(idx, val = null){
        let lists = this.state.lists
        lists.map((v, i) => {
            if (i === idx) {
                v.isShow = !v.isShow
                v.tips = val&&val.label ? val.label :  v.tips
                this.setState(state => ({
                    lists: lists
                }))
            }
        })
    }

    //当选择値以后隐藏或者点击展开
    getChoose(val,idx){
        if(val === 'toggle'){
            this.changList(idx);
        }else{
            this.setState({
                step : this.state.lists.length 
            })
            //更新数据中的isShow隐藏当前已选项目
            this.changList(idx, val);
            //当选择完之后如果还有下一项将显示
            if(idx < list.length-1 && idx === this.state.lists.length - 1){
                let list_a = this.state.lists
                list_a.push(list[list_a.length])
                this.setState({
                    lists : list_a
                })
                console.log(this.state.lists)
            }
        }
    }

    render () {
        let btnStr = '';
        if(this.state.lists.length === list.length){
            btnStr = <React.Fragment>
                        <div className="evaluate-submit">
                            <div className="evaluate-submit-btn" onClick={()=>goPage('/evaluation')}>查看预估价</div>
                        </div>
                    </React.Fragment>
        }

        return(
            <div className="evaluate-page">
                <ProgressCom step={this.state.step} />
                {
                    this.state.lists.map((item,index)=>{
                        return <EvaluateItem idx={index} title={item.title} tips={item.tips} isShow={item.isShow} isChoose={this.getChoose} key={item.id} rows={item.data} />
                    })
                    
                }
                {btnStr}
            </div>
        )
    }
} 


export default Evaluate;