/**
 * @typedef {Object} ProjectLink
 * @property {string} [github]
 * @property {string} [live]
 * @property {string} [docs]
 */

/**
 * @typedef {Object} ProjectImages
 * @property {string} thumbnail
 * @property {string[]} [gallery]
 * @property {string} [diagram]
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} fullDescription
 * @property {string[]} technologies
 * @property {string[]} architecture // e.g., ["Frontend", "Microservices", "PostgreSQL"]
 * @property {string} problemStatement
 * @property {string} solutionOverview
 * @property {string} architectureDetails
 * @property {ProjectLink} links
 * @property {ProjectImages} images
 */

/** @type {Project[]} */
export const projects = [
    {
        id: "ecashflow",
        title: "EcashFlow",
        shortDescription: "Billetera virtual enfocada en gestión de fondos, transacciones y dashboard administrativo.",
        fullDescription: "EcashFlow es una billetera virtual diseñada para simplificar la gestión de fondos y transacciones. Incluye un dashboard administrativo para el seguimiento detallado de operaciones.",
        technologies: ["React", "Python", "SQL"],
        architecture: ["Frontend", "Backend", "Database"],
        problemStatement: "La gestión de fondos y el seguimiento de transacciones puede ser complejo sin una herramienta centralizada y eficiente.",
        solutionOverview: "Una plataforma unificada que permite a los usuarios gestionar sus fondos y a los administradores supervisar las transacciones de manera eficiente.",
        architectureDetails: "Frontend en React interactuando con un Backend en Python y base de datos SQL.",
        links: {
            github: "https://github.com",
        },
        images: {
            thumbnail: "https://placehold.co/600x400/1a1a1a/FFF?text=EcashFlow",
        },
    },
];
