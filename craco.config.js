const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@pages": path.resolve(__dirname, "./src/Pages"),
            "@routes": path.resolve(__dirname, "./src/Routes"),
            "@components": path.resolve(__dirname, "./src/Components"),
            "@interfaces": path.resolve(__dirname, "./src/Interfaces"),
            "@api": path.resolve(__dirname, "./src/Api"),
            "@layouts": path.resolve(__dirname, "./src/Layouts"),
            "@validations": path.resolve(__dirname, "./src/Validations"),
            "@redux": path.resolve(__dirname, "./src/Redux"),
            "@constants": path.resolve(__dirname, "./src/Constants"),
            "@module": path.resolve(__dirname, "./src/Module"),
        },
    },
};
