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