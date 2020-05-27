/**
 * Created by extra_zhao on 2019/1/10.
 */
import { get, post } from '../../baseConfig/http'
import apiConfig from '../../baseConfig/apiConfig'

// 上传代课信息
export const test1 = params => get(apiConfig.testApi.test1, params);
export const test2 = params => get(apiConfig.testApi.test2, params);
export const test3 = params => post(apiConfig.testApi.test3, params);