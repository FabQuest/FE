const fontGenerator = (
  fontFamily = "Inter",
  fontSize = "0.9375rem",
  fontWeight = "normal",
  lineHeight = "normal"
) => ({
  "font-family": fontFamily,

  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
});
export const theme = {
  colors: {
    //색상
    //basic색상
    black: "#000000",
    white: "#FFFFFF",

    blue100: "#0022FF",
    blue200: "#1E3AA2",
    blue300: "#001973",

    blue400: "#202C79",
    blue500: "#001283",
    blue600: "#232A57",
    blue700: "#ABDFFF",

    purple100: "#A4B3DE",
    purple200: "#7570FF",
    purple300: "#4F46E5",
    purple400: "#A1B5FF",
    purple500: "#8B97D9",
    purple600: "#333C73",

    mint100: "#B9DCE3",

    gray01: "#5F5F5F",
    gray02: "#9E9E9E",
    gray03: "#C9C9C9",
    gray04: "#EAEAEA",
    gray05: "#D9D9D9",
    gray06: "#121533",

    //quiz

    white01: "#F9F9F9",
    purple01: "#D5DEFF",
    red01: "#FFC4C4",
    red02: "#FF6060",
    red03: "#FF0000",

    blue1000: "#4F46E5",
    gray100: "#CBD1E1",
    gray200: "#949DB8",
    gray300: "#646E8B",
    gray400: "#333C55",
  },

  fonts: {
    InterS0: fontGenerator("Inter", "36px", "700", "20px"),

    InterM0: fontGenerator("Inter", "21px", "500", "20px"),
    InterM1: fontGenerator("Inter", "17px", "500", "24px"),
    InterM2: fontGenerator("Inter", "15px", "500", "18px"),
    InterM3: fontGenerator("Inter", "13px", "500", "20px"),
    InterM4: fontGenerator("Inter", "11px", "500", "13px"),

    InterB0: fontGenerator("Inter", "20px", "600", "20px"),
    InterB1: fontGenerator("Inter", "16px", "600", "20px"),
    InterB2: fontGenerator("Inter", "14px", "600", "24px"),
    InterB3: fontGenerator("Inter", "12px", "600", "20px"),
    InterB4: fontGenerator("Inter", "8px", "600", "20px"),

    InterR0: fontGenerator("Inter", "15px", "400", "18px"),
    InterR1: fontGenerator("Inter", "13px", "400", "22px"),
    InterR2: fontGenerator("Inter", "11px", "400", "16px"),
    InterR3: fontGenerator("Inter", "11px", "400", "20px"),
    InterR4: fontGenerator("Inter", "10px", "400", "20px"),
    InterR5: fontGenerator("Inter", "8px", "400", "20px"),
    InterR6: fontGenerator("Inter", "8px", "400", "10px"),

    RiaSansB1: fontGenerator("RiaSans", "23px", "700", "36px"),
    RiaSansB0: fontGenerator("RiaSans", "23px", "700", "20px"),
    RiaSansB2: fontGenerator("RiaSans", "17px", "700", "20px"),

    RiaSansR0: fontGenerator("RiaSans", "18px", "400", "26px"),
    RiaSansR1: fontGenerator("RiaSans", "16px", "400", "23px"),
  },
};
