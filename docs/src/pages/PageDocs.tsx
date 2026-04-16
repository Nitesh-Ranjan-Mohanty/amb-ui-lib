import { Caption, Heading, Page, Section, Stack, Text } from '@amb-ui';
import { PropTable, LiveExample, Note } from '../components/DocComponents';

const pageProps = [
  { name: 'fullHeight', type: 'boolean', description: 'Whether the page should take up at least the full viewport height.', default: 'false' },
];

const subComponentProps = [
  { name: 'children', type: 'ReactNode', description: 'Content to be rendered inside the slot.', default: '-' },
  { name: 'className', type: 'string', description: 'Additional CSS classes.', default: '-' },
  { name: 'style', type: 'CSSProperties', description: 'Inline styles.', default: '-' },
];

function PageDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Page</Heading>
          <Text size="lg">
            The fundamental container for building structured screen layouts.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Core Structure</Heading>
            <Text>
              A <code>Page</code> uses semantic slots to organize content. It ensures that your headers, body, and footers follow a consistent alignment and spacing.
            </Text>
            
            <LiveExample code={`<Page>
  <Page.Header>
    <Heading level={1}>Dashboard</Heading>
    <Text>Welcome back to your overview.</Text>
  </Page.Header>
  
  <Page.Body>
    <Text>This is where your main content lives.</Text>
  </Page.Body>
  
  <Page.Footer>
    <Caption>System Status: Operational</Caption>
  </Page.Footer>
</Page>`}>
              <div className="embedded-preview">
                <Page style={{ backgroundColor: 'white' }}>
                  <Page.Header>
                    <Heading level={2}>Dashboard</Heading>
                    <Text size="sm">Welcome back to your overview.</Text>
                  </Page.Header>
                  <Page.Body>
                    <div style={{ padding: '20px', border: '1px dashed #cbd5e1', borderRadius: '4px', textAlign: 'center' }}>
                       <Text>Main Content Area</Text>
                    </div>
                  </Page.Body>
                  <Page.Footer>
                    <Caption>System Status: Operational</Caption>
                  </Page.Footer>
                </Page>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Composition with Sections</Heading>
            <Text>
              Inside <code>Page.Body</code>, you can use the <code>Section</code> component to group related content with consistent vertical padding.
            </Text>
            
            <LiveExample code={`<Page>
  <Page.Body>
    <Section>
      <Heading level={3}>Profile Info</Heading>
      <Text>Your personal details.</Text>
    </Section>
    <Section style={{ borderTop: '1px solid #e2e8f0' }}>
      <Heading level={3}>Security</Heading>
      <Text>Manage your password.</Text>
    </Section>
  </Page.Body>
</Page>`}>
              <div className="embedded-preview">
                <Page style={{ backgroundColor: 'white' }}>
                  <Page.Body>
                    <Section>
                      <Heading level={3}>Profile Info</Heading>
                      <Text size="sm">Your personal details and contact information.</Text>
                    </Section>
                    <Section style={{ borderTop: '1px solid #e2e8f0' }}>
                      <Heading level={3}>Security</Heading>
                      <Text size="sm">Manage your password and authentication methods.</Text>
                    </Section>
                  </Page.Body>
                </Page>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Full Height Layout</Heading>
            <Text>
              The <code>fullHeight</code> prop is useful for single-purpose screens like login or empty states where you want the background to fill the screen.
            </Text>
            
            <LiveExample code={`<Page fullHeight style={{ display: 'flex', alignItems: 'center' }}>
  <Page.Body>
    <Stack align="center" gap="md">
      <Heading level={1}>404</Heading>
      <Text>Page not found</Text>
    </Stack>
  </Page.Body>
</Page>`}>
              <div className="embedded-preview" style={{ height: '300px' }}>
                <Page fullHeight style={{ backgroundColor: '#f8fafc', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack align="center" gap="sm">
                      <Heading level={1}>404</Heading>
                      <Text>Page not found</Text>
                    </Stack>
                </Page>
              </div>
            </LiveExample>
            <Note>
              In the example above, the height is constrained to 300px for the preview. In a real application, <code>fullHeight</code> will use <code>100vh</code>.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>API Reference</Heading>
            
            <Stack gap="lg">
              <div>
                <Heading level={3}>Page Props</Heading>
                <PropTable props={pageProps} />
              </div>

              <div>
                <Heading level={3}>Slot Props (Header, Body, Footer)</Heading>
                <PropTable props={subComponentProps} />
              </div>
            </Stack>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}

export default PageDocs;
