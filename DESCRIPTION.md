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
