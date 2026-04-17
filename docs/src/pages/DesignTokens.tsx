import { Heading, Page, Section, Stack, Text, Row, Caption } from '@amb-ui';
import { spacing, colors, radii, breakpoints } from '@amb-ui';
import { fontSizes, lineHeights, fontWeights, letterSpacings, fonts } from '@amb-ui';
import { Note } from '../components/DocComponents';

export default function DesignTokens() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Design Tokens</Heading>
          <Text size="lg">
            The fundamental visual building blocks of the amb-ui-lib design system.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Core Colors</Heading>
            <Text>
              Our color system is built to provide accessible, semantic, and brand-aligned palettes.
            </Text>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
              gap: '24px',
              marginTop: '24px'
            }}>
              {Object.entries(colors).map(([name, value]) => (
                <div key={name} className="role-card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ 
                    background: value, 
                    height: '100px', 
                    width: '100%',
                    borderBottom: '1px solid var(--border-color)'
                  }} />
                  <div style={{ padding: '16px' }}>
                    <Text weight="semibold" style={{ textTransform: 'capitalize', marginBottom: '4px', display: 'block' }}>{name}</Text>
                    <Caption style={{ fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '8px' }}>{value.toUpperCase()}</Caption>
                    <div style={{ 
                        fontSize: '10px', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.05em', 
                        color: 'var(--text-tertiary)',
                        fontWeight: 700
                    }}>
                        Token: colors.{name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <Heading level={2}>Typography</Heading>
            <Text>
              A robust type system that prioritizes legibility and clear hierarchy across all devices.
            </Text>
            
            <Stack gap="lg" style={{ marginTop: '24px' }}>
              <div className="role-card">
                <Heading level={3} style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Font Families</Heading>
                <Stack gap="md">
                  {Object.entries(fonts).map(([name, value]) => (
                    <div key={name}>
                      <Caption style={{ marginBottom: '8px', display: 'block', color: 'var(--accent-color)', fontWeight: 600 }}>{name.toUpperCase()}</Caption>
                      <Text style={{ fontFamily: value, fontSize: '1.25rem', lineHeight: 1.2 }}>
                        {value}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div className="role-card">
                  <Heading level={3} style={{ fontSize: '1rem', marginBottom: '16px' }}>Size Scale</Heading>
                  <table className="prop-table" style={{ margin: 0, width: '100%' }}>
                    <thead>
                      <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(fontSizes).map(([name, value]) => (
                        <tr key={name}>
                          <td className="prop-name">{name}</td>
                          <td>{value}px</td>
                          <td style={{ fontSize: value }}>Aa</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="role-card">
                  <Heading level={3} style={{ fontSize: '1rem', marginBottom: '16px' }}>Font Weights</Heading>
                  <table className="prop-table" style={{ margin: 0, width: '100%' }}>
                    <thead>
                      <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(fontWeights).map(([name, value]) => (
                        <tr key={name}>
                          <td className="prop-name">{name}</td>
                          <td>{value}</td>
                          <td style={{ fontWeight: value }}>The quick brown fox</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Stack>
          </Section>

          <Section>
            <Heading level={2}>Spacing</Heading>
            <Text>
              A modular spacing scale that ensures consistent rhythm and alignment throughout the UI.
            </Text>
            <div className="role-card" style={{ marginTop: '24px' }}>
                <table className="prop-table" style={{ margin: 0 }}>
                    <thead>
                        <tr>
                            <th>Token</th>
                            <th>Value</th>
                            <th>Visual Reference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(spacing).map(([name, value]) => (
                            <tr key={name}>
                                <td className="prop-name">{name}</td>
                                <td>{value}px</td>
                                <td>
                                    <div style={{ 
                                        height: '24px', 
                                        width: `${value}px`, 
                                        background: 'var(--accent-soft)', 
                                        border: '1px solid var(--accent-color)',
                                        borderRadius: '2px'
                                    }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </Section>

          <Section>
            <Heading level={2}>Border Radius</Heading>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
              gap: '24px',
              marginTop: '16px'
            }}>
              {Object.entries(radii).map(([name, value]) => (
                <div key={name} className="role-card" style={{ textAlign: 'center' }}>
                    <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        margin: '0 auto 16px',
                        background: 'white',
                        border: '2px solid var(--accent-color)',
                        borderRadius: `${value}px`
                    }} />
                    <Text weight="semibold" style={{ display: 'block' }}>{name}</Text>
                    <Caption>{value}px</Caption>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <Heading level={2}>Breakpoints</Heading>
            <Text style={{ marginBottom: '24px' }}>
                Mobile-first breakpoints for building responsive interfaces.
            </Text>
            <div className="role-card">
                <table className="prop-table" style={{ margin: 0 }}>
                    <thead>
                        <tr>
                            <th>Device / Size</th>
                            <th>Token</th>
                            <th>Width (min-width)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(breakpoints).map(([name, value]) => (
                            <tr key={name}>
                                <td style={{ fontWeight: 500 }}>
                                    {name === 'sm' && 'Mobile / Tablet'}
                                    {name === 'md' && 'Small Laptop'}
                                    {name === 'lg' && 'Desktop'}
                                    {name === 'xl' && 'Wide Desktop'}
                                </td>
                                <td className="prop-name">{name}</td>
                                <td>{value}px</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </Section>

          <Section>
            <Note title="Implementation Tip">
                You can access these tokens in your React components by importing them from <code>amb-ui-lib</code>. 
                For CSS usage, we recommend mapping these to your own CSS custom properties.
            </Note>
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
