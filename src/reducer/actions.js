//改变头部标题
const router_title = (title,path) => ({
    type : 'CHANGE_TITLE',
    title,
    path
})

//储存路由history
// const route_history = ($route) => ({
//     type : 'ROUTE_HISTORY',
//     $route
// })

export {
    router_title
}
