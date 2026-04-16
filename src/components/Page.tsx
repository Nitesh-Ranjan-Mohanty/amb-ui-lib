import React, { forwardRef } from 'react';
import Container from './Container';
import Stack from './Stack';
import { MaxWidthKey, SpacingKey } from '../tokens/layout';

export interface PageProps extends React.HTMLAttributes<HTMLElement> {
  fullHeight?: boolean;
  containerMaxWidth?: MaxWidthKey;
  containerPadding?: SpacingKey;
  containerCenter?: boolean;
}

const Page = forwardRef<HTMLElement, PageProps>(function Page(
  {
    fullHeight = false,
    containerMaxWidth = 'lg',
    containerPadding = 'lg',
    containerCenter = true,
    style,
    className,
    children,
    ...rest
  },
  ref
) {
  const computedStyle: React.CSSProperties = {
    minHeight: fullHeight ? '100vh' : undefined,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8fafc',
    ...style
  };

  return (
    <main ref={ref} className={className} style={computedStyle} {...rest}>
      <Container maxWidth={containerMaxWidth} padding={containerPadding} center={containerCenter}>
        <Stack gap="lg">{children}</Stack>
      </Container>
    </main>
  );
});

const PageHeader = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(function PageHeader(
  { style, className, children, ...rest },
  ref
) {
  return (
    <header ref={ref as any} className={className} style={style} {...rest}>
      {children}
    </header>
  );
});

const PageBody = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(function PageBody(
  { style, className, children, ...rest },
  ref
) {
  return (
    <section ref={ref as any} className={className} style={style} {...rest}>
      {children}
    </section>
  );
});

const PageFooter = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(function PageFooter(
  { style, className, children, ...rest },
  ref
) {
  return (
    <footer ref={ref as any} className={className} style={style} {...rest}>
      {children}
    </footer>
  );
});

Page.displayName = 'Page';
PageHeader.displayName = 'Page.Header';
PageBody.displayName = 'Page.Body';
PageFooter.displayName = 'Page.Footer';

interface PageComponent extends React.ForwardRefExoticComponent<
  PageProps & React.RefAttributes<HTMLElement>
> {
  Header: typeof PageHeader;
  Body: typeof PageBody;
  Footer: typeof PageFooter;
}

const PageWithSlots = Page as PageComponent;
PageWithSlots.Header = PageHeader;
PageWithSlots.Body = PageBody;
PageWithSlots.Footer = PageFooter;

export default PageWithSlots;
