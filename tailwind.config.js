/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontSize :{
                base: "15px",
                lg: "22px",
            },
            colors:{
                background: "#d5e1ef",
                text: "#212122",
            }
        },
        
    },
    plugins: [],
};
