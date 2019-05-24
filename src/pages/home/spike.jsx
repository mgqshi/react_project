import React,{Component} from 'react'
import { connect } from 'react-redux'

require('@pageCss/home/spike.less')

class Spike extends Component{
    render () {
        console.log(this.props);
        return(
            <div className="spike-page">

            </div>
        )
    }
} 


export default connect(
    state => state
)(Spike);