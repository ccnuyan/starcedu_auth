# API for local apps

## user api

1. 登入

Endpoint: `/api/:from/user/signin`  
Method: `POST`  
Params: `username(email), password`  
```
status[200]:status[200]:{  
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
   "message":"authenticate successfully"
}
```
With valid `oauthUser` object in session
```
status[200]:status[200]:{  
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
      "username":"ccnuyan@gmail.com33",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"register successfully",
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
      "username":"ccnuyan@gmail.com33",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"register successfully",
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
      "username":"ccnuyan@gmail.com",
      "gender":null,
      "nickname":null,
      "role":10,
      "success":true,
      "message":"authenticate successfully"
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
```
```

5. 第三方登出

Endpoint: `/api/:from/oauth/3rd_party_signout`  
Method: `GET`  
No Params
```
```

6. 第三方解绑

Endpoint: `/api/:from/oauth/unlink`  
Method: `PUT`  
Params: `oauth_user_id, password`
```
```
---
```
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