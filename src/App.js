import React from "react";
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "kimchi",
        image:
            "http://blogfiles.naver.net/20150603_66/harmony2154_14333061055283Pyea_JPEG/%B4%D9%B1%E8%C4%A13.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "ramen",
        image:
            "http://blogfiles.naver.net/20131107_4/mkpark_88_1383797435291DSieE_JPEG/%B6%F3%B8%E9%C3%E0%C1%A62.jpg",
        rating: 4.9
    },
    {
        id: 3,
        name: "samgipsal",
        image:
            "http://blogfiles.naver.net/MjAxNzA3MTFfMjMy/MDAxNDk5NzUxNDgwMTc3._0Mko9MUsaQzQHRTv4TJP2EB1Xljmv1hjKNGtk6kj54g.AdARpLw4YkXYT-c3LbXBiXBcCIyZ1doCs3Ur_M7YmnAg.JPEG.sisaic/%BB%EF%B0%E3%BB%EC.jpg",
        rating: 5
    },
    {
        id: 4,
        name: "chukumii",
        image:
            "http://blogfiles.naver.net/20150529_213/jhkt114_1432877185374YAVYE_JPEG/%C2%DE%BA%D23.jpg",
        rating: 3.2
    }
];

function Food({ name, picture, rating }) {
    return (
        <div>
            <h1>I Love {name}</h1>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function App() {
    return (
        <div className="App">
            {foodILike.map(dish => (
                <Food
                    key={dish.id}
                    name={dish.name}
                    picture={dish.image}
                    rating={dish.rating}
                />
            ))}
        </div>
    );
}

export default App;
