/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: {
        v1: "#9C8888",
        v2: "#BBA0A0",
        v3: "#D3CCCC",
        v4: "E9E2E2",
        v5: "#EBE7E7",
      },
      neutral: {
        v1: "#FFFFFF",
        v2: "#F0F0F0",
        v3: "#E1E1E1",
        v4: "#AAAAAA",
        v5: "#717171",
        v6: "#1F1F1F",
      },
      error: {
        main: "#DC3545",
        light: "#FAE3E5",
        dark: "#BD2130",
      },
      green: {
        main: "#28A745",
        light: "#D8F6DF",
        dark: "#15A58D",
      },
      warning: {
        main: "#FFC107",
        light: "#FFF5D3",
        dark: "#FFF5D3",
        mention: "#2B2B2B",
      },
    },
    fontSize: {
      displayOne: [
        "4rem",
        { lineHeight: "4.8rem", letterSpacing: "-0.035em", fontWeight: 800 },
      ],
      displayTwo: [
        "3rem",
        { lineHeight: "4.8rem", letterSpacing: "-0.0325em", fontWeight: 800 },
      ],
      headingOne: [
        "2.25rem",
        { lineHeight: "2.75rem", letterSpacing: "-0.03em", fontWeight: 800 },
      ],
      headingTwo: [
        "1.75rem",
        { lineHeight: "2.25rem", letterSpacing: "-0.02em", fontWeight: 800 },
      ],
      headingThree: [
        "1.5rem",
        { lineHeight: "1.9rem", letterSpacing: "-0.015em", fontWeight: 500 },
      ],
      headingFour: [
        "1.25rem",
        { lineHeight: "1.625rem", letterSpacing: "-0.01em", fontWeight: 500 },
      ],
      bodyLargeBold: [
        "1rem",
        { lineHeight: "1.625rem", letterSpacing: "-0.01em", fontWeight: 600 },
      ],
      bodyLargeRegular: [
        "1rem",
        { lineHeight: "1.625rem", letterSpacing: "-0.01em", fontWeight: 400 },
      ],
      bodyMediumBold: ["0.875rem", { lineHeight: "1.313rem", fontWeight: 600 }],
      bodyMediumRegular: [
        "0.875rem",
        { lineHeight: "1.313rem", fontWeight: 400 },
      ],
      bodySmallBold: [
        "0.75rem",
        { lineHeight: "1.063rem", letterSpacing: "0.025em", fontWeight: 600 },
      ],
      bodySmallRegular: [
        "0.75rem",
        { lineHeight: "1.063rem", letterSpacing: "0.025em", fontWeight: 400 },
      ],
    },
    extend: {},
  },
  plugins: [],
};
