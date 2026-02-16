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
      "Plataforma financiera integral para la gestión de cuentas, transferencias y auditoría en tiempo real.",
    problem:
      "Las instituciones financieras requieren sistemas robustos que garanticen la integridad de las transacciones y una experiencia de usuario fluida, minimizando errores operativos y tiempos de espera.",
    solution:
      "Desarrollo de una billetera digital segura con arquitectura escalable. Implementación de autenticación robusta, validación de transacciones ACID y un dashboard administrativo para monitoreo en tiempo real.",
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    architecture: ["Backend MVC", "Monolito Modular", "RDBMS"],
    architectureFlow: ["Frontend", "Backend", "Database"],
    github: "https://github.com/Maxi4708/ECashFlow",
    demo: ""
  }
];
