module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
              business: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=business]"
                    ],
                    "base-100": "#10151a",
                },
            },
            "corporate",
        ],
        darkTheme: "business",
    },
};
// #10151a
