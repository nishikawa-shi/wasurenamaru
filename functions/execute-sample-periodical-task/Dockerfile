FROM public.ecr.aws/lambda/nodejs:14

COPY built/ package.json package-lock.json ./

RUN npm install

CMD ["app.lambdaHandler"]
