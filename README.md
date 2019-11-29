# redbag-session-web-app-frontend

## run on your local machine

```sh
git clone git@github.com:idev4u/redbag-session-web-app-frontend.git
cd redbag-session-web-app-frontend
```

setup the backend
```
export API_ENDPOINT=http://web-app-backend.xxxx.elasticbeanstalk.com
```
start the front end
```sh
npm start
```

## run on aws beanstalk
### setup the environment

```sh
eb printenv
```
```sh
eb setenv API_ENDPOINT=http://web-app-backend.xxxx.elasticbeanstalk.com
```

### deploy
```sh
eb deploy
```
