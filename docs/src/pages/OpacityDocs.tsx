import { Heading, Page, Section, Stack, Text, csx } from '@amb-ui';
import { LiveExample } from '../components/DocComponents';
import styles from '../../../styles/utils/utils.module.css';

export default function OpacityDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Opacity</Heading>
          <Text size="lg">Manage transparency with a simple opacity utility scale.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Opacity values</Heading>
            <Text>Use these utilities to adjust transparency in fixed steps.</Text>
            <ul>
              <li><code>opacity-0</code> — fully transparent.</li>
              <li><code>opacity-50</code> — 50% opacity.</li>
              <li><code>opacity-100</code> — fully opaque.</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Example</Heading>
            <LiveExample code={`<div className={styles.opacity40 + ' ' + styles.bgPrimary + ' ' + styles.p4 + ' ' + styles.roundedLg}>opacity-40</div>`}>
              <div className={csx(styles.flex, styles.gap4)}>
                <div className={csx(styles.opacity10, styles.bgPrimary, styles.p4, styles.roundedLg, styles.textWhite)}>opacity-10</div>
                <div className={csx(styles.opacity40, styles.bgPrimary, styles.p4, styles.roundedLg, styles.textWhite)}>opacity-40</div>
                <div className={csx(styles.opacity70, styles.bgPrimary, styles.p4, styles.roundedLg, styles.textWhite)}>opacity-70</div>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Responsive opacity</Heading>
            <Text>Use breakpoints to change opacity for different screen sizes.</Text>
            <pre className="example-code">
              <code>{`<div className={styles.opacity40 + ' ' + styles.mdOpacity100}>Responsive opacity</div>`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
