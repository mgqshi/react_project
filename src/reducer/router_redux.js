//路由动态管理数据
export default function router_data(state = {
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