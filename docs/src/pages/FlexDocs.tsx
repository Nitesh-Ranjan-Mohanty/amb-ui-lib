import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample, Note } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function FlexDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Flex</Heading>
          <Text size="lg">Use flex utilities to control how items grow, shrink, and wrap inside a flex container.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Core classes</Heading>
            <Text>These utilities let you control flex behavior quickly.</Text>
            <ul>
              <li><code>flex</code> — enables a flex container.</li>
              <li><code>flex-1</code> — grows and shrinks to fill available space.</li>
              <li><code>flex-auto</code> — grows and shrinks with an auto basis.</li>
              <li><code>flex-initial</code> — resets to the initial flex settings.</li>
              <li><code>flex-none</code> — prevents growth and shrinkage.</li>
            </ul>
            <Note title="Responsive">
              Use responsive prefixes such as <code>sm:flex-1</code> or <code>md:flex-none</code> to apply flex rules at breakpoints.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <Text>Combine flex utilities to create adaptive layouts.</Text>
            <LiveExample code={`<div className={styles.flex}>
  <div className={styles.flex1 + ' ' + styles.p3 + ' ' + styles.bgSurface50}>Left</div>
  <div className={styles.flexAuto + ' ' + styles.p3 + ' ' + styles.bgSurface50}>Right</div>
</div>`}>
              <div className={styles.flex} style={{ width: '100%' }}>
                <div className={csx(styles.flex1, styles.p3, styles.bgSurface50, styles.border200, styles.borderSolid)}>
                  Flex 1 content
                </div>
                <div className={csx(styles.flexAuto, styles.p3, styles.bgSurface50, styles.border200, styles.borderSolid)}>
                  Flex auto content
                </div>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Responsive usage</Heading>
            <Text>Responsive prefixed flex utilities help customize layout behavior across breakpoints.</Text>
            <pre className="example-code">
              <code>{`<div className={styles.flex}>
  <div className={styles.flex1 + ' ' + styles.mdFlexNone}>Responsive item</div>
</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
