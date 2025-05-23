export type NavItems = {
    name: string;
    link: string;
};

export type GridItemType = {
    id: number;
    title: string;
    description: string;
    className: string;
    imgClassName: string;
    titleClassName: string;
    img: string;
    spareImg: string;
};

export type ProjectType = {
    id: number;
    title: string;
    description: string;
    img: string;
    iconLists: string[];
    link: string;
};

export type workExperienceType ={
    id: number;
    title: string;
    description: string;
    className: string;
    thumbnail: string;
};

export type SocialMediaType = {
    id: number;
    img: string;
};

export type CompaniesType = {
    id: number;
    name: string;
    img: string;
    nameImg: string;
};