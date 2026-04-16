import React from 'react';

export const PropTable: React.FC<{
  props: Array<{ name: string; type: string; description: string; default?: string }>;
}> = ({ props }) => (
  <table className="prop-table">
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {props.map((p) => (
        <tr key={p.name}>
          <td className="prop-name">{p.name}</td>
          <td className="prop-type">{p.type}</td>
          <td>{p.default || '-'}</td>
          <td>{p.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const LiveExample: React.FC<{
  children: React.ReactNode;
  code: string;
}> = ({ children, code }) => (
  <div className="example-box">
    <div className="example-preview">{children}</div>
    <pre className="example-code">
      <code>{code}</code>
    </pre>
  </div>
);

export const Note: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title = 'Note',
  children,
}) => (
  <div className="note">
    <div className="note-title">{title}</div>
    <div className="note-content">{children}</div>
  </div>
);
