import { Heading, Page, Section, Stack, Text } from '@amb-ui';
import { Note, LiveExample } from '../components/DocComponents';

export default function Home() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Introduction</Heading>
          <Text size="lg">
            A minimalist, performance-focused typography library for building high-quality React interfaces.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Core Philosophy</Heading>
            <Text>
              @amb/ui-lib is designed to provide a solid foundation for your application's visual hierarchy. 
              Instead of scattering font sizes and weights throughout your CSS, we provide a curated set of 
              semantic roles and a fixed scale.
            </Text>
            
            <div className="role-grid">
              <div className="role-card">
                <Heading level={4}>Consistent Scale</Heading>
                <Text size="sm">A 1.25x major third scale ensures that typography sizes feel balanced and intentional.</Text>
              </div>
              <div className="role-card">
                <Heading level={4}>Semantic Intent</Heading>
                <Text size="sm">Use roles like Display, Heading, and Body to convey meaning rather than just appearance.</Text>
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
            <LiveExample code={`npm install @amb/ui-lib`}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>📦</span>
                <Text weight="semibold">Ready to get started?</Text>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Quick Start</Heading>
            <Text>
              Wrap your application or sections with the provided typography primitives to start using the system.
            </Text>
            <pre className="example-code">
              <code>{`import { Heading, Text, Stack } from '@amb/ui-lib';

function App() {
  return (
    <Stack gap="md">
      <Heading level={1}>Hello World</Heading>
      <Text>Welcome to my new app.</Text>
    </Stack>
  );
}`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
