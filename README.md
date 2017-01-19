# Serverless Hello World

A few tiny labs to get started with Serverless.

## Setup
```
npm install -g serverless
aws configure --profile serverless-workshop
```

## Deploy
```
cd labX
# rename service within serverless.yml (e.g from serverlesss-hello-world to serverlesss-hello-world-andreaswittig)
AWS_PROFILE=serverless-workshop serverless deploy
```

## Cleanup
```
AWS_PROFILE=serverless-workshop serverless remove
```
