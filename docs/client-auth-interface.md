# API for local apps

调用本页所有服务使用 Http Baisc Authentication：需要添加 Header

`starcedu-tenant-authorization: basic ${base64encode(tenant_id:tenant_pass)}`

其中 `tenant_id/tenant_pass` 由系统管理员提供

### 1. 使用 Openid 登入

Endpoint: `/api/tenant/oauth/oauth_signin`  
Method: `POST`  
Params: 
```
{
  provider: 'qq_mobile',
  unique_provider_id: '12345678',
}  
```
* 无此OAuth用户
```
status[400]: { message: 'oauth user not exist' }
```
* 此OAuth用户未绑定系统用户
```
status[400]: { message: 'oauth user not bound yet' }
```
* 成功认证
```
status[200]: { 
    message: 'oauth signin successfully',
    data:{ 
        id: '261347346179164070',
        username: 'user@test.com',
        token: $token 
    } 
}
```

### 2. 注册OAuth用户


Endpoint: `/api/tenant/oauth/oauth_signup`  
Method: `POST`  
Params: 
```
{
  provider: 'qq_mobile',
  unique_provider_id: '12345678',
  profile: $object
}  
```
* 未提供Profile
```
status[400]: { message: 'profile empty' }
```
* 注册成功
```
status[200]: { 
    message: 'oauth user created',
    data:{ 
        id: '261349563925791760',
        user_id: null,
        unique_provider_id: '12345678',
        provider:'qq_mobile',
        profile: { } 
    } 
}
```

### 3. 注册并绑定认证系统用户

Endpoint: `/api/tenant/oauth/bind_signin`  
Method: `POST`  
Params: 
```
{
  oauth_user_id: '87654321',
  username: 'user@test.com',
  password: 'testpass'
} 
``` 
* 注册成功
```
status[200]: { 
    message: 'register successfully'
    data:
    { 
        id: '261357346305869078',
        username: 'newuser@test.com',
        token: $token 
    }
}
```

### 4. 登入并绑定认证系统用户

Endpoint: `/api/tenant/oauth/bind_signup`  
Method: `POST`  
Params:
```
{
  oauth_user_id: '87654321',
  username: 'user@test.com',
  password: 'testpass'
} 
``` 
* 登入成功
```
status[200]: { 
    message: 'authenticate and bind successfully',
    data: { 
        id: '261356838576981227',
        username: 'user@test.com',
        token: $token 
    } 
}
```