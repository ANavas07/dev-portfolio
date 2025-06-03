import { title } from "process";
import { ApproachType, CompaniesType, GridItemType, NavItems, ProjectType, SocialMediaType, workExperienceType } from "./dataTypes";


//Hero section
export const heroText = {
    shortTitle: "Welcome!",
    title: "Turning ideas into powerful digital solutions.",
    description: "Hi, I'm Ariel — a fun-loving Full-Stack Developer 😎",
    shortTitleES: "¡Bienvenido!",
    titleES: "Convirtiendo ideas en potentes soluciones digitales.",
    descriptionES: "Hola, soy Ariel — un Desarrollador Full-Stack divertido 😎",
}

//Projects section
export const projectsText = {
    title: "Here are some of the things",
    lowTitle: "I’ve built lately.",
    titleES: "Aquí hay algunas de las cosas",
    lowTitleES: "que he construido últimamente.",
}

//Experience section
export const experienceText = {
    title: "My Work Experience",
    titleES: "Mi Experiencia Laboral",
};

export const approachText = {
    title: "My Approach",
    titleES: "Mi Enfoque"
}

export const navItems: NavItems[] = [
    { name: "About", nameEs: "Acerca", link: "#about" },
    { name: "Projects", nameEs: "Proyectos", link: "#projects" },
    { name: "Experience", nameEs: "Experiencia", link: "#experience" },
    { name: "Contact", nameEs: "Contacto", link: "#contact" },
];

export const gridItems: GridItemType[] = [
    {
        id: 1,
        title: "I’m all ears — I believe good ideas can come from anywhere, and I’m always ready to learn and improve.",
        titleES: "Estoy atento: creo que las buenas ideas pueden venir de cualquier parte y siempre estoy listo para aprender y mejorar.",
        description: "",
        descriptionES: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "lg:w-full lg:h-full ",
        titleClassName: "justify-end",
        img: "/gridJs.png",
        spareImg: "",
    },
    {
        id: 2,
        title: "Time zones? No problem. I’m here to work and collaborate.",
        titleES: "¿Zonas horarias? No hay problema. Estoy aquí para trabajar y colaborar.",
        description: "",
        descriptionES: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        titleES: "Mi stack tecnológico",
        description: "Improving with every step.",
        descriptionES: "Mejorando en cada paso.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech lover. Code enthusiast. Problem solver. ",
        titleES: "Amante de la tecnología. Entusiasta del código. Solucionador de problemas.",
        description: "",
        descriptionES: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Learning DevOps — because great code deserves great infrastructure.",
        titleES: "Aprendiendo DevOps — porque un gran código merece una gran infraestructura.",
        description: "The Inside Scoop",
        descriptionES: "La primicia interna",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Let me tell you a bit more about myself!",
        titleES: "¡Déjame contarte un poco más sobre mí!",
        description: "",
        descriptionES: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];


export const projects: ProjectType[] = [
    {
        id: 1,
        title: "EP-EMA Lighting Control",
        titleES: "Control de Iluminación EP-EMA",
        description: "Real-time vessel lighting monitoring for Ambato Wholesale Market",
        descriptionES: "Monitoreo en tiempo real de iluminación para naves del Mercado Mayorista de Ambato",
        img: "/epema.png",
        iconLists: ["/flutter.svg", "/nodejs.svg", "/ts.svg", "/mysql.svg"],
        link: "https://github.com/ANavas07/mayorista_app",
    },
    {
        id: 2,
        title: "Arcoral Foundation | Youth & Music",
        titleES: "Fundación Arcoral | Jóvenes y Música",
        description: "Non-profit empowering Ecuadorian youth through classical music education",
        descriptionES: "Organización sin fines de lucro que transforma vidas mediante educación musical clásica",
        img: "/arcoral.png",
        iconLists: ["/wordpress.svg", "/mysql.svg", "/hostinger.svg"],
        link: "https://arcoral.org/",
    },
    {
        id: 3,
        title: "ChaskiPass | Fleet Management SaaS",
        titleES: "ChaskiPass | Gestión de Flotas SaaS",
        description: "Bus fleet management platform with ticketing, routing and optimization tools",
        descriptionES: "Plataforma de gestión de flotas con venta de pasajes, rutas y optimización",
        img: "/chaskibackend.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/nodejs.svg", "/mysql.svg", "/vercel.svg"],
        link: "https://github.com/ANavas07/ChaskiPass_Project",
    },
    {
        id: 4,
        title: "Clarksburg Academy | Pre-K & Childcare",
        titleES: "Clarksburg Academy | Preescolar y Guardería",
        description: "Early education for children 6mo-5yrs in a nurturing environment",
        descriptionES: "Educación infantil para niños de 6 meses a 5 años en entorno enriquecedor",
        img: "/clarksburg.png",
        iconLists: ["/wordpress.svg", "/mysql.svg", "/hostinger.svg"],
        link: "https://clarksburgacademypre-kchildcare.com/",
    },
];


