# AO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alejandro Olmos

## Ejemplo

```ts
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ao-product-card';


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
```
