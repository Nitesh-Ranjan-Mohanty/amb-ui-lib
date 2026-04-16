import { Heading, Page, Section, Stack, Text, TextField, Input, Textarea, Checkbox, Radio, Switch, Button, Container, Select } from '@amb-ui';
import { LiveExample, PropTable } from '../components/DocComponents';

const inputProps = [
  { name: 'size', type: "'sm' | 'md' | 'lg'", description: 'The vertical size of the input.', default: "'md'" },
  { name: 'fullWidth', type: 'boolean', description: 'Whether the input should fill its container.', default: 'false' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.', default: 'false' },
];

const textFieldProps = [
  { name: 'label', type: 'string', description: 'The label for the field.', default: '-' },
  { name: 'helpText', type: 'string', description: 'Supplementary guidance text.', default: '-' },
  { name: 'error', type: 'string', description: 'Error message to display.', default: '-' },
  { name: 'fullWidth', type: 'boolean', description: 'Whether the field should fill its container.', default: 'false' },
  { name: 'children', type: 'ReactElement', description: 'Usually an Input or Textarea component.', default: '-' },
];

const checkboxProps = [
  { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked.', default: 'false' },
  { name: 'defaultChecked', type: 'boolean', description: 'Whether the checkbox is checked by default.', default: 'false' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction when true.', default: 'false' },
  { name: 'children', type: 'ReactNode', description: 'Label content displayed next to the checkbox.', default: '-' },
];

const radioProps = [
  { name: 'name', type: 'string', description: 'Radio group name for native grouping.', default: '-' },
  { name: 'checked', type: 'boolean', description: 'Whether the radio option is selected.', default: 'false' },
  { name: 'defaultChecked', type: 'boolean', description: 'Whether the radio option is selected by default.', default: 'false' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction when true.', default: 'false' },
  { name: 'children', type: 'ReactNode', description: 'Label content displayed next to the radio option.', default: '-' },
];

const textareaProps = [
  { name: 'placeholder', type: 'string', description: 'Placeholder text for the textarea.', default: '-' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.', default: 'false' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", description: 'Vertical size of the textarea.', default: "'md'" },
  { name: 'fullWidth', type: 'boolean', description: 'Whether the textarea should fill its container.', default: 'false' }
];

const selectProps = [
  { name: 'options', type: 'Array<{ label: string; value: string }>', description: 'Choices rendered by the select.', default: '-' },
  { name: 'value', type: 'string', description: 'Selected value.', default: '-' },
  { name: 'onChange', type: '(event) => void', description: 'Change handler for the select.', default: '-' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.', default: 'false' },
  { name: 'fullWidth', type: 'boolean', description: 'Whether the select should fill its container.', default: 'false' }
];

const switchProps = [
  { name: 'checked', type: 'boolean', description: 'Whether the switch is on.', default: 'false' },
  { name: 'defaultChecked', type: 'boolean', description: 'Whether the switch is on by default.', default: 'false' },
  { name: 'onChange', type: '(event) => void', description: 'Change handler for the switch.', default: '-' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.', default: 'false' },
  { name: 'fullWidth', type: 'boolean', description: 'Whether the switch row should fill its container.', default: 'false' },
  { name: 'children', type: 'ReactNode', description: 'Label content displayed next to the switch.', default: '-' }
];

export default function FormDocs() {
  return (
    <Page>
      <Page.Header>
        <div className="section-header">
          <Heading level={1}>Forms</Heading>
          <Text size="lg">
            Components for collecting user input with consistent styling and accessible patterns.
          </Text>
        </div>
      </Page.Header>

      <Page.Body>
        <Stack gap="xl">
          <Section>
            <Heading level={2}>Input</Heading>
            <Text>
              A fundamental text input primitive. It handles hover, focus, and disabled states.
            </Text>
            <LiveExample code={`<Stack gap="md">
  <Input placeholder="Small input" size="sm" />
  <Input placeholder="Medium input" size="md" />
  <Input placeholder="Large input" size="lg" />
</Stack>`}>
              <Stack gap="md" style={{ width: '100%', maxWidth: '320px' }}>
                <Input placeholder="Small input" size="sm" />
                <Input placeholder="Medium input" size="md" />
                <Input placeholder="Large input" size="lg" />
              </Stack>
            </LiveExample>
            <PropTable props={inputProps} />
          </Section>

          <Section>
            <Heading level={2}>TextField</Heading>
            <Text>
              A high-level component that wraps an input with a label, help text, and error messages.
            </Text>
            <LiveExample code={`<TextField 
  label="Email Address" 
  helpText="We'll never share your email."
>
  <Input placeholder="you@example.com" />
</TextField>`}>
              <div style={{ width: '100%', maxWidth: '400px' }}>
                <TextField 
                  label="Email Address" 
                  helpText="We'll never share your email."
                >
                  <Input placeholder="you@example.com" />
                </TextField>
              </div>
            </LiveExample>
          </Section>

          <Section>
            <Heading level={2}>Textarea</Heading>
            <Text>
              The <code>Textarea</code> is the multiline counterpart to <code>Input</code>, with the same styling and sizing system.
            </Text>
            <LiveExample code={`<TextField
  label="Message"
  helpText="Tell us what you’re thinking."
  fullWidth
>
  <Textarea placeholder="Enter your message" />
</TextField>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <TextField
                  label="Message"
                  helpText="Tell us what you’re thinking."
                  fullWidth
                >
                  <Textarea placeholder="Enter your message" />
                </TextField>
              </div>
            </LiveExample>
            <LiveExample code={`<TextField
  label="Message"
  error="Please enter a message."
  fullWidth
>
  <Textarea placeholder="Enter your message" />
</TextField>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <TextField
                  label="Message"
                  error="Please enter a message."
                  fullWidth
                >
                  <Textarea placeholder="Enter your message" />
                </TextField>
              </div>
            </LiveExample>
            <PropTable props={textareaProps} />
          </Section>

          <Section>
            <Heading level={2}>Select</Heading>
            <Text>
              The <code>Select</code> wraps a native dropdown and matches the same input system.
            </Text>
            <LiveExample code={`<TextField label="Category" fullWidth>
  <Select
    value="design"
    onChange={(event) => setValue(event.target.value)}
    options={[
      { label: 'Design', value: 'design' },
      { label: 'Development', value: 'dev' }
    ]}
  />
</TextField>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <TextField label="Category" fullWidth>
                  <Select
                    value="design"
                    onChange={() => { }}
                    options={[
                      { label: 'Design', value: 'design' },
                      { label: 'Development', value: 'dev' }
                    ]}
                  />
                </TextField>
              </div>
            </LiveExample>
            <PropTable props={selectProps} />
          </Section>

          <Section>
            <Heading level={2}>Checkbox</Heading>
            <Text>
              Use <code>Checkbox</code> for independent toggles with a label.
            </Text>
            <LiveExample code={`<Checkbox>Accept terms and conditions</Checkbox>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <Checkbox>Accept terms and conditions</Checkbox>
              </div>
            </LiveExample>
            <LiveExample code={`<Checkbox disabled checked>Receive updates</Checkbox>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <Checkbox disabled checked>Receive updates</Checkbox>
              </div>
            </LiveExample>
            <PropTable props={checkboxProps} />
          </Section>

          <Section>
            <Heading level={2}>Radio</Heading>
            <Text>
              Use <code>Radio</code> for mutually exclusive options within the same group.
            </Text>
            <LiveExample code={`<Radio name="plan" checked>Basic plan</Radio>
<Radio name="plan">Pro plan</Radio>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <Radio name="plan" checked>Basic plan</Radio>
                <Radio name="plan">Pro plan</Radio>
              </div>
            </LiveExample>
            <PropTable props={radioProps} />
          </Section>

          <Section>
            <Heading level={2}>Switch</Heading>
            <Text>
              Use <code>Switch</code> for binary on/off settings with a clear toggle interaction.
            </Text>
            <LiveExample code={`<Switch checked onChange={() => {}}>Enable notifications</Switch>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <Switch checked onChange={() => { }}>Enable notifications</Switch>
              </div>
            </LiveExample>
            <LiveExample code={`<Switch disabled checked>Notifications enabled</Switch>`}>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <Switch disabled checked>Notifications enabled</Switch>
              </div>
            </LiveExample>
            <PropTable props={switchProps} />
          </Section>

          <Section>
            <Heading level={2}>Settings Page</Heading>
            <Text>
              A clean settings page built with the current primitives to evaluate spacing, alignment, and interaction.
            </Text>
            <LiveExample code={`<Container maxWidth="sm">
  <Stack gap="lg">
    <Heading>Profile Settings</Heading>

    <Stack gap="md">
      <TextField label="Name">
        <Input placeholder="Your name" />
      </TextField>

      <TextField label="Bio">
        <Textarea placeholder="Tell something..." />
      </TextField>

      <TextField label="Role">
        <Select
          value="design"
          onChange={() => {} }
          options={[
            { label: 'Designer', value: 'design' },
            { label: 'Developer', value: 'dev' }
          ]}
        />
      </TextField>

      <Checkbox>Receive updates</Checkbox>

      <Stack gap="xs">
        <Radio name="plan">Free</Radio>
        <Radio name="plan">Pro</Radio>
      </Stack>

      <Switch>Enable notifications</Switch>

      <Button>Save changes</Button>
    </Stack>
  </Stack>
</Container>`}>
              <Container maxWidth="sm">
                <Stack gap="lg">
                  <Heading>Profile Settings</Heading>

                  <Stack gap="md">
                    <TextField label="Name">
                      <Input placeholder="Your name" />
                    </TextField>

                    <TextField label="Bio">
                      <Textarea placeholder="Tell something..." />
                    </TextField>

                    <TextField label="Role">
                      <Select
                        value="design"
                        onChange={() => {} }
                        options={[
                          { label: 'Designer', value: 'design' },
                          { label: 'Developer', value: 'dev' }
                        ]}
                      />
                    </TextField>

                    <Checkbox>Receive updates</Checkbox>

                    <Stack gap="xs">
                      <Radio name="plan">Free</Radio>
                      <Radio name="plan">Pro</Radio>
                    </Stack>

                    <Switch>Enable notifications</Switch>

                    <Button>Save changes</Button>
                  </Stack>
                </Stack>
              </Container>
            </LiveExample>

            <Heading level={3} style={{ marginTop: '24px' }}>TextField Props</Heading>
            <PropTable props={textFieldProps} />
            <Heading level={3} style={{ marginTop: '24px' }}>Select Props</Heading>
            <PropTable props={selectProps} />
          </Section>
        </Stack>
      </Page.Body>
    </Page>
  );
}
