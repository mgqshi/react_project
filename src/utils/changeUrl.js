import history from '@/routers/history';

/**
 * @param {跳转的url地址} 可为地址,也可以是一个带参数的对象 
 */
const goPage = (url)=>{
    if(history&&url){
        history.push(url);
    }
}

export { goPage };