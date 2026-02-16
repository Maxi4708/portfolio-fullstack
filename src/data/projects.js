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
    title: "ECashFlow",
    description:
      "Proof of Concept de una billetera virtual enfocada en gestión de clientes, transacciones y flujo financiero dentro de un entorno bancario.",
    problem:
      "Simular una plataforma de billetera digital capaz de administrar usuarios, transferencias y auditoría de movimientos.",
    solution:
      "Aplicación web desarrollada con Django que incluye autenticación por roles, dashboard administrativo, transferencias peer-to-peer y filtros de transacciones.",
    technologies: ["Python", "Django", "SQL", "HTML", "CSS"],
    architecture: ["Frontend", "Backend", "Database"],
    github: "https://github.com/Maxi4708/ECashFlow",
    demo: ""
  }
];
