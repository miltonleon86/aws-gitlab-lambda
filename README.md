
# Serverless Deployment Boilerplate

Feel free to start from here but if you are new into AWS Lambda and the Serverless framework 
I would advise to take a look at the following article also written by me:

[AWS Docker Gitlab Serverless - The easy way](https://miltonleon.medium.com/aws-docker-gitlab-serverless-the-easy-way-42e09a64f894)


```$bash
We need to make sure we are building same node env as we have in AWS Lambda.

Docker 
Node 12
AWS lambda node 12 runtime
```

## Local Environment

* This is already integrated with docker - Check docker-compose.yml
```$bash
docker-compose up -d
```
* URL: [Here](http://0.0.0.0/serverless/hello)

## Pipeline and Local Testing
* If you want to test locally just run from inside the container npm test.
* Tests inside the featureTests folder. 
* Tests are executed automatic via gitlab pipeline.
* Check gitlab-ci.yml test stage.

## Prod Deployment
* Gitlab AWS Lambda user is already created in AWS account, you should do the same.
* `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are included in the secrets on gitlab, use same user for other deployments.
* Deployment will launch manually and deployed on AWS using Gitlab pipeline.
* Example deployment Url could be something like: https://hjdjshdk65.execute-api.eu-west-1.amazonaws.com/serverless/hello

## Gitlab Pages Production Tests
* Gitlab Pages are an integration between Gitlab and AWS Gateway. We should be able to test the deployed function from a Gitlab
landing page. Check GitLab pages for documentation.




