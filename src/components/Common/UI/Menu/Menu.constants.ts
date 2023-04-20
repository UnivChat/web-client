type CafeName = {
  name: string;
  locate: string;
};

type Menu = {
    time: string;
    menulist : string;
}

export const CafeList = [
    {
        name: "Buon Pranzo",
        locate: "학생미래인재관 2층"
    },
    {
        name: "Cafe Bona",
        locate: "학생미래인재관 1층"
    },
    {
        name: "Cafe Mensa",
        locate: "김수환관 1층"
    }
] satisfies CafeName[];

export const MenuList = [
    {
        time: "",
        menulist : ""
    },
    {
        time: "",
        menulist : ""
    },
    {
        time: "",
        menulist : ""
    }
] satisfies Menu[];