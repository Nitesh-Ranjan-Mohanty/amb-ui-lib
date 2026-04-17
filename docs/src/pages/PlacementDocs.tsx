import { Heading, Page, Section, Stack, Text } from '@amb-ui';

export default function PlacementDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Placement Utilities</Heading>
          <Text size="lg">Fine-tune the position of elements using offset and placement helpers.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Position Offsets</Heading>
            <Text>
              Use placement utilities to move positioned elements along the x and y axes.
            </Text>
            <ul>
              <li><code>top-0</code>, <code>right-0</code>, <code>bottom-0</code>, <code>left-0</code></li>
              <li><code>top-50</code>, <code>right-50</code>, <code>bottom-50</code>, <code>left-50</code></li>
              <li><code>top-auto</code>, <code>left-auto</code>, <code>right-auto</code>, <code>bottom-auto</code></li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Usage Example</Heading>
            <pre className="example-code">
              <code>{`<div className={styles.relative}>
  <div className={styles.absolute + ' ' + styles.top0 + ' ' + styles.right0}>
    Top right
  </div>
</div>

<div className={styles.relative}>
  <div className={styles.absolute + ' ' + styles.top50 + ' ' + styles.left50}>
    Center offset
  </div>
</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
