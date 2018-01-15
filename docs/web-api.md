# API for local apps

## Endpoint: `/api/:from/*`
from有两个值:
1. local:  
    面向域内应用，使用cookie认证，调用时需要携带cookie  
2. tenant:  
    面向域外应用或客户端，使用token认证，调用用户相关服务时需要携带token  
    此外这种情况下所有服务使用 Http Baisc Authentication：需要添加租户认证的 Header：

`starcedu-tenant-authorization: basic ${base64encode(tenant_id:tenant_pass)}`

其中 `tenant_id/tenant_pass` 由系统管理员提供  

## API

1. 登入
Endpoint: `/api/:from/user/signin`  
Method: `POST`  
Params: `username(email), password`  
```
status[200]:{  
   "data":{  
      "id":"251795677628072963",
      "username":"user@test.com",
      "token":$string
   },
   "message":"authenticate successfully"
}
```
With valid `oauthUser` object in session
```
status[200]:{  
   "data":{  
      "id":"251795677628072963",
      "username":"user@test.com",
      "token":$string
   },
   "message":"authenticate and bind successfully"
}
```
---
```
status[400]:{"message":"username empty"}
status[400]:{"message":"password empty"}
status[400]:{"message":"provided username illigal"}
status[400]:{"message":"provided password illigal"}
status[400]:{"message":"credentials invalid"}
```

2. 注册
Endpoint: `/api/:from/user/signup`  
Method: `POST`  
Params: `username(email), password`  
```
status[200]:{  
   "data":{  
      "id":"255528588483232905",
      "username":"user@test.com",
      "token":$string
   },
   "message":"register successfully"
}
```
With valid `oauthUser` object in session
```
status[200]:{  
   "data":{  
      "id":"255528588483232905",
      "username":"user@test.com",
      "token":$string
   },
   "message":"bind and register successfully"
}
```
---
```
status[400]:{"message":"username empty"}
status[400]:{"message":"password empty"}
status[400]:{"message":"provided username illigal"}
status[400]:{"message":"provided password illigal"}
status[400]:{"message":"user with this username already existed"}
```

3. 更新密码
Endpoint: `/api/:from/user/update_password`  
Method: `PUT`  
Params: `old_password, new_password`
```
status[200]:{  
   "data":{  
      "id":"251795677628072963",
      "username":"user@test.com",
   },
   "message":"authenticate successfully"
}
```
---
```
status[400]:{"message":"old_password empty"}
status[400]:{"message":"new_password empty"}
status[400]:{"message":"provided old_password illigal"}
status[400]:{"message":"provided new_password illigal"}
status[400]:{"message":"credentials invalid"}
```

4. 登出
Endpoint: `/api/:from/user/signout`  
Method: `GET`  
No Params

5. 第三方登出
Endpoint: `/api/:from/oauth/3rd_party_signout`  
Method: `GET`  
No Params

6. 第三方解绑
Endpoint: `/api/:from/oauth/unlink`  
Method: `PUT`  
Params: `oauth_user_id, password`

__PS:__ API调用参数以JSON形式放在请求体中, 以API 1. 登入 为例，HTTP请求全文为
```
POST $domain/api/:from/user/signin HTTP/1.1
Host: www.syncollege.com
Connection: keep-alive
Content-Length: 68
accept: application/json
Origin: $domain
User-Agent: User-Agent
content-type: application/json
Referer: $domain/user/signin
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: $cookie

{"username":$string,"password":$string}
```