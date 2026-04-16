import { Heading, Page, Row, Section, Stack, Text } from '@amb-ui';
import { Note, LiveExample } from '../components/DocComponents';

export default function Home() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Introduction</Heading>
          <Text size="lg">
            A minimalist, performance-focused UI library for building high-quality React interfaces.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Core Philosophy</Heading>
            <Text>
              amb-ui-lib is designed to provide a solid foundation for your application's layout and typography. 
              Instead of scattering random styles throughout your CSS, we provide a curated set of 
              layout primitives and semantic typography roles.
            </Text>
            
            <div className="role-grid">
              <div className="role-card">
                <Heading level={4}>Layout Primitives</Heading>
                <Text size="sm">Stack, Row, and Grid components provide structured spacing and alignment without custom CSS.</Text>
              </div>
              <div className="role-card">
                <Heading level={4}>Consistent Scale</Heading>
                <Text size="sm">A 1.25x major third scale ensures that typography and spacing feel balanced and intentional.</Text>
              </div>
              <div className="role-card">
                <Heading level={4}>Type Safety</Heading>
                <Text size="sm">Full TypeScript support for all props and tokens ensures you never use an invalid value.</Text>
              </div>
            </div>
          </Section>

          <Section>
            <Heading level={2}>Installation</Heading>
            <Note title="Local Development">
              This documentation is currently running against the local source code, allowing for real-time testing of library changes.
            </Note>
            <LiveExample code={`npm install amb-ui-lib`}>
              <Row gap="sm" align="center">
                <span style={{ fontSize: '24px' }}>📦</span>
                <Text weight="semibold">Ready to get started?</Text>
              </Row>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Quick Start</Heading>
            <Text>
              Wrap your application or sections with the provided primitives to start using the system.
            </Text>
            <pre className="example-code">
              <code>{`import { Container, Heading, Stack, Text } from 'amb-ui-lib';

function App() {
  return (
    <Container maxWidth="lg" padding="md">
      <Stack gap="md">
        <Heading level={1}>Hello World</Heading>
        <Text>Welcome to my new app.</Text>
      </Stack>
    </Container>
  );
}`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
