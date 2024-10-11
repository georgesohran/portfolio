"use client"

import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";


const NavButtonBig = () => {

}


export default function DockBar(params) {
  const [offset, setOffset] = useState(null)
  const [topPos, setTopPos] = useState(false)
  const ref = useRef(null)

  // handling the change on window size
  const onWindowResize = useCallback(event => {
    setOffset((window.innerWidth-ref.current.offsetWidth) / 2)
  })
  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    onWindowResize()
    return () => window.removeEventListener('resize', onWindowResize)
  }, [onWindowResize])

  return (
    <div ref={ref} className="absolute flex flex-row gap-2" style={{
      right: offset,
      bottom: topPos ? null : 16,
      top: topPos ? 16 : null
    }}>
      <div className="p-3 flex flex-row gap-2 
        rounded-full text-4xl
        border-2 border-white">
        <div className="hover:text-5xl grow self-end transition-all">
          <FaReact/>
        </div>
        <div className="hover:text-5xl grow self-end transition-all ">
          <FaReact/>
        </div>
        <div className="hover:text-5xl grow self-end transition-all ">
          <FaReact/>
        </div >
        <div className="hover:text-5xl grow self-end transition-all ">
          <FaReact/>
        </div>
      </div>
      <div className="p-2 flex flex-row gap-2
        rounded-full text-2xl my-2
        border-2 border-white">
        <div>
          <IoMdSettings/>
        </div>
        <div>
          <IoMdSettings/>
        </div>
      </div>
    </div>
  )
}
