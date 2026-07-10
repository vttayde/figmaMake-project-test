export interface EnterpriseCheck {
  title: string;
  desc: string;
  answers: string;
}

export const enterpriseChecks: EnterpriseCheck[] = [
  {
    title: "Security & Compliance",
    desc: "Policies, controls, certifications, and practices that help security teams move faster.",
    answers: "Answers: Data handling, ISO certs, pentesting routines, and access controls.",
  },
  {
    title: "Delivery Governance",
    desc: "Clear ownership, checkpoints, documentation, escalation paths, and visible decision-making.",
    answers: "Answers: Who owns what, how risks are flagged, and reporting cadences.",
  },
  {
    title: "Team Stability",
    desc: "Experienced people, role clarity, and continuity from discovery through delivery.",
    answers: "Answers: Resource allocation, senior involvement, and churn mitigation.",
  },
  {
    title: "Platform Maturity",
    desc: "Practical understanding of enterprise systems, integrations, governance, and long-term maintainability.",
    answers: "Answers: Architecture standards, tech debt management, and deployment strategies.",
  },
  {
    title: "Procurement Confidence",
    desc: "The information buyers usually need, organized before conversations slow down.",
    answers: "Answers: MSA structures, pricing transparency, and vendor onboarding requirements.",
  },
];
