import { Heading, Page, Section, Stack, Text } from '@amb-ui';

export default function PositionDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Position Utilities</Heading>
          <Text size="lg">Control element positioning using simple helpers.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Position Values</Heading>
            <Text>
              These utilities set an element's CSS <code>position</code> property.
            </Text>
            <ul>
              <li><code>static</code> — default document flow.</li>
              <li><code>relative</code> — positioned relative to its normal position.</li>
              <li><code>absolute</code> — positioned relative to the nearest positioned ancestor.</li>
              <li><code>fixed</code> — fixed relative to the viewport.</li>
              <li><code>sticky</code> — sticks to its offset position when scrolling.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Usage Example</Heading>
            <pre className="example-code">
              <code>{`<div className={styles.relative}>
  <div className={styles.absolute} style={{ top: '10px', right: '10px' }}>
    Positioned box
  </div>
</div>

<div className={styles.sticky} style={{ top: 0 }}>
  Sticky header
</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
