export type Color = "primary" | "primary10" | "primaryHover" | "lightblue"| "lightblue30" | "lightblue10" | "greenblue" | "coolblue" | "lightcoolblue" | "lightcoolblue30" | "black" | "grayblack" | "gray777" | "gray999" | "grayDF" | "grayEEE" | "white";
export type DiaryColor = "default" | "orange" | "beige" | "yellow" | "green" | "mint" | "blue" | "coolblue" | "purple" | "pink" | "gray";
export type TitleSize = "title1" | "title2" | "title3" | "title4";
export type TextSize = "text1" | "text2" | "text3";
export type FontFamily = "en" | "kor";


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
      background: "#FF59001A",
      tag: "#FF59004D",
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
      background: "#55EDB61A",
      tag: "#55EDB64D",
    },
    blue: {
      background: "#9AD9EA1A",
      tag: "#9AD9EA4D",
    },
    coolblue: {
      background: "#55EDB61A",
      tag: "#55EDB64D",
    },
    purple: {
      background: "#A062EE1A",
      tag: "#A062EE4D",
    },
    pink: {
      background: "#EA9ACA1A",
      tag: "#EA9ACA4D",
    },
    gray: {
      background: "#5555551A",
      tag: "#5555554D",
    }
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
};