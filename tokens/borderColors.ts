export const borderColors = {
  bg: {
    // Orbit Styleguide
    default: 'var(--border-default)',
    accent: 'var(--border-accent)',
    'error-inverse': 'var(--border-bg-error-inverse)',
    'info-inverse': 'var(--border-bg-info-inverse)',
    'success-inverse': 'var(--border-bg-success-inverse)',
    'warning-inverse': 'var(--border-bg-warning-inverse)',
    'link-focus-ring': 'var(--border-link-focus-ring)',
  },
  // Orbit Design Kit
  primary: {
    'focus-ring': 'var(--border-primary-focus-ring)',
  },
  secondary: {
    idle: 'var(--border-secondary-idle)',
    hover: 'var(--border-secondary-hover)',
    pressed: 'var(--border-secondary-pressed)',
    focus: 'var(--border-secondary-focus)',
    'focus-ring': 'var(--border-secondary-focus-ring)',
    disabled: 'var(--border-secondary-disabled)',
  },
  tertiary: {
    'focus-ring': 'var(--border-tertiary-focus-ring)',
  },
  trigger: {
    idle: 'var(--border-trigger-idle)',
    hover: 'var(--border-trigger-hover)',
    active: 'var(--border-trigger-active)',
    pressed: 'var(--border-trigger-pressed)',
    focus: 'var(--border-trigger-focus)',
    'focus-ring': 'var(--border-trigger-focus-ring)',
    disabled: 'var(--border-trigger-disabled)',
  },
  'be-filled-unactive': {
    idle: 'var(--border-be-filled-unactive-idle)',
    hover: 'var(--border-be-filled-unactive-hover)',
  },
  'be-filled-active': {
    hover: 'var(--border-be-filled-active-hover)',
  },
} as const;
