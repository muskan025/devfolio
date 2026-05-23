// @ts-nocheck
export function SectionCard({ as: Component = 'article', className = '', children, ...props }) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}