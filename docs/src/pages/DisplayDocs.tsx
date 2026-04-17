import { Heading, Page, Section, Stack, Text } from '@amb-ui';
import { Note } from '../components/DocComponents';

export default function DisplayDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Display Utilities</Heading>
          <Text size="lg">Control element display behavior using utility classes.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Display Modes</Heading>
            <Text>
              The utility module includes display helpers that let you switch between block, inline, flex, and hidden states.
            </Text>
            <ul>
              <li><code>hidden</code> — hides the element.</li>
              <li><code>block</code> — displays as a block element.</li>
              <li><code>inline</code> — displays as an inline element.</li>
              <li><code>inline-block</code> — displays as an inline-block element.</li>
              <li><code>flex</code> — enables flex layout.</li>
              <li><code>inline-flex</code> — enables inline flex layout.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Usage</Heading>
            <Text>
              Use display utilities to quickly adjust layout behavior without writing custom CSS.
            </Text>
            <pre className="example-code">
              <code>{`<div className={styles.flex}>
  <div className={styles.p3}>Flex item 1</div>
  <div className={styles.p3}>Flex item 2</div>
</div>

<span className={styles.inline}>Inline text</span>
<div className={styles.block}>Block text</div>
<div className={styles.hidden}>Hidden content</div>`}</code>
            </pre>
            <Note title="Tip">
              Display utilities are especially useful when you want to change element behavior responsively or on the fly.
            </Note>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
