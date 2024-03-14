import ProductItem from '@/components/products/ProductItem'
import { data } from '@/lib/modules/data'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Laytest Products</h1>
      <div className=" grid  grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  )
}
