import React from 'react';
import ReactDOM from 'react-dom';

const Button = React.lazy(() => import('./button'));
export const App = () => {
  return (
    <>
      <div>Hello world!</div>
      <React.Suspense fallback={() => <>loading button</>}>
        <Button />
      </React.Suspense>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
