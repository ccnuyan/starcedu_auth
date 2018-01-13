# API for local apps

## user api

1. 登入

Endpoint: `/api/:from/user/signin`  
Method: `POST`  
Params: `username(email), password`  
```
{  
   "data":{  
      "id":"251795677628072963",
      "username":"ccnuyan@gmail.com",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"authenticate successfully",
      "token":$string
   },
   "code":0,
   "message":"authenticate successfully"
}
```
With valid `oauthUser` object in session
```
{  
   "data":{  
      "id":"251795677628072963",
      "username":"ccnuyan@gmail.com",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"authenticate and bind successfully",
      "token":$string
   },
   "code":0,
   "message":"authenticate and bind successfully"
}
```
---
```
{"code":101,"message":"username empty"}
{"code":111,"message":"password empty"}
{"code":102,"message":"provided username illigal"}
{"code":112,"message":"provided password illigal"}
{"code":400,"message":"username/password invalid"}
```

2. 注册

Endpoint: `/api/:from/user/signup`  
Method: `POST`  
Params: `username(email), password`  
```
{  
   "data":{  
      "id":"255528588483232905",
      "username":"ccnuyan@gmail.com33",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"register successfully",
      "token":$string
   },
   "code":0,
   "message":"register successfully"
}
```
With valid `oauthUser` object in session
```
{  
   "data":{  
      "id":"255528588483232905",
      "username":"ccnuyan@gmail.com33",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"register successfully",
      "token":$string
   },
   "code":0,
   "message":"bind and register successfully"
}
```
---
```
{"code":101,"message":"username empty"}
{"code":111,"message":"password empty"}
{"code":102,"message":"provided username illigal"}
{"code":112,"message":"provided password illigal"}
{"code":400,"message":"user with this username already existed"}
```

3. 更新密码

Endpoint: `/api/:from/user/update_password`  
Method: `PUT`  
Params: `old_password, new_password`
```
{  
   "data":{  
      "id":"251795677628072963",
      "username":"ccnuyan@gmail.com",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"authenticate successfully"
   },
   "code":0,
   "message":"authenticate successfully"
}
```
---
```
{"code":121,"message":"old_password empty"}
{"code":131,"message":"new_password empty"}
{"code":122,"message":"provided old_password illigal"}
{"code":132,"message":"provided new_password illigal"}
{"code":400,"message":"credentials invalid"}
```

4. 登出

Endpoint: `/api/:from/user/signout`  
Method: `GET`  
No Params
```
{"code":0,"message":"user cookie cleared"}
```

5. 第三方登出

Endpoint: `/api/from/oauth/signout`  
Method: `GET`  
No Params
```
{"code":0,"message":"oauth session cleared"}
```

6. 第三方解绑

Endpoint: `/api/from/oauth/unlink`  
Method: `PUT`  
Params: `oauth_user_id, password`
```
{"code":0,"message":"oauth user unlink successfully"}
```
---
```
{"code":0,"message":"password invalid"}
```

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