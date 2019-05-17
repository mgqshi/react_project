import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//路由守卫
import Authuser from './authuser'


//首页组件
import Home from '@/pages/home/home'
//分类页面
import Classification from '@/pages/classification/classification'
//购物车模块
import ShopCart from '@/pages/shopCart/shopCart'
//我的模块
import My from '@/pages/my/my'


export default class RouterOne extends Component{
    render () {
        return (
            <Switch>
                <Route path="/" exact render={ ()=>(<Redirect to="/home" />) }></Route>
                <Authuser path="/home" component={ Home } title="首页"></Authuser>
                <Authuser path="/classification" component={ Classification }  title="分类"></Authuser>
                <Authuser path="/shop_cart" component={ ShopCart }  title="我的购物车"></Authuser>
                <Authuser path="/my" component={ My }  title="我的"></Authuser>
            </Switch>
        )
    }
    
}