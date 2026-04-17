import { Heading, Page, Section, Stack, Text, Caption, Row } from '@amb-ui';
import { Note, LiveExample, PropTable } from '../components/DocComponents';

const themeVariables = [
  { name: '--amb-primary-color', description: 'Primary color of the library, used for main actions and branding.', default: '#3B82F6' },
  { name: '--amb-primary-contrast-color', description: 'Color used for text/icons on top of primary color surfaces.', default: '#ffffff' },
  { name: '--amb-surface-0', description: 'The main background color of the application.', default: '#ffffff' },
  { name: '--amb-surface-50', description: 'Subtle background for panels and headers.', default: '#FAFAFA' },
  { name: '--amb-surface-200', description: 'Border and divider color.', default: '#EEEEEE' },
  { name: '--amb-text-color', description: 'Default text color.', default: '#495057' },
  { name: '--amb-text-muted-color', description: 'Color for supplementary or less important text.', default: '#6c757d' },
];

export default function ThemingDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Theming</Heading>
          <Text size="lg">
            A flexible, CSS-variable-based theming system designed for seamless customization and dark mode support.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Architecture</Heading>
            <Text>
              Theming in <strong>amb-ui-lib</strong> is powered by CSS Custom Properties (Variables). The library relies on a set of core variables prefixed with <code>--amb-</code>. 
              These variables are consumed by both the React components and the utility CSS module.
            </Text>
            <Note title="Theme Separation">
              The library separates **Structure** (Layout, Spacing) from **Skin** (Colors, Radii). This means you can change the entire look of your app without affecting its layout integrity.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Built-in Themes</Heading>
            <Text>
              We provide two highly optimized themes to get you started. They are distributed as CSS Modules for scoped application.
            </Text>
            
            <Row gap="lg" style={{ marginTop: '24px' }}>
              <div style={{ flex: 1 }} className="role-card">
                <Heading level={3}>One Light</Heading>
                <Text size="sm">A clean, high-contrast light theme with a soft blue accent.</Text>
                <div style={{ marginTop: '12px', height: '40px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3B82F6', marginRight: '8px' }} />
                  <div style={{ height: '8px', width: '60px', background: '#495057', borderRadius: '2px' }} />
                </div>
              </div>
              <div style={{ flex: 1, background: '#1e293b', border: 'none' }} className="role-card">
                <Heading level={3} style={{ color: '#fff' }}>One Dark</Heading>
                <Text size="sm" style={{ color: '#94a3b8' }}>A modern dark theme designed to reduce eye strain in low-light environments.</Text>
                <div style={{ marginTop: '12px', height: '40px', background: '#0f172a', border: '1px solid #334155', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3B82F6', marginRight: '8px' }} />
                  <div style={{ height: '8px', width: '60px', background: '#f8fafc', borderRadius: '2px' }} />
                </div>
              </div>
            </Row>
          </Section>

          <Section>
            <Heading level={2}>Usage</Heading>
            <Text>
              To apply a theme, import the theme module and apply its <code>root</code> class to a high-level container (usually your <code>App</code> component).
            </Text>
            <pre className="example-code">
              <code>{`import lightTheme from 'amb-ui-lib/styles/themes/amb-light.module.css';
import darkTheme from 'amb-ui-lib/styles/themes/amb-dark.module.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'light' ? lightTheme.root : darkTheme.root}>
      <header>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch Theme
        </button>
      </header>
      <main>
        {/* Your content will now use theme-aware variables */}
      </main>
    </div>
  );
}`}</code>
            </pre>
          </Section>

          <Section>
            <Heading level={2}>Core Variables</Heading>
            <Text>
              Customize these variables in your global CSS to override the default look of the library.
            </Text>
            <table className="prop-table">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Default (Light)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {themeVariables.map(v => (
                  <tr key={v.name}>
                    <td className="prop-name" style={{ fontSize: '0.8rem' }}>{v.name}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{v.default}</td>
                    <td>{v.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section>
            <Heading level={2}>Custom Themes</Heading>
            <Text>
              Creating a custom theme is as simple as defining a new set of CSS variables. You can even extend our existing themes.
            </Text>
            <pre className="example-code">
              <code>{`/* custom-theme.css */
.my-midnight-theme {
  --amb-primary-color: #7c3aed;
  --amb-surface-0: #020617;
  --amb-surface-50: #0f172a;
  --amb-text-color: #f8fafc;
  --amb-content-border-radius: 12px;
}`}</code>
            </pre>
            <Note title="Naming Convention">
              Always prefix your variables with <code>--amb-</code> to ensure they are correctly picked up by the library components and utilities.
            </Note>
          </Section>

          <Section>
            <Heading level={2}>Utility Integration</Heading>
            <Text>
              All utility classes in the <code>utils.module.css</code> are theme-aware. For example, <code>.surface-0</code> uses <code>var(--amb-surface-0)</code>. 
              This ensures that when you switch themes, your entire UI updates instantly.
            </Text>
            <LiveExample code={`<div className="surface-50 p-4 border-round border-1 border-200">
  <Text>I am a theme-aware container</Text>
</div>`}>
              <div style={{ 
                backgroundColor: 'var(--amb-surface-50, #f8fafc)', 
                padding: '24px', 
                borderRadius: '6px', 
                border: '1px solid var(--amb-surface-200, #e2e8f0)',
                width: '100%'
              }}>
                <Text weight="medium">Theme-Aware Container Preview</Text>
                <Caption>This surface uses theme variables.</Caption>
              </div>
            </LiveExample>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
