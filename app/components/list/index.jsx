import React from 'react'
import ReactPureMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Item from './item'

class List extends React.Component{
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = ReactPureMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        let data = this.props.data
        return (
            <div>
                {
                    data.map((item, index) => {
                        return <Item data={item} key={index}/>
                    })
                }
            </div>
        )
    }
}

export default List