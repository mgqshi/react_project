
//路由动态管理数据
const router_data =  function(state = {
    title : '爱趣换,一家专注于二手机的平台'
},action){
    switch (action.type){
        //头部标题的变化以及底部图片的变化
        case 'CHANGE_TITLE':
            return {
                title : action.title,
                path : action.path
            };
        default:
            return state;
    }
}

//储存的路由信息,便于路由跳转
// const $route =  function(state = {
//     $route : null
// },action){
//     switch (action.type){
//         case 'ROUTE_HISTORY':
//             console.log(action);
//             return {
//                 ...action.$route
//             };
//         default:
//             return state;
//     }
// }

export {
    router_data,
    // $route
}