'use client'
import CouresCard from "@/componets/CouresCard";
import { useState, useEffect } from "react";
import CartSelected from "@/componets/cartSelected";

export default function Home() {
  const [data, setdata] = useState(null)
  const [carts, setCarts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  // console.log(data)
  const addNewCart = (coures) => {
    // Update the carts state with the selected course
    setCarts([...carts, coures]);
    console.log(carts)
    console.log("clicked", coures)
    alert('cart added')
  }

  useEffect(() => {
    fetch('/fakedb.json')
      .then((res) => res.json())
      .then((datas) => {
        setdata(datas)
        setLoading(false)
      })
  }, [])
  if (isLoading) return <p>Loading...</p>
  return (
    <main>
      <h1 className="text-center text-3xl font-semibold">Course Registration</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {
          data.map(coures => <CouresCard key={coures.id} addNewCart={addNewCart} coures={coures} />)
        }
      </div>
      <div>
        <h1 className="text-3xl">Simple Cart & Details</h1>
        {
          carts && carts.map(cart=> <CartSelected key={cart.id}/>)
        }
      </div>
    </main>
  );
}
