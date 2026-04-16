import { Caption, Heading, Label, Page, Section, Stack, Text, Typography } from '@amb-ui';
import { PropTable, LiveExample } from '../components/DocComponents';

const scale = [
  { token: 'xs', size: '12px', line: '16px' },
  { token: 'sm', size: '14px', line: '20px' },
  { token: 'base', size: '16px', line: '24px' },
  { token: 'lg', size: '18px', line: '28px' },
  { token: 'xl', size: '20px', line: '28px' },
  { token: '2xl', size: '24px', line: '32px' },
  { token: '3xl', size: '30px', line: '36px' },
  { token: '4xl', size: '36px', line: '40px' },
];

const typographyProps = [
  { name: 'role', type: "'display' | 'heading' | 'title' | 'body' | 'label' | 'caption'", description: 'Semantic role of the text', default: "'body'" },
  { name: 'size', type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'", description: 'Font size token', default: 'role-dependent' },
  { name: 'weight', type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'", description: 'Font weight', default: "'normal'" },
  { name: 'as', type: 'ElementType', description: 'The HTML element to render', default: 'div' },
];

export default function TypographyDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Typography</Heading>
          <Text size="lg">
            Guidelines and components for consistent text styling across the application.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>The Scale</Heading>
            <Text>Our system uses a modular scale to ensure hierarchy and rhythm.</Text>
            
            <table className="prop-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Size</th>
                  <th>Line Height</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {scale.map((s) => (
                  <tr key={s.token}>
                    <td className="prop-name">{s.token}</td>
                    <td>{s.size}</td>
                    <td>{s.line}</td>
                    <td>
                      <span style={{ fontSize: s.size, fontWeight: 500 }}>Aa</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section>
            <Heading level={2}>Primitives</Heading>
            <Text>
              We provide specific components for common typographic needs. These are built on top of the base <code>Typography</code> component.
            </Text>

            <Stack gap="lg" style={{ marginTop: '24px' }}>
              <div>
                <Heading level={3}>Heading</Heading>
                <Text>Used for page and section titles. Supports levels 1 through 6.</Text>
                <LiveExample code={`<Heading level={1}>The quick brown fox</Heading>
<Heading level={2}>The quick brown fox</Heading>
<Heading level={3}>The quick brown fox</Heading>`}>
                  <Stack gap="xs">
                    <Heading level={1}>Level 1 Heading</Heading>
                    <Heading level={2}>Level 2 Heading</Heading>
                    <Heading level={3}>Level 3 Heading</Heading>
                  </Stack>
                </LiveExample>
              </div>

              <div>
                <Heading level={3}>Text</Heading>
                <Text>The primary component for body text, paragraphs, and general content.</Text>
                <LiveExample code={`<Text size="lg">Large body text for emphasis.</Text>
<Text>Standard base body text.</Text>
<Text size="sm">Small secondary text.</Text>`}>
                  <Stack gap="sm">
                    <Text size="lg">Large body text for emphasis. It has a slightly larger font size and more generous line height.</Text>
                    <Text>Standard base body text. Perfect for long form content and general UI labels where space is not a major constraint.</Text>
                    <Text size="sm">Small secondary text. Use this for supplementary information, sidebars, or less important content.</Text>
                  </Stack>
                </LiveExample>
              </div>

              <div>
                <Heading level={3}>Label & Caption</Heading>
                <Text>Specialized components for forms and metadata.</Text>
                <LiveExample code={`<Label>Username</Label>
<Caption>Must be at least 8 characters long.</Caption>`}>
                  <Stack gap="xs">
                    <Label>Username</Label>
                    <Caption>Must be at least 8 characters long.</Caption>
                  </Stack>
                </LiveExample>
              </div>
            </Stack>
          </Section>

          <Section>
            <Heading level={2}>Component API</Heading>
            <Text>The base Typography component props available to all text primitives.</Text>
            <PropTable props={typographyProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
