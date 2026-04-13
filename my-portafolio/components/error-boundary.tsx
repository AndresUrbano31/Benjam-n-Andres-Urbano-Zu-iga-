'use client';

import { Component, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold gradient-text mb-4">Oops!</h1>
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">
              Something went wrong
            </h2>
            <p className="dark:text-gray-400 text-slate-600 mb-8 max-w-md mx-auto">
              {this.state.message || 'An unexpected error occurred. Please try again.'}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => this.setState({ hasError: false, message: '' })}
                className="button-primary"
              >
                Try again
              </button>
              <Link href="/" className="px-4 py-2 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all font-semibold text-cyan-500 dark:text-cyan-400">
                Go home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}