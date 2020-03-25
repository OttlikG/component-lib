import React from 'react'
import BreadCrumb from './bread-crumb'

export default {
    title: 'Atom/BreadCrumb'
}

const list = [
    { href: '#/home', name: 'Home' },
    { href: '#/blog', name: 'Blog' },
    { href: '#sidebar-right', name: 'Sidebar Right' }
]

export const basic = () => <BreadCrumb list={list} float='left' />
