# Deployment via PM2

Just prototype to show how to use PM2 for deployment

## Prerequisition

1. Server setup with git, pm2, nodejs, npm
  - Server must be able to checkout from git via ssh without asking any password
  - PM2 must start on server startup via

```shell
pm2 startup ubuntu
```

2. Make sure you have setup ssh key on your deployment machine to be able to connect to server via ssh

3. Deployment machine must install pm2

```shell
npm install pm2 -g
```

## Steps

1. You can setup folder structure on the server via command

```shell
pm2 deploy <configuration> <environment> setup
```

  - PM2 will setup folder structure on the server

2. Deploy via

```shell
pm2 deploy <configuration> <environment>
```