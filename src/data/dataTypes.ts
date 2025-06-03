export type NavItems = {
    name: string;
    nameEs: string;
    link: string;
};

export type GridItemType = {
    id: number;
    title: string;
    titleES: string;
    description: string;
    descriptionES: string;
    className: string;
    imgClassName: string;
    titleClassName: string;
    img: string;
    spareImg: string;
};

export type ProjectType = {
    id: number;
    title: string;
    titleES: string;
    description: string;
    descriptionES: string;
    img: string;
    iconLists: string[];
    link: string;
};

export type workExperienceType ={
    id: number;
    title: string;
    titleES: string;
    description: string;
    descriptionES: string;
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

export type ApproachType = {
    title: string;
    titleES: string;
    description: string;
    descriptionES: string;
}