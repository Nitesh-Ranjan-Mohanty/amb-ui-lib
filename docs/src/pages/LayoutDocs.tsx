import { Container, Heading, Page, Row, Section, Stack, Text } from '@amb-ui';
import { LiveExample, PropTable } from '../components/DocComponents';

const stackProps = [
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Spacing between items.', default: "'md'" },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", description: 'Cross-axis alignment.', default: "'start'" },
];

const rowProps = [
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Spacing between items.', default: "'md'" },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", description: 'Cross-axis alignment (vertical).', default: "'start'" },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'between'", description: 'Main-axis alignment (horizontal).', default: "'start'" },
];

const containerProps = [
  { name: 'maxWidth', type: "'narrow' | 'content' | 'page' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Maximum width of the container.', default: "'page'" },
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Horizontal padding.', default: "'lg'" },
  { name: 'center', type: 'boolean', description: 'Whether to center the container horizontally.', default: 'true' },
];

const sectionProps = [
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'All-around padding for the section.', default: "'lg'" },
  { name: 'as', type: 'ElementType', description: 'The HTML element to render.', default: "'section'" },
];

export default function LayoutDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Layout</Heading>
          <Text size="lg">
            Essential primitives for managing spacing, alignment, and distribution.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Stack</Heading>
            <Text>
              The <code>Stack</code> component is used to lay out items vertically with consistent spacing.
            </Text>
            <LiveExample code={`<Stack gap="md">
  <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Item 1</div>
  <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Item 2</div>
  <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Item 3</div>
</Stack>`}>
              <Stack gap="md" style={{ width: '100%' }}>
                <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Item 1</div>
                <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Item 2</div>
                <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Item 3</div>
              </Stack>
            </LiveExample>
            <PropTable props={stackProps} />
          </Section>

          <Section>
            <Heading level={2}>Row</Heading>
            <Text>
              The <code>Row</code> component is used to lay out items horizontally with consistent spacing and alignment options.
            </Text>
            <LiveExample code={`<Row gap="lg" align="center" justify="between">
  <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Left</div>
  <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Right</div>
</Row>`}>
              <Row gap="lg" align="center" justify="between" style={{ width: '100%' }}>
                <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Left</div>
                <div style={{ padding: '12px', background: '#e2e8f0', borderRadius: '4px' }}>Right</div>
              </Row>
            </LiveExample>
            <PropTable props={rowProps} />
          </Section>

          <Section>
            <Heading level={2}>Container</Heading>
            <Text>
              The <code>Container</code> centers your content horizontally and limits its maximum width.
            </Text>
            <LiveExample code={`<Container maxWidth="md" padding="md">
  <div style={{ padding: '24px', background: '#f1f5f9', border: '1px dashed #cbd5e1' }}>
    Container content
  </div>
</Container>`}>
              <Container maxWidth="md" padding="md" style={{ border: '1px solid #e2e8f0' }}>
                <div style={{ padding: '24px', background: '#f1f5f9', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
                  Container content
                </div>
              </Container>
            </LiveExample>
            <PropTable props={containerProps} />
          </Section>

          <Section>
            <Heading level={2}>Section</Heading>
            <Text>
              A simple block-level container with consistent padding. Useful for dividing pages into logical parts.
            </Text>
            <LiveExample code={`<Section padding="xl" style={{ background: '#f8fafc' }}>
  <Heading level={3}>Section Title</Heading>
  <Text>Section content with generous XL padding.</Text>
</Section>`}>
              <Section padding="xl" style={{ background: '#f8fafc', width: '100%', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <Heading level={3}>Section Title</Heading>
                <Text>Section content with generous XL padding.</Text>
              </Section>
            </LiveExample>
            <PropTable props={sectionProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
