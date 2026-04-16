import { Caption, Grid, Heading, Page, Section, Stack, Text } from '@amb-ui';
import { LiveExample, Note, PropTable } from '../components/DocComponents';

const gridProps = [
  { name: 'columns', type: 'number', description: 'Number of columns in the grid.', default: '12' },
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Spacing token to use between grid cells.', default: 'md' },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", description: 'Vertical alignment of grid items.', default: 'stretch' },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'stretch'", description: 'Horizontal alignment of grid items.', default: 'stretch' },
];

const gridItemProps = [
  { name: 'span', type: 'number | { base?: number; sm?: number; md?: number; lg?: number; xl?: number }', description: 'Number of columns the item should span. Supports responsive values.', default: '12' },
];

export default function GridDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Grid</Heading>
          <Text style={{ fontSize: '1.125rem' }}>
            A responsive grid primitive that provides structure with sensible constraints, not a random CSS wrapper.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Why Grid</Heading>
            <Text>
              Grid helps define how content aligns, how it responds to breakpoints, and how spacing is applied consistently across layouts.
            </Text>
            <Note title="Minimal but powerful">
              The Grid API is intentionally limited: columns, gap, and item spans. It is not a thin wrapper over every CSS grid feature.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Basic usage</Heading>
            <Text>The default grid uses 12 columns and spacing from the shared layout tokens.</Text>
            <LiveExample code={`<Grid columns={12} gap="lg">
  <Grid.Item span={6}>Left column</Grid.Item>
  <Grid.Item span={6}>Right column</Grid.Item>
</Grid>`}>
              <Grid columns={12} gap="lg" style={{ width: '100%' }}>
                <Grid.Item span={6} style={{ background: '#ffffff', padding: '18px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <Text style={{ fontWeight: 600 }}>Left column</Text>
                </Grid.Item>
                <Grid.Item span={6} style={{ background: '#ffffff', padding: '18px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <Text style={{ fontWeight: 600 }}>Right column</Text>
                </Grid.Item>
              </Grid>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Responsive spans</Heading>
            <Text>Use a responsive span object to adjust column width at breakpoints.</Text>
            <LiveExample code={`<Grid columns={12} gap="lg">
  <Grid.Item span={{ base: 12, md: 6 }}>Left</Grid.Item>
  <Grid.Item span={{ base: 12, md: 6 }}>Right</Grid.Item>
</Grid>`}>
              <Grid columns={12} gap="lg" style={{ width: '100%' }}>
                <Grid.Item span={{ base: 12, md: 6 }} style={{ background: '#ffffff', padding: '18px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <Text style={{ fontWeight: 600 }}>Responsive left</Text>
                </Grid.Item>
                <Grid.Item span={{ base: 12, md: 6 }} style={{ background: '#ffffff', padding: '18px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <Text style={{ fontWeight: 600 }}>Responsive right</Text>
                </Grid.Item>
              </Grid>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>API Reference</Heading>
            <PropTable props={gridProps} />
            <Heading level={3} style={{ marginTop: '24px' }}>Grid.Item props</Heading>
            <PropTable props={gridItemProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
