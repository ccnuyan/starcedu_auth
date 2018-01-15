## tenant authenticatoin

>FOR  
`local_tenant_client_app`  
`local_tenant_web_app` [backend as client]  
`oauth_tenant_web_app` [backend as client]  

tenant authenticatoin 使用 Http Baisc Authentication：需要添加 Header   
key: `starcedu-tenant-authorization`  
value: `basic ${base64encode(tenant_id:tenant_pass)}`  

其中 `tenant_id/tenant_pass` 由系统管理员提供

