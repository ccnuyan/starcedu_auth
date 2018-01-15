# 用户 Token 认证

>FOR  
`local_tenant_client_app`  

用户Token认证需要加 Header

`authorization: bearer ${access_token}`

其中 `access_token` 有几种获得方式

1 `local_tenant_client_app` 调用用户登入接口后获得

2 `oauth_tenant_web_app` 使用OAuth服务登入后获得

__PS__： `local_tenant_web_app` 在任何时候不需要此认证

# 用户 Token 解析

>FOR  
`local_tenant_web_app` [backend as server] 

使用json web token标准

secret的开发配置是'12345678'.  
secret生产环境的配置再定.


