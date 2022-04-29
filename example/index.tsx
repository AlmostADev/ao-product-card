import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Memezolanos Card Mug'
}

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10
      }}
    >
      {({ count, reset, increaseBy, isMaxCountReached, maxCount }) => (
        <>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
