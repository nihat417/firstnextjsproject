"use client"

const Error = ({error,reset}) => {
  return (
    <div className="red h-screen flex items-center justify-center">
        <p>Error: {error.message || "something went wrong"}</p>
        <button onClick={reset}> sehvdi reset ele</button>
    </div>
  )
}

export default Error;