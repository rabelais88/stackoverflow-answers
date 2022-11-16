stackoverflow answer to https://stackoverflow.com/questions/74410829/apache-proxy-to-reactjs-page

This uses subdomain. [Hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) must be modified in order to test it in local environment.
```plaintext
# hosts file
localhost	sample.test
localhost	react.sample.test
```

```sh
# docker is required to run this demo
$ docker-compose up
# try access sample.test or react.sample.test
```