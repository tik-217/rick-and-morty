import { Component, ErrorInfo } from "react";

interface IErrorBoundaryState {
  hasError: boolean;
}

interface IErrorBoundaryProps {
  children: JSX.Element;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps> {
  state: Readonly<IErrorBoundaryState>;

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false } as IErrorBoundaryState;
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}
