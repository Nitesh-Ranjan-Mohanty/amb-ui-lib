import { Heading, Page, Section, Stack, Text } from '@amb-ui';
import { Note } from '../components/DocComponents';

export default function InstallationDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Installation</Heading>
          <Text size="lg">Install the library, configure CSS utilities, and get started with theme-aware styles.</Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Install via npm</Heading>
            <Text>The recommended way to install <code>amb-ui-lib</code> is with npm.</Text>
            <pre className="example-code">
              <code>{`npm install amb-ui-lib`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Import the utility module</Heading>
            <Text>The utility CSS module is published at <code>amb-ui-lib/styles/utils.module.css</code>. Import it once in your component and use the exported class names.</Text>
            <pre className="example-code">
              <code>{`import styles from 'amb-ui-lib/styles/utils.module.css';

function App() {
  return (
    <div className={styles.grid}>
      <div className={styles.col}>Column 1</div>
      <div className={styles.col}>Column 2</div>
    </div>
  );
}`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>CDN / direct stylesheet load</Heading>
            <Text>If you prefer not to bundle CSS modules, import the CSS file directly from a static build or CDN copy of the library.</Text>
            <pre className="example-code">
              <code>{`<link rel="stylesheet" href="/path/to/amb-ui-lib/styles/utils.css" />`}</code>
            </pre>
            <Note title="Note">
              The React library is still shipped separately. The stylesheet-only approach is useful for static pages or non-React environments.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Compatibility</Heading>
            <Text>The library is designed to work with modern React projects and bundlers that support CSS modules.</Text>
            <ul>
              <li>Vite</li>
              <li>Webpack</li>
              <li>Create React App</li>
              <li>Next.js (with CSS modules enabled)</li>
            </ul>
          </Section>

          <Section>
            <Heading level={2}>Theme support</Heading>
            <Text>Theme files are provided as scoped CSS modules under <code>amb-ui-lib/styles/themes/</code>.</Text>
            <pre className="example-code">
              <code>{`import lightTheme from 'amb-ui-lib/styles/themes/amb-light.module.css';
import darkTheme from 'amb-ui-lib/styles/themes/amb-dark.module.css';

function App({ isDark }) {
  return (
    <div className={isDark ? darkTheme.root : lightTheme.root}>
      {/* app content */}
    </div>
  );
}`}</code>
            </pre>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
