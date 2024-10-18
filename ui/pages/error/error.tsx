import * as React from 'react';
import type { FallbackProps } from 'react-error-boundary';

const ErrorPage = (props: FallbackProps) => (
  <div role="alert">
    <p>Something went wrong</p>
    {props.error && (
      <>
        <pre>{props.error.message}</pre>
      </>
    )}
    <div>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  </div>
);

export default ErrorPage;
