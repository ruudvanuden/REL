export type ColorsProps<T extends React.ElementType = 'div'> =
  React.ComponentPropsWithoutRef<T> & {
    theme: 'light' | 'dark' | 'light-variant' | 'dark-variant';
  };
