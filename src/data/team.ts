export interface TeamMember {
  role: string;
  exp: string;
  detail: string;
}

export const teamMembers: TeamMember[] = [
  {
    role: 'Strategy Lead',
    exp: '15+ yrs',
    detail: 'Aligns business goals with technical possibilities.',
  },
  {
    role: 'Design Lead',
    exp: '12+ yrs',
    detail: 'Ensures usability and adoption across complex systems.',
  },
  {
    role: 'Engineering Lead',
    exp: '14+ yrs',
    detail: 'Architects for scale, security, and maintainability.',
  },
  {
    role: 'Delivery Lead',
    exp: '10+ yrs',
    detail: 'Maintains cadence, clears blockers, and manages risk.',
  },
  {
    role: 'Platform Architect',
    exp: '15+ yrs',
    detail: 'Navigates enterprise ecosystems and governance.',
  },
];
