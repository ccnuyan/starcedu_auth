# 应用开发服务器的配置（Windows系统）
## 添加一条域名指向信息至 C:\Windows\System32\drivers\etc\hosts
```
127.0.0.1	www.syncollege.com
```
## Nginx 配置信息
```
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        # server entry
        listen  80;
        
        location /apps/disk/ { # by yan zhonghua
            # frontend
            proxy_pass http://yan-7700:19000/; # 本地应用服务器
        }

###### 应用配置开始

        location /apps/notebook/ {
            # frontend
            proxy_pass http://localhost:9000/; # 本地应用服务器
        }

        location /apps/lrs/ {
            # frontend
            proxy_pass http://localhost:9000/; # 本地应用服务器
        }

###### 应用配置结束

        location / {  # by yan zhonghua
            # frontend
            proxy_pass http://yan-7700:9000/; # 认证服务器
        }
    }
}
```

之后通过以下地址访问  

认证系统  
http://www.syncollege.com  
应用  
http://www.syncollege.com/apps/notebook