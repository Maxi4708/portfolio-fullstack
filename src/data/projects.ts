import { Project } from '../types/project';

export const projects: Project[] = [
    {
        id: "example-project",
        title: "Example Project",
        shortDescription: "An example description.",
        fullDescription: "A full description of the project.",
        technologies: ["React", "TypeScript"],
        problemStatement: "The problem statement.",
        solutionOverview: "The solution overview.",
        architectureDetails: "Architecture details.",
        links: {
            github: "https://github.com",
        },
        images: {
            thumbnail: "/placeholder.png",
        },
    },
];
