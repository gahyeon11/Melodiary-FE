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
      background: "#FFF3EE", 
      tag: "#FFDED4", 
    },
    beige: {
      background: "#FFF7EF", 
      tag: "#FFEBD3",
    },
    yellow: {
      background: "#FFFCE8",
      tag: "#FFF5C6",
    },
    green: {
      background: "#F3FDEF", 
      tag: "#E2F9CC",
    },
    mint: {
      background: "#F1FDF9",
      tag: "#E5FAF3",
    },
    blue: {
      background: "#F5FCFD", 
      tag: "#DFF2F6",
    },
    coolblue: {
      background: "#F3F5FD",
      tag: "#D3DBFB",
    },
    purple: {
      background: "#F7F1FE",
      tag: "#E6D8FE",
    },
    pink: {
      background: "#FDF3F9", 
      tag: "#FAD8E8", 
    },
    gray: {
      background: "#F5F5F5",
      tag: "#E2E2E2", 
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
