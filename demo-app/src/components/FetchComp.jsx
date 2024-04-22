import React, { useEffect, useState } from 'react'

export default function FetchComp() {
    const [data, seData] = useState()
    useEffect(() => {
        apiFetch();
    },[])
    async function apiFetch()
    {
        const res= await axios.get("")
        console.log(res.data.data)
        setData(res.data.data)
    }
  return (
    <div></div>
  )
}
