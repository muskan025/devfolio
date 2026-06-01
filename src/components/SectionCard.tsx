import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type SectionCardProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function SectionCard<T extends ElementType = 'article'>({
  as,
  className = '',
  children,
  ...props
}: SectionCardProps<T>) {
  const Component = as ?? 'article';

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}