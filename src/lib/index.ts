export const PROJECTS: {
  title: string;
  status: "draft" | "alpha" | "beta" | "released" | "eol";
  buttonText: string;
  href: string;
  bgImage: string;
  darkBg: boolean;
}[] = [
  {
    title: "Transit Sitcombe (it's somewhat related to SCR, trust me)",
    status: "draft",
    buttonText: "Learn more",
    href: "https://sitcombe.valbuilds.xyz/",
    bgImage: "/sitcombe.png",
    darkBg: true,
  },
  {
    title: "Shift Bot",
    status: "alpha",
    buttonText: "Learn more/Get started",
    href: "/shift-bot",
    bgImage: "/shift.png",
    darkBg: true,
  },
  {
    title: "Platform Sign Redesign",
    status: "released",
    buttonText: "View the designs",
    href: "/platform-sign-redesign",
    bgImage: "/ltc.png",
    darkBg: true,
  },
];
