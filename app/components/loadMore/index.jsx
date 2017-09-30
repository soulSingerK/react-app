import React from 'react'
import ReactPureMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component{
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = ReactPureMixin.shouldComponentUpdate.bind(this)
        this.handLoadMore = this.handLoadMore.bind(this)
    }
    render() {
        let isLoadMore = this.props.isLoadMore
        return (
            <div className="load-more" ref="wrapper">
            {
                isLoadMore 
                ? <span>加载中。。。</span>
                : <span onClick={this.handLoadMore}>加载更多</span>
            }
            </div>
        )
    }
    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        let timer
        const wrapper = this.refs.wrapper
        const windowHeight = window.screen.height
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            if(top && top < windowHeight) {
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', ()=>{
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(callback, 50);
        }, false)
    }
    handLoadMore() {
        this.props.loadMoreFn()
    }
}

export default LoadMore