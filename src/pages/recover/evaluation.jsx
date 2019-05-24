import React,{Component} from 'react'
import { goPage } from '@utils/changeUrl'

require('@pageCss/recover/evaluation.less')


//评估价格
class EvaluationPric extends Component{
    
    render () {
        return(
            <div className="evaluation-price">
                <div className="evaluation-phone-msg">
                    <div className="evaluation-phone-name">iPhone 6S</div>
                    <div className="evaluation-phone-price">￥<span>2659</span></div>
                    <div className="evaluation-phone-replace">重新估价</div>
                </div>
                <div className="evaluation-phone-tips">对估价存在疑问？点击马上咨询商城客服人员吧！</div>
            </div>
        )
    }
}

//估价流程
class EvaluationProcedureItem extends Component{
    render () {
        return (
            <div className="evaluation-procedure-item">
                <div className="evaluation-procedure-item-img"></div>
                <div className="evaluation-procedure-item-text">{this.props.title}</div>
            </div>
        )
    }
}
class EvaluationProcedure extends Component{

    render () {
        return(
            <div className="evaluation-procedure">
                <div className="evaluation-procedure-title">透明质检  全网比价</div>
                <div className="evaluation-procedure-tips">机器寄出后最快仅需1天完成交易</div>
                <div className="evaluation-procedure-list">
                    <EvaluationProcedureItem title="机型估价" />
                    <EvaluationProcedureItem title="机型估价" />
                    <EvaluationProcedureItem title="机型估价" />
                    <EvaluationProcedureItem title="机型估价" />
                </div>
            </div>
        )
    }
}

//价格波动echarts
class EvaluationEcharts extends Component{
    render () {
        return (
            <div className="evaluation-echarts-chart"></div>
        )
    }
}

//input item
class EvaluationPostItemRow extends Component{
    render () {
        let btns ='',labels='',noLabelStyle = null;
        if(this.props.isBtn){
            btns = <div className="evaluation-post-item-btn">获取验证码</div>
        }
        if(!!this.props.label){
            labels = <div className="evaluation-post-item-label">{this.props.label}</div>
            noLabelStyle = { width : '100%' };
        }
        return(
            <div className="evaluation-post-item-row">
                {labels}
                <div className="evaluation-post-item-input" style={noLabelStyle}>
                    <input type="text" placeholder={this.props.placeholder} />
                </div>
                {btns}
            </div>
        )
    }
}
//顺丰到家
class EvaluationPostCome extends Component{
    render () {
        return(
            <div className="evaluation-post-come">
                <div className="evaluation-post-item-tips">寄件时请选择“运费到付”，并保持手机通畅。</div>
                <div className="evaluation-post-item">
                    <div className="evaluation-post-item-title">联系方式</div>
                    <div className="evaluation-post-item-form">
                        <EvaluationPostItemRow label="联系人" placeholder="请输入联系人" />
                        <EvaluationPostItemRow label="手机号" placeholder="请输入手机号" />
                        <EvaluationPostItemRow label="验证码" placeholder="请输入验证码" isBtn={true} />
                    </div>
                </div>
                <div className="evaluation-post-item">
                    <div className="evaluation-post-item-title">取件地址</div>
                    <div className="evaluation-post-item-form">
                        <EvaluationPostItemRow  placeholder="请选择邮寄地址" />
                        <EvaluationPostItemRow  placeholder="请输入详细地址" />
                    </div>
                </div>
            </div>
        )
    }
}
//自行邮寄
class EvaluationPostGo extends Component{
    render () {
        return(
            <div className="evaluation-post-come">
                <div className="evaluation-post-item-tips">使用顺丰速运请选择“运费到付”，使用其他快递请先垫付运费，交易完成时全额返还。</div>
                <div className="evaluation-post-item">
                    <div className="evaluation-post-item-title">联系方式</div>
                    <div className="evaluation-post-item-form">
                        <EvaluationPostItemRow label="联系人" placeholder="请输入联系人" />
                        <EvaluationPostItemRow label="手机号" placeholder="请输入手机号" />
                        <EvaluationPostItemRow label="验证码" placeholder="请输入验证码" isBtn={true} />
                    </div>
                </div>
                <div className="evaluation-post-item">
                    <div className="evaluation-post-item-title">邮寄地址</div>
                    <div className="evaluation-post-item-box">
                        <p>爱趣换  18819601520</p>
                        <p>深圳市南山区科苑路15号科兴科学园B4单元601号</p>
                    </div>
                </div>
            </div>
        )
    }
}
//选择邮寄方式 
class EvaluationPost extends Component{
    constructor(props){
        super(props)
        this.state = { tab_type : 1 };
        this.toggleTab = this.toggleTab.bind(this);
    }

