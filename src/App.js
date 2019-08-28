import React from "react";

function Food({ name, picture }) {
    return (
        <div>
            <h1>I Love {name}</h1>
            <img src={picture} alt="" />
        </div>
    );
}

const foodILike = [
    {
        name: "kimchi",
        image:
            "http://blogfiles.naver.net/20150603_66/harmony2154_14333061055283Pyea_JPEG/%B4%D9%B1%E8%C4%A13.jpg"
    },
    {
        name: "ramen",
        image:
            "http://blogfiles.naver.net/20131107_4/mkpark_88_1383797435291DSieE_JPEG/%B6%F3%B8%E9%C3%E0%C1%A62.jpg"
    },
    {
        name: "samgipsal",
        image:
            "http://blogfiles.naver.net/MjAxNzA3MTFfMjMy/MDAxNDk5NzUxNDgwMTc3._0Mko9MUsaQzQHRTv4TJP2EB1Xljmv1hjKNGtk6kj54g.AdARpLw4YkXYT-c3LbXBiXBcCIyZ1doCs3Ur_M7YmnAg.JPEG.sisaic/%BB%EF%B0%E3%BB%EC.jpg"
    },
    {
        name: "chukumii",
        image:
            "http://blogfiles.naver.net/20150529_213/jhkt114_1432877185374YAVYE_JPEG/%C2%DE%BA%D23.jpg"
    }
];

function App() {
    return (
        <div className="App">
            {foodILike.map(dish => (
                <Food name={dish.name} picture={dish.image} />
            ))}
        </div>
    );
}

export default App;
