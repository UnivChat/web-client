import { Nanum_Gothic } from 'next/font/google';

type FontType = ReturnType<typeof Nanum_Gothic>;

const extraBold: FontType = Nanum_Gothic({
  weight: "800",
  display: "fallback",
  style: "normal",
  variable: "--nanum-Gothic-extraBold",
  fallback: ["system-ui"],
  subsets: ["latin"],
});

const bold: FontType = Nanum_Gothic({
  weight: "700",
  display: "fallback",
  style: "normal",
  variable: "--nanum-Gothic-bold",
  fallback: ["system-ui"],
  subsets: ["latin"],
});

const regular: FontType = Nanum_Gothic({
  weight: "400",
  display: "fallback",
  style: "normal",
  variable: "--nanum-Gothic-regular",
  fallback: ["system-ui"],
  subsets: ["latin"],
});

export {
  extraBold as nanumGothicExtraBold,
  bold as nanumGothicBold,
  regular as nanumGothicRegular,
};
