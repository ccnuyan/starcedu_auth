# TEST

## test server deployment

### nginx 
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

            location / { # by yan zhonghua
                # frontend
                proxy_pass http://localhost:8000/; # 本地应用服务器
            }
        }
    }

```

### docker

    docker pull postgres
    docker run -d -p 5432:5432 --name database postgres:latest

    docker pull node:8
    docker build -t starcedu:0.0.1 .

    docker run -p 8000:8000 --env-file ./docker-env-lists/test.env --name starcedu00101 starcedu:0.0.1

## test client configuration

### hosts

添加一条域名指向信息至 C:\Windows\System32\drivers\etc\hosts
```
$test_server_ip	www.syncollege.com
```