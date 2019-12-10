# redbag-session-web-app-frontend

## run on your local machine

```sh
mkdir -p demo-web && cd demo-web
```

## Frontend
```sh
git clone git@github.com:idev4u/redbag-session-web-app-frontend.git frontend-web-app
cd frontend-web-app
```

Init the project demo-app is creating the environment
```sh
$ eb init demo-app -p node.js --region eu-west-1
```

create the app runtime box, it will autmagically deploy the app
```sh
eb create frontend-web-app
```

Open the browser with the url open http://.....

## Backend

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
