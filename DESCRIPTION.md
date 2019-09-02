# NomadCoders [ReactJS로 웹서비스 만들기](https://academy.nomadcoders.co/p/reactjs-fundamentals)

## # react LifeCycle

> 1. constructor

```
constructor(props) {
    // 컴포넌트가 생성 될 때 실행 됨
    super(props);
    console.log("hello");
}
```

> 2. componentDidMount

```
componentDidMount() {
    // 처음 렌더링 된 후에만 호출 됨
    console.log("component rendered");
}
```

> 3. render

```
render() {
    // 렌더링 될 때마다 실행 됨
    console.log("I'm rendering");
    return (
        <div>

        </div>
    );
}
```

> 4. componentDidUpdate

```
componentDidUpdate() {
    // 변경 사항이 발생하여 render 호출 된 이후 호출 됨
    console.log("I just Update");
}
```

## # github.io deploy

> 1. npm i gh-pages

> 2. package.json의 deploy, predeploy 스크립트 및 homepage 설정 추가

```
scrpit 내의 키는 pre를 붙여줄 경우 먼저 실행 후 실제 입력한 명령어의 스크립트를 실행 한다.

npm run deploy
=> predeploy 실행 후 deploy 실행
```

> 3. npm run build 명령을 통한 프로젝트 소스 배포용으로 빌드

> 4. npm run deploy 로 소스 업로드
