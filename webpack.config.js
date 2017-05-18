const webpack = require("./webpack/webpack.lib");

module.exports = (env) => {
    const config = {
        lib: {
            "common": ["react", "react-dom"],
            "net": ["axios"],
            '3rd': ["lib/3rd-party"]
        },
        pages: {
            "index": {js: "page/index/index.jsx", template: "page/index/index.html", dependencies: ["common", "3rd"]},
            "page1": {js: "page/page1/index.jsx", template: "page/page1/index.html", dependencies: ["common"]},
            "page2": {
                js: "page/page2/index.jsx",
                template: "page/page2/index.html",
                dependencies: ["common", "net"]
            },
            "page3": {js: "page/page3/index.jsx", template: "page/page3/index.html", dependencies: ["common"]}
        },
        sprite: {
            name: "sprite-icon1",
            path: "asset/sprite"
        }
    };

    return webpack(env, config);
};
