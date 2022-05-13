module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ffe2cc",
                    secondary: "#5bf4f7",
                    accent: "#c5a5f7",
                    neutral: "#FFFFFF",
                    "base-100": "#2F2D3E",
                },
            },
            "dark",
            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
