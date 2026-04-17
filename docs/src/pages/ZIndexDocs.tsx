import { Heading, Page, Section, Stack, Text } from '@amb-ui';

export default function ZIndexDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Z-Index Utilities</Heading>
          <Text size="lg">Manage stacking order with z-index helper classes.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Z-Index Classes</Heading>
            <Text>
              Use z-index utilities to control which elements appear on top of others.
            </Text>
            <ul>
              <li><code>z-auto</code> — resets z-index to auto.</li>
              <li><code>z-0</code> through <code>z-5</code> — set fixed stacking order values.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Usage Example</Heading>
            <pre className="example-code">
              <code>{`<div className={styles.relative}>
  <div className={styles.absolute + ' ' + styles.top0 + ' ' + styles.left0 + ' ' + styles.z0}>
    Background layer
  </div>
  <div className={styles.absolute + ' ' + styles.top0 + ' ' + styles.left0 + ' ' + styles.z5}>
    Foreground layer
  </div>
</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
