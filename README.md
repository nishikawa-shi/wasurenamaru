# wasurenamaru

TypeScript based framework for executing routine work on AWS Lambda.

# development

## environment

npm 6.14.15
sam 1.35.0

## preparation

```:sh
npm install
ls functions/ | xargs -I {} npm install --prefix functions/{}
```

## build

```:sh
npm install
npm run build
```

## unit test

```:sh
npm install
npm run test
```

## local test

```:sh
npm install
sam build
sam local invoke <Your Function Name>
```

## deployment

```:sh
npm install
npm run build
sam build
sam deploy --guided
```
