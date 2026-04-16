import { Button, Heading, Page, Section, Stack, Text } from '@amb-ui';
import { LiveExample, PropTable } from '../components/DocComponents';

const buttonProps = [
  { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", description: 'The visual style of the button.', default: "'primary'" },
  { name: 'size', type: "'sm' | 'md' | 'lg'", description: 'The size of the button.', default: "'md'" },
  { name: 'loading', type: 'boolean', description: 'Shows a loading indicator and disables the button.', default: 'false' },
  { name: 'disabled', type: 'boolean', description: 'Prevents user interaction.', default: 'false' },
  { name: 'fullWidth', type: 'boolean', description: 'Whether the button should take up the full width of its container.', default: 'false' },
  { name: 'leftIcon', type: 'ReactNode', description: 'Icon to display before the label.', default: '-' },
  { name: 'rightIcon', type: 'ReactNode', description: 'Icon to display after the label.', default: '-' },
];

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function ButtonDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Button</Heading>
          <Text size="lg">
            A versatile component for triggering actions and navigating through the application.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Variants</Heading>
            <Text>
              Use variants to communicate the importance of an action.
            </Text>
            <LiveExample code={`<Stack direction="row" gap="md">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="danger">Danger</Button>
</Stack>`}>
              <Stack direction="row" gap="md" wrap>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </Stack>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Sizes</Heading>
            <Text>
              Buttons come in three sizes to fit different contexts.
            </Text>
            <LiveExample code={`<Stack direction="row" align="center" gap="md">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</Stack>`}>
              <Stack direction="row" align="center" gap="md" wrap>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </Stack>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>States</Heading>
            <Text>
              Visual feedback for different interaction states.
            </Text>
            <LiveExample code={`<Stack direction="row" gap="md">
  <Button loading>Loading...</Button>
  <Button disabled>Disabled</Button>
</Stack>`}>
              <Stack direction="row" gap="md" wrap>
                <Button loading>Loading...</Button>
                <Button disabled>Disabled</Button>
              </Stack>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>With Icons</Heading>
            <Text>
              Enhance buttons with icons to provide visual cues.
            </Text>
            <LiveExample code={`<Stack direction="row" gap="md">
  <Button leftIcon={<PlusIcon />}>Create Item</Button>
  <Button rightIcon={<ArrowRightIcon />} variant="secondary">Next Step</Button>
</Stack>`}>
              <Stack direction="row" gap="md" wrap>
                <Button leftIcon={<PlusIcon />}>Create Item</Button>
                <Button rightIcon={<ArrowRightIcon />} variant="secondary">Next Step</Button>
              </Stack>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Full Width</Heading>
            <Text>
              Buttons can expand to fill their container's width, which is common in mobile layouts and forms.
            </Text>
            <LiveExample code={`<Button fullWidth variant="primary">Full Width Action</Button>`}>
              <div style={{ width: '100%', maxWidth: '400px' }}>
                <Button fullWidth variant="primary">Full Width Action</Button>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>API Reference</Heading>
            <PropTable props={buttonProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
