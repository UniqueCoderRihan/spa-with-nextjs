'use client'
import CouresCard from "@/componets/CouresCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setdata] = useState(null)
  const [isLoading, setLoading] = useState(true)
  console.log(data)
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
      <div>
        {
          data.map(coures => <CouresCard key={coures.id} coures={coures} />)
        }
      </div>
    </main>
  );
}
