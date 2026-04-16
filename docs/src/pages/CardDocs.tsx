import { Card, Caption, Heading, Page, Section, Stack, Text } from '@amb-ui';
import { LiveExample, Note, PropTable } from '../components/DocComponents';

const cardProps = [
  { name: 'variant', type: "'elevated' | 'outlined' | 'ghost'", description: 'Visual surface style for the card.', default: 'elevated' },
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", description: 'Internal padding around the card content.', default: 'md' },
  { name: 'radius', type: "'sm' | 'md' | 'lg'", description: 'Border radius for the card surface.', default: 'md' },
  { name: 'clickable', type: 'boolean', description: 'Enables hover/focus states and pointer cursor for interactive cards.', default: 'false' }
];

export default function CardDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Card</Heading>
          <Text style={{ fontSize: '1.125rem' }}>
            A surface primitive for grouping content with consistent background, border, radius, and padding.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Why Card</Heading>
            <Text>
              Cards are a fundamental surface primitive. They should be predictable and consistent, not a collection of random boxes.
            </Text>
            <Note title="Design discipline">
              Keep the Card API small: variant, padding, radius, and optional clickable behavior. Everything else should be composed inside.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Basic usage</Heading>
            <Text>The card is a simple wrapper that works with your layout primitives.</Text>
            <LiveExample code={`<Card>
  <Card.Header>
    <Heading level={3}>Card title</Heading>
  </Card.Header>
  <Card.Content>
    <Text>Card body content goes here.</Text>
  </Card.Content>
  <Card.Footer>
    <Caption>Footer note</Caption>
  </Card.Footer>
</Card>`}>
              <Card style={{ width: '100%', maxWidth: 620 }}>
                <Card.Header>
                  <Heading level={3}>Card title</Heading>
                </Card.Header>
                <Card.Content>
                  <Text>
                    Use Card as a consistent surface for grouped content. Keep spacing inside with Stack, not extra custom margins everywhere.
                  </Text>
                </Card.Content>
                <Card.Footer>
                  <Caption>Footer note</Caption>
                </Card.Footer>
              </Card>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Variants</Heading>
            <Stack gap="lg">
              <Card style={{ width: '100%' }}>
                <Card.Content>
                  <Text>Elevated is the default card style.</Text>
                </Card.Content>
              </Card>
              <Card variant="outlined" style={{ width: '100%' }}>
                <Card.Content>
                  <Text>Outlined is clean and minimal.</Text>
                </Card.Content>
              </Card>
              <Card variant="ghost" style={{ width: '100%' }}>
                <Card.Content>
                  <Text>Ghost blends into the surface when you need very light emphasis.</Text>
                </Card.Content>
              </Card>
            </Stack>
          </Section>

          <Section>
            <Heading level={2}>Interactive cards</Heading>
            <Text>The clickable prop adds hover and focus treatment for actionable surfaces.</Text>
            <LiveExample code={`<Card clickable>
  <Card.Content>
    <Text>Click me</Text>
  </Card.Content>
</Card>`}>
              <Card clickable style={{ width: '100%' }}>
                <Card.Content>
                  <Text>Clickable cards feel interactive while staying layout-focused.</Text>
                </Card.Content>
              </Card>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>API Reference</Heading>
            <PropTable props={cardProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
