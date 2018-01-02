# Cookie 认证

## Cookie

key: 'authorization'  
maxage: 7 days  
HTTPonly

## Endpoints:

注册：/user/signup?cb={$callbackurl}
登入：/user/signin?cb={$callbackurl}  
登出：/user/signout

# How to resolve JWT

Cookie认证方式使用了json web token，解析的方式是

`jwt.verify(cookie/token, secret)`  

secret的开发配置是'12345678'.  
secret生产环境的配置再定.

RETURNING:
```
{
  id: '250330425996608514',
  username: 'ccnuyan@gmail.com',
  // 以下三个属性暂不使用
  gender: null,
  nickname: null,
  role: 10,
}
```