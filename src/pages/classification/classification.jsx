import React,{Component} from 'react'
import { Link } from 'react-router-dom'

require('@pageCss/classification/classification.less')


class Classification extends Component{
    render () {
        return <div className="classification-page">
            欢迎来到分类
            <br/>
            <Link to="/home">go home</Link>
        </div>
    }
}

export default Classification