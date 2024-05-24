export type menuListModel = {
    id: number;
    title: string;
    icons: string;
    menuSub?: {
        dataSub: {
            title: string;
            pathRoute: string;
            dataChild?: { title: string; pathRoute: string }[];
        }[];
        img?: string;
    };
    pathRoute: string;
};

export default menuListModel;
