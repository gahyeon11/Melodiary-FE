export type Color =
  | "primary"
  | "primary10"
  | "primaryHover"
  | "lightblue"
  | "lightblue30"
  | "lightblue10"
  | "greenblue"
  | "coolblue"
  | "lightcoolblue"
  | "lightcoolblue30"
  | "black"
  | "grayblack"
  | "gray777"
  | "gray999"
  | "grayCCC"
  | "grayDF"
  | "grayEEE"
  | "white";
export type DiaryColor =
  | "default"
  | "orange"
  | "beige"
  | "yellow"
  | "green"
  | "mint"
  | "blue"
  | "coolblue"
  | "purple"
  | "pink"
  | "gray";
export type TitleSize = "title1" | "title2" | "title3" | "title4";
export type TextSize = "text1" | "text2" | "text3";
export type FontFamily = "en" | "kor";
export type ButtonSize = "short" | "medium" | "long";
export type ButtonSchema = "primary" | "white" | "gray";

export interface Theme {
  color: Record<Color, string>;
  diaryColor: {
    [key in DiaryColor]: {
      background: string;
      tag: string;
    };
  };
  title: {
    [key in TitleSize]: string;
  };
  text: {
    [key in TextSize]: string;
  };
  fontFamily: {
    [key in FontFamily]: string;
  };
  button: {
    [key in ButtonSize]: {
      padding: string;
      fontSize: string;
      fontWeight: string;
      borderRadius: string;
    };
  };
  buttonSchema: {
    [key in ButtonSchema]: {
      color: string;
      backgroundColor: string;
    };
  };
}

export const theme: Theme = {
  color: {
    primary: "#006AD7",
    primary10: "#006AD71A",
    primaryHover: "#0055AC",
    lightblue: "#9AD9EA",
    lightblue30: "#9AD9EA4D",
    lightblue10: "#9AD9EA1A",
    greenblue: "#007C9E",
    coolblue: "#4356B8",
    lightcoolblue: "#A3BCFF",
    lightcoolblue30: "#A3BCFF4D",
    black: "#222222",
    grayblack: "#333333",
    gray777: "#777777",
    gray999: "#999999",
    grayCCC: "#CCCCCC",
    grayDF: "#DFDFDF",
    grayEEE: "#EEEEEE",
    white: "#FFFFFF",
  },
  diaryColor: {
    default: {
      background: "#FFFFFF",
      tag: "#EEEEEE",
    },
    orange: {
      background: "#FF87461A",
      tag: "#FF87464D",
    },
    beige: {
      background: "#FFD2791A",
      tag: "#FFD2794D",
    },
    yellow: {
      background: "#FFDD2B1A",
      tag: "#FFDD2B4D",
    },
    green: {
      background: "#8FEC471A",
      tag: "#8FEC474D",
    },
    mint: {
      background: "#71F8C81A",
      tag: "#71F8C84D",
    },
    blue: {
      background: "#9AD9EA1A",
      tag: "#9AD9EA4D",
    },
    coolblue: {
      background: "#8AA3F91A",
      tag: "#8AA3F91A4D",
    },
    purple: {
      background: "#BA84FF1A",
      tag: "#BA84FF4D",
    },
    pink: {
      background: "#EA9ACA1A",
      tag: "#EA9ACA4D",
    },
    gray: {
      background: "#9999991A",
      tag: "#9999994D",
    },
  },
  title: {
    title1: "24px",
    title2: "22px",
    title3: "20px",
    title4: "18px",
  },
  text: {
    text1: "16px",
    text2: "14px",
    text3: "12px",
  },
  fontFamily: {
    en: "Poppins",
    kor: "Nanum Gothic",
  },
  button: {
    short: {
      padding: "7px 13px",
      fontSize: "12px",
      fontWeight: "regular",
      borderRadius: "6px",
    },
    medium: {
      padding: "8px 17px",
      fontSize: "14px",
      fontWeight: "regular",
      borderRadius: "10px",
    },
    long: {
      padding: "13px 150px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "14px",
    },
  },
  buttonSchema: {
    primary: {
      color: "white",
      backgroundColor: "#006AD7",
    },
    white: {
      color: "#006AD7",
      backgroundColor: "white",
    },
    gray: {
      color: "#222222",
      backgroundColor: "#EEEEEE",
    },
  },
};
