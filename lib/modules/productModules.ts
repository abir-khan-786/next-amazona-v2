export type Product = {
  _id?: string
  name: string
  slug: string
  category: string
  image: string
  price: number
  brand?: string
  banner?: string
  rating: number
  numReviews: number
  countInStock: number
  description: string
  colors?: []
  sizes?: []
}
