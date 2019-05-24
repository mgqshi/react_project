import React, { Component } from 'react'

require('@componentCss/search.less')

class Search extends Component{
    constructor (props) {
        super(props);
        this.state = {
            inputColor:this.props.inputColor?this.props.inputColor:'',
        }
    }

    render () {
        return (
            <div className="search-box">
                <div className="search-input">
                    <input type="text" style={{'background':this.state.inputColor}} />
                </div>
                <div className="search-icon" style={{'background':this.state.inputColor}}></div>
            </div>
        )
    }
}

export default Search;