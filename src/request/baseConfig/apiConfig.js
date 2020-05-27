/**
 * Created by extra_zhao on 2018/12/20.
 */
const apiConfig = {
    /*首页*/
    indexApi:{
        bannerList:"admin.php/index/banner/getBannerList"
    },
    /*上传*/
    uploadApi:{
        uploadDaike:"upload/upload/daike"
    },
    userApi:{
        login:"user/user/login"
    },
    testApi:{
        test1:"test/test/getListFirst",
        test2:"test/test/getListSecond",
        test3:'test/test/getListThird'
    }
}

export default apiConfig