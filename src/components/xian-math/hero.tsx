import React from "react"

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <img
        alt="ZKP × Math - Formal Methods in Practice poster"
        src="/images/hackerhouse/xian-math-poster.svg"
        className="w-full block"
      />

      <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
        <h1 className="text-6xl font-semibold leading-tight">
          ZKP × Math
        </h1>
        <p className="text-2xl font-medium text-web-gray/60 mt-3">
          Formal Methods in Practice
        </p>
        <p className="text-3xl leading-normal text-web-gray/70 mt-6">
          Jul. 6th – Jul. 12th
        </p>
        <p className="text-3xl leading-normal text-web-gray/70">
          At Xi'an
        </p>
      </div>
    </div>
  )
}
