"use client"

import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";


const DockBackground = (params) => {
  if(!('isTop' in params)) {
    // some error handline idk
  }
  return (
    <div style={{
      bottom: params.isTop ? null : 0,
      top: params.isTop ? 0 : null
    }} className="h-5 z-0 fixed bottom-0 left-0 right-0
      rounded-full border-2 border-slate-500 bg-slate-900">
    </div>
  )
}

export default function DockBar(params) {
  const [isTop, setIsTop] = useState(false)

  return (
    <div className={`absolute w-full text-center text-4xl ${isTop? 'top-3' : 'bottom-3'}`} >
      {/* <DockBackground isTop={isTop}/> */}
      {/* dock icons */}
      <div className={`inline-block z-10 mx-1 p-1 
        rounded-full bg-slate-800 hover:text-5xl hover:bg-slate-700 transition-all  
        ${isTop ? 'align-top' : 'align-bottom'}`}>
        <FaReact/>
      </div>
      <div className={`inline-block z-10 mx-1 p-1 
        rounded-full bg-slate-800 hover:text-5xl hover:bg-slate-700 transition-all  
        ${isTop ? 'align-top' : 'align-bottom'}`}>
        <FaReact/>
      </div>
      <div className={`inline-block z-10 mx-1 p-1 
        rounded-full bg-slate-800 hover:text-5xl hover:bg-slate-700 transition-all  
        ${isTop ? 'align-top' : 'align-bottom'}`}>
        <FaReact/>
      </div >
      <div className={`inline-block z-10 mx-1 p-1 
        rounded-full bg-slate-800 hover:text-5xl hover:bg-slate-700 transition-all  
        ${isTop ? 'align-top' : 'align-bottom'}`}>
        <FaReact/>
      </div>
    </div>
  )
}