    //切换tab
    toggleTab(type){
        this.setState({tab_type:type});
    }

    render () {
        let tabStr = <EvaluationPostCome />
        if(this.state.tab_type === 2){
            tabStr = <EvaluationPostGo />
        }
        return(
            <div className="evaluation-post">
                <div className="evaluation-post-title">选择回收方式</div>
                <div className="evaluation-post-tab">
                    <div className={this.state.tab_type === 1?"evaluation-post-tab-item active":"evaluation-post-tab-item"} onClick={()=>this.toggleTab(1)}>顺丰上门</div>
                    <div className={this.state.tab_type === 2?"evaluation-post-tab-item active":"evaluation-post-tab-item"} onClick={()=>this.toggleTab(2)}>自行邮寄</div>
                </div>
                {tabStr}
            </div>
        )
    }
}

//支付宝
class Alipay extends Component{
    render () {
        return(
            <div className="evaluation-alipay">
                <EvaluationPostItemRow label="支付宝姓名" placeholder="请输入支付宝姓名" />
                <EvaluationPostItemRow label="支付宝账户" placeholder="请输入支付宝账户" />
            </div>
        )
    }
}
//银行卡
class Bankcard extends Component{
    render () {
        return(
            <div className="evaluation-bankCard">
                <EvaluationPostItemRow label="银行名称" placeholder="请选择" />
                <EvaluationPostItemRow label="真实姓名" placeholder="请输入您的真实姓名" />
                <EvaluationPostItemRow label="借记卡" placeholder="请输入借记卡卡号" />
            </div>
        )
    }
}
//收款方式
class EvaluationReceivable extends Component{
    constructor(props){
        super(props)
        this.state = { tab_type : 1 }
        this.toggleTab = this.toggleTab.bind(this);
    }

    // 切换tab
    toggleTab(type){
        this.setState({ tab_type : type })
    }

    render () {
        let tabStr = <Alipay />;
        if(this.state.tab_type === 2){
            tabStr = <Bankcard />
        }
        return(
            <div className="evaluation-receivable">
                <div className="evaluation-receivable-title">收款方式</div>
                <div className="evaluation-receivable-tabs">
                    <div className={this.state.tab_type===1?"evaluation-receivable-tab active":"evaluation-receivable-tab"} onClick={()=>this.toggleTab(1)}>
                        <span>支付宝收款</span>
                    </div>
                    <div className={this.state.tab_type===2?"evaluation-receivable-tab active":"evaluation-receivable-tab"} onClick={()=>this.toggleTab(2)}>
                        <span>借记卡收款</span>
                    </div>
                </div>
                {tabStr}
            </div>
        )
    }
}


class Evaluation extends Component{

    //跳转


    render () {
        return (
            <div className="evaluation-page">
                <EvaluationPric />
                <div className="evaluation-getCoupon">现在出售旧机，即得500元购机优惠券！</div>
                <EvaluationProcedure />
                <div className="evaluation-echarts">
                    <div className="evaluation-echarts-title">价格波动趋势<span className="evaluation-echarts-tips">预计下周跌幅<span>100.00</span>元</span></div>
                    <div className="evaluation-echarts-contetn">
                        <EvaluationEcharts />
                    </div>
                </div>
                <EvaluationPost />
                <EvaluationReceivable />
                <div className="evaluation-read">
                    <div className="evaluation-read-check"></div>
                    <div className="evaluation-read-text">我已阅读并接受<span>《爱趣换交易条款与条件》</span></div>
                </div>
                <div className="evaluation-submit">
                    <div className="evaluation-submit-price">预估总价：<span>￥2659</span></div>
                    <div className="evaluation-btn" onClick={()=>goPage('/evaluatesu')}>立即回收</div>
                </div>
            </div>
        )
    }
}

export default Evaluation