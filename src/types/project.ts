export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    problemStatement: string;
    solutionOverview: string;
    architectureDetails: string;
    links: {
        github?: string;
        live?: string;
        docs?: string;
    };
    images: {
        thumbnail: string;
        gallery?: string[];
        diagram?: string;
    };
}
