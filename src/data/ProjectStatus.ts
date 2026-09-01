export const ProjectStatus = {
  inProgress: 0,
  active: 1,
  archived: 2
}

// The union of possible status values: 0 | 1 | 2
export type ProjectStatusValue = typeof ProjectStatus[keyof typeof ProjectStatus];