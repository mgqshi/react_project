import React,{Component} from 'react'
import { goPage } from '@utils/changeUrl'

require('@pageCss/recover/evaluate_success.less')

class EvaluationSuccess extends Component{
    render () {
        return (
            <div className="evaluation-success-page">
                <div className="evaluation-success-one">
                    <div className="evaluation-success-one-img"></div>
                    <div className="evaluation-success-one-text">提交成功啦~</div>
                </div>
                <div className="evaluation-success-two">
                    <div className="evaluation-success-order">订单编号：201848548084184848048047</div>
                    <p>1、请保持手机畅通，顺丰小哥将尽快联系您上门取件。</p>
                    <p>2、因订单估价未超过200元，请您先行垫付运费，交易完成时全额返还，但最高不超过15元。</p>
                    <div className="evaluation-success-btns">
                        <div className="evaluation-success-btn" onClick={()=>goPage('/home')}>返回首页</div>
                        <div className="evaluation-success-btn">查看订单</div>
                    </div>
                </div>
                <div className="evaluation-success-three"></div>
            </div>
        )
    }
}

export default EvaluationSuccess