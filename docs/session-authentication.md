# Session 认证

##Session

secret的开发配置是'12345678'.  
secret生产环境的配置再定.

key: 'connect.sid'  
HTTPonly

# How to construct session's id in redis:

## Session ID Format

value: 
```
  s:${crypto.createHmac('sha256', secret)
      .update(decodeURIComponent(sesionid))
      .digest('base64')
      .replace(/\=+$/, '')}
```

Redis id prefix: 'sess:'

### Example:

* connect.sid:
`s%3AzlV2novTfZbZb2ocU7f383zY9yESBgQG.pDyFCoZoVKNLa%2FpIAE%2FaDx2ueXwWAYHm1%2Bra0cqo5fU`

* url decoded:
`s:zlV2novTfZbZb2ocU7f383zY9yESBgQG.pDyFCoZoVKNLa/pIAE/aDx2ueXwWAYHm1+ra0cqo5fU`

* verification:  
```
crypto.createHmac('sha256', '12345678')
      .update('zlV2novTfZbZb2ocU7f383zY9yESBgQG')
      .digest('base64')
      .replace(/\=+$/, '') 
```

`pDyFCoZoVKNLa/pIAE/aDx2ueXwWAYHm1+ra0cqo5fU`

* session id in redis:  
`sess:zlV2novTfZbZb2ocU7f383zY9yESBgQG`
#
RETURNING:
```
{
  "cookie": {
    "originalMaxAge": 1209600000,
    "expires": "2018-01-19T01:18:56.535Z",
    "httpOnly": true,
    "path": "/"
  }, // cookie 字段只供参考
  "oauthUser": // 无用, 
  "user": {
    "id": "267207801858688392",
    "username": "ccnuyan@gmail.com",
    "gender": // 暂无,
    "nickname": // 暂无,
    "role": -1 // 暂无意义,
    "success": true,
    "message": "authenticate successfully",
    "token": // 无用，计划取消此字段
  }
}
```

## Endpoints:

注册：/user/signup?cb={$callbackurl}  
登入：/user/signin?cb={$callbackurl}  
登出：/user/signout  