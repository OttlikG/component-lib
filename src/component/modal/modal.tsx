import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root') as HTMLElement

export default class Modal extends Component {
    el: HTMLElement = document.createElement('div')

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}
