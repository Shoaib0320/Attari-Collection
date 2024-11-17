import { auth } from '@/app/auth'
import CartPage from '@/components/CartPage/CartPage'
import Navbar from '@/components/Root-Navbar/Navbar'

export default async function AddToCartPage() {
  const session = await auth()

  if (!session) {
    return (
      <>
        <div className="mx-auto max-w-7xl px-4 my-10">
          <p className="text-center text-red-500 text-xl">Please log in to view your cart.</p>
        </div>
      </>
    )
  }

  console.log("session=> AddTocart", session);
  
  return (
    <>
      <CartPage userId={session.user._id} />
    </>
  )
}