import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class PageHeader extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="clear-fix" id='home-header'>
                <div className="float-left home-header-left">
                    <span>{this.props.cityName}</span>    
                    &nbsp;    
                    <i className="icon-angle-down"></i>  
                </div>
                <div className="float-right home-header-right"><i className="icon-user"></i></div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHeader