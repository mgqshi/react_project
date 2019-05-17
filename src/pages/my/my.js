import React, { Component } from 'react'
import { connect } from 'react-redux'

require('@pageCss/my/my.less')

class My extends Component{

    render () {
        return (
            <div className="my-page">欢迎来到我的页面</div>
        )
    }
}


export default connect( 
    state => state
)(My)

