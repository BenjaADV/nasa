import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'blockquote'
    | 'lead'
    | 'muted'
    | 'small'
    | 'highlighted';
};

const variantClasses = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-4',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  lead: 'text-xl text-muted-foreground',
  muted: 'text-sm text-muted-foreground',
  small: 'text-sm font-medium leading-none',
  highlighted: 'font-public-sans text-sm leading-[100%] text-[#7622FF]',
};

export function Typography({ variant = 'p', className, children, ...props }: TypographyProps) {
  const Component =
    variant === 'p' ||
    variant === 'lead' ||
    variant === 'muted' ||
    variant === 'small' ||
    variant === 'highlighted'
      ? 'p'
      : variant;

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
