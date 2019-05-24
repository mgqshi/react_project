import React, { Component } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

//路由守卫
import Authuser from './authuser'


//首页组件
import Home from '@/pages/home/home'
//分类页面
import Classification from '@/pages/classification/classification'
//回收模块
import Recover from '@/pages/recover/recover'
//购物车模块
import ShopCart from '@/pages/shopCart/shopCart'
//我的模块
import My from '@/pages/my/my'

//秒杀模块
import Spike from '@/pages/home/spike'

//回收估价
import Evaluate from '@/pages/recover/evaluate'
//预估价格
import Evaluation from '@/pages/recover/evaluation'
//预估提交成功
import EvaluateSuccess from '@/pages/recover/evaluate_success'


const routeConfig = [
    { path: '/', component: Home, title:"首页" },
    { path: '/home', component: Home, title:"首页" },
    { path: '/classification', component: Classification, title:"分类" },
    { path: '/recover', component: Recover, title:"回收" },
    { path: '/shop_cart', component: ShopCart, title:"购物车" },
    { path: '/my', component: My, title:"我的" },
    { path: '/spike', component: Spike, title:"秒杀" },
    { path: '/evaluate', component: Evaluate, title:"估价" },
    { path: '/evaluation', component: Evaluation, title:"预估价格" },
    { path: '/evaluatesu', component: EvaluateSuccess, title:"提交成功" },
  ]


//  export default routeConfig;

 const RouteApp = () =>
                <Switch>
                    <Route path="/"  exact render={ ()=>(<Redirect to="/home" />) } />
                    {routeConfig.map(({ path, component, title }, index) => (
                        <Authuser
                            key={index}
                            exact
                            path={path}
                            component={component}
                            title={title}
                        />
                    ))}
                </Switch>


// export default class RouteApp extends Component{
//     render () {
//         return (
//             <Switch>
//                 <Route path="/" exact render={ ()=>(<Redirect to="/home" />) }></Route>
//                 <Authuser path="/home" component={ Home } title="首页"></Authuser>
//                 <Authuser path="/classification" component={ Classification }  title="分类"></Authuser>
//                 <Authuser path="/recover" component={ Recover }  title="回收"></Authuser>
//                 <Authuser path="/shop_cart" component={ ShopCart }  title="我的购物车"></Authuser>
//                 <Authuser path="/my" component={ My }  title="我的"></Authuser>
//                 <Authuser path="/spike" component={ Spike }  title="秒杀抢购"></Authuser>
//                 <Authuser path="/evaluate" component={ Evaluate }  title="回收估价"></Authuser>
//                 <Authuser path="/evaluation" component={ Evaluation }  title="预估价格"></Authuser>
//                 <Authuser path="/evaluatesu" component={ EvaluateSuccess }  title="回收结果"></Authuser>
//             </Switch>
//         )
//     }
    
// }

export default RouteApp