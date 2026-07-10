export interface DeliveryStep {
  phase: string;
  desc: string;
}

export const deliverySteps: DeliveryStep[] = [
  {
    phase: 'Before the work starts',
    desc: 'We align on goals, constraints, risks, stakeholders, platform state, and approval needs.',
  },
  {
    phase: 'During delivery',
    desc: 'Design, engineering, product, and client teams stay aligned through visible decisions and structured reviews.',
  },
  {
    phase: 'After launch',
    desc: 'Handoff, adoption, documentation, roadmap clarity, and long-term evolution stay part of the plan.',
  },
];