export const workExperience: workExperienceType[] = [
    {
        id: 1,
        title: "Systems Analyst & Developer",
        titleES: "Analista de Sistemas y Desarrollador",
        description: "Focused on designing, developing, and maintaining enterprise systems using SAP ABAP, supporting key business operations.",
        descriptionES: "Enfocado en diseñar, desarrollar y mantener sistemas empresariales utilizando SAP ABAP, apoyando operaciones clave del negocio.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Web Developer",
        titleES: "Desarrollador Web",
        description: "Led the refactoring and enhancement of the university's official website using Joomla, improving performance, usability, and content management for key institutional areas.",
        descriptionES: "Lideré el refactorizado y mejora del sitio web oficial de la universidad usando Joomla, mejorando el rendimiento, la usabilidad y la gestión de contenidos para áreas institucionales clave.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Full-Stack Developer",
        titleES: "Desarrollador Full-Stack",
        description: "Developed and implemented new functionalities in enterprise systems using Oracle technologies, improving operational efficiency and user experience for internal teams.",
        descriptionES: "Desarrollé e implementé nuevas funcionalidades en sistemas empresariales utilizando tecnologías Oracle, mejorando la eficiencia operativa y la experiencia de usuario para equipos internos.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    }
];



export const companies: CompaniesType[] = [
    {
        id: 1,
        name: "Plasticaucho Industrial S.A.",
        img: "/plasti.svg",
        nameImg: "/plastiName.svg",
    },
    {
        id: 2,
        name: "Empresa Eléctrica Ambato Regional Centro Norte S.A.",
        img: "/eeasa.svg",
        nameImg: "/eeasaName.svg",
    },
    {
        id: 3,
        name: "Dirección de Comunicación y Relaciones Públicas, Universidad Técnica de Ambato",
        img: "/uta.svg",
        nameImg: "/utaName.svg",
    },
];

export const approachTextData: ApproachType[] = [
    {
        title: "Strategist",
        titleES: "Estratega",
        description: "Designing actionable plans with clear milestones and measurable results",
        descriptionES: "Creación de planes ejecutables con hitos claros y resultados medibles"
    },
    {
        title: "Integrity-Based Leadership",
        titleES: "Liderazgo con Honestidad",
        description: "Leading with transparency and accountability at every project phase",
        descriptionES: "Dirección con transparencia y responsabilidad en cada fase del proyecto"
    },
    {
        title: "Precision Execution",
        titleES: "Ejecución Precisa",
        description: "Delivering 100% on-time results through meticulous time management",
        descriptionES: "Resultados 100% puntuales mediante gestión meticulosa del tiempo"
    }
];

export const footerText = {
    title: "Ready to take your project to the next level?",
    titleES: "¿Listo para llevar tu proyecto al siguiente nivel?",
    description: "Reach out to me today and let's discuss how I can help you achieve your goals.",
    descriptionES: "Contáctame hoy y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.",
}

export const socialMedia: SocialMediaType[] = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];