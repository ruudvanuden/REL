export const backgroundColors = {
  // Orbit Styleguide
  default: 'var(--background-default)',
  1: 'var(--background-container-01)',
  2: 'var(--background-container-02)',
  3: 'var(--background-container-03)',
  4: 'var(--background-container-04)',
  error: 'var(--background-feedback-error)',
  'error-inverse': 'var(--background-feedback-error-inverse)',
  info: 'var(--background-feedback-info)',
  'info-inverse': 'var(--background-feedback-info-inverse)',
  success: 'var(--background-feedback-success)',
  'success-inverse': 'var(--background-feedback-success-inverse)',
  warning: 'var(--background-feedback-warning)',
  'warning-inverse': 'var(--background-feedback-warning-inverse)',
  // Orbit Design Kit
  backdrop: 'var(--bg-backdrop)',
  primary: {
    idle: 'var(--bg-primary-idle)',
    hover: 'var(--bg-primary-hover)',
    pressed: 'var(--bg-primary-pressed)',
    focus: 'var(--bg-primary-focus)',
    disabled: 'var(--bg-primary-disabled)',
  },
  secondary: {
    idle: 'var(--bg-secondary-idle)',
    hover: 'var(--bg-secondary-hover)',
    pressed: 'var(--bg-secondary-pressed)',
    focus: 'var(--bg-secondary-focus)',
    disabled: 'var(--bg-secondary-disabled)',
  },
  tertiary: {
    idle: 'var(--bg-tertiary-idle)',
    hover: 'var(--bg-tertiary-hover)',
    pressed: 'var(--bg-tertiary-pressed)',
    focus: 'var(--bg-tertiary-focus)',
    disabled: 'var(--bg-tertiary-disabled)',
  },
  trigger: {
    idle: 'var(--bg-trigger-idle)',
    hover: 'var(--bg-trigger-hover)',
    pressed: 'var(--bg-trigger-pressed)',
    active: 'var(--bg-trigger-active)',
    focus: 'var(--bg-trigger-focus)',
    disabled: 'var(--bg-trigger-disabled)',
  },
  'be-filled-unactive': {
    idle: 'var(--bg-be-filled-unactive-idle)',
  },
  'be-filled-active': {
    idle: 'var(--bg-be-filled-active-idle)',
    'idle-variant': 'var(--bg-be-filled-active-idle-variant)',
  },
} as const;
