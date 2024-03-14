import { Product } from '@/lib/modules/productModules'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-64"
          />
        </Link>
      </figure>
      <div className=" card-body">
        <Link href={`/products/${product.slug}`}>
          <h2 className="card-title">{product.name}</h2>
        </Link>
        <p className="mb-2">${product.brand}</p>
        <div className="  card-actions flex justify-between items-center">
          <span className=" text-xl">${product.price}</span>
        </div>
      </div>
    </div>
  )
}
