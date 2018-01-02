# API for local apps

### 1. 使用 Openid 登入

Endpoint: `/api/oauth/oauth_signin`  
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
{ code: 400, message: 'oauth user not exist' }
```
* 此OAuth用户未绑定系统用户
```
{ 
    code: 400,
    message: 'oauth user not bound',
    data: { 
        id: '261353152127698063',
        user_id: null,
        unique_provider_id: '12345678',
        provider: 'qq_mobile',
        profile: {
            nickname: 'lala' 
        } 
    } 
}
```
* 成功认证
```
{ 
    code: 0,
    message: 'oauth signin successfully',
    data:{ 
        id: '261347346179164070',
        username: 'user@test.com',
        gender: null,
        nickname: null,
        role: -1,
        success: true,
        message: '3rd party authenticate successfully',
        token: $token 
    } 
}
```

### 2. 注册OAuth用户


Endpoint: `/api/oauth/oauth_signup`  
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
{ code: 181, message: 'profile empty' }
```
* 注册成功
```
{ 
    code: 0,
    message: 'oauth user created',
    data:{ 
        id: '261349563925791760',
        user_id: null,
        unique_provider_id: '12345678',
        provider:'qq_mobile',
        profile: { 
            nickname: 'lala' 
        } 
    } 
}
```

### 3. 注册并绑定认证系统用户

Endpoint: `/api/oauth/bind_signin`  
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
{ 
    code: 0,
    message: 'register successfully'
    data:
    { 
        id: '261357346305869078',
        username: 'newuser@test.com',
        gender: null,
        nickname: null,
        role: -1,
        success: true,
        message: 'register successfully',
        token: $token 
    }
}
```

### 4. 登入并绑定认证系统用户

Endpoint: `/api/oauth/bind_signup`  
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
{ 
    code: 0,
    message: 'authenticate and bind successfully',
    data: { 
        id: '261356838576981227',
        username: 'user@test.com',
        gender: null,
        nickname: null,
        role: -1,
        success: true,
        message: 'authenticate and bind successfully',
        token: $token 
    } 
}
```