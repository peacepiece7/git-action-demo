# npm ci error

https://github.com/vercel/next.js/issues/30731 참고

`npm i next@canary`

- window에서 docker를 만들 땐 canary 경로를 못찾는 에러가 남..

## .github workflow

DEPLOY.yaml

- 아래 코드 package.json의 name으로 수정
  `CONTAINER_NAME: git-action-demo`

- docker file name도 package.json의 name으로 수정 (package.json의 scripts 부분 변경해주면 됨)

```json
{
  "scripts": {
    "build:docker": "docker build -t git-action-demo .",
    "start:docker": "docker run -p 3000:3000 git-action-demo"
  }
}
```
