import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function SpacingDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Spacing</Heading>
          <Text size="lg">Use spacing utilities for padding, margin, and responsive gaps.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Spacing patterns</Heading>
            <Text>The class pattern is <code>[property][side]-[size]</code>.</Text>
            <ul>
              <li><code>p1</code>, <code>p2</code>, <code>p3</code> — padding.</li>
              <li><code>m1</code>, <code>m2</code>, <code>m3</code> — margin.</li>
              <li><code>pt4</code>, <code>pb4</code> — padding top/bottom.</li>
              <li><code>mx3</code>, <code>py2</code> — horizontal/vertical spacing.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <LiveExample code={`<div className={styles.p4 + ' ' + styles.bgSurface50}>Box with padding</div>`}>
              <div className={csx(styles.p4, styles.bgSurface50, styles.border200, styles.borderSolid, styles.roundedLg)}>
                Padded box
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Responsive spacing</Heading>
            <Text>Prefix spacing utilities with breakpoints for adaptive layouts.</Text>
            <pre className="example-code">
              <code>{`<div className={styles.p3 + ' ' + styles.mdP6}>Responsive padding</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
