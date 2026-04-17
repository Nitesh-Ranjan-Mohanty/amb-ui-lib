import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample, Note } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function ElevationDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Elevation</Heading>
          <Text size="lg">Apply shadow utilities to create depth and layering in your UI.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Shadow classes</Heading>
            <Text>The library exposes a range of shadows from subtle to bold.</Text>
            <ul>
              <li><code>shadow-none</code> — no shadow.</li>
              <li><code>shadow-1</code> — very light shadow.</li>
              <li><code>shadow-2</code> — light, balanced shadow.</li>
              <li><code>shadow-4</code> — medium depth.</li>
              <li><code>shadow-8</code> — strong elevation.</li>
            </ul>
            <Note title="Pseudo states">
              You can use hover and focus prefixes like <code>hover:shadow-8</code> and <code>focus:shadow-4</code>.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <LiveExample code={`<div className={styles.shadow1 + ' ' + styles.p4 + ' ' + styles.borderRound + ' ' + styles.bgSurface0}>shadow-1</div>`}>
              <div className={styles.flex} style={{ gap: '16px', flexWrap: 'wrap' }}>
                <div className={csx(styles.shadowNone, styles.p4, styles.bgSurface0, styles.border200, styles.borderSolid, styles.roundedLg)} style={{ minWidth: '180px' }}>
                  shadow-none
                </div>
                <div className={csx(styles.shadow1, styles.p4, styles.bgSurface0, styles.border200, styles.borderSolid, styles.roundedLg)} style={{ minWidth: '180px' }}>
                  shadow-1
                </div>
                <div className={csx(styles.shadow4, styles.p4, styles.bgSurface0, styles.border200, styles.borderSolid, styles.roundedLg)} style={{ minWidth: '180px' }}>
                  shadow-4
                </div>
                <div className={csx(styles.shadow8, styles.p4, styles.bgSurface0, styles.border200, styles.borderSolid, styles.roundedLg)} style={{ minWidth: '180px' }}>
                  shadow-8
                </div>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Responsive elevation</Heading>
            <Text>Use breakpoint prefixes to adjust elevation at different screen sizes.</Text>
            <pre className="example-code">
              <code>{`<div className={styles.shadow1 + ' ' + styles.mdShadow4}>Responsive shadow</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
