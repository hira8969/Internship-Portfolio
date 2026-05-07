import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-ink p-6 text-center text-pearl">
          <div className="glass-panel max-w-lg rounded-2xl p-8">
            <p className="eyebrow">System alert</p>
            <h1 className="mt-4 text-3xl font-black">Something broke while rendering.</h1>
            <button className="premium-button mt-6" onClick={() => window.location.reload()}>Reload</button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
