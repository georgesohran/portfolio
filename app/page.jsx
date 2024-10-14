'use client'

export default function Home() {
  const title = [' George', 'Sohran']
  return (
    <div>
      <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-gradient-to-br from-slate-900 from-20% 
        via-slate-800 via-40% to-slate-900 to-60% rounded-xl
        p-2 grid grid-rows-4 overflow-hidden">
        <div className="my-4 row-span-1">
          <div className="text-5xl text-center ">
            {title[0].split('').map((value, key) => 
              <div key={key} style={{'--animation-delay': 1/key}} 
                className='inline-block -translate-x-96 animate-assamble-letters-left'>
                {value}
              </div>
            )}
            {title[1].split('').map((value, key) => 
              <div key={key} style={{'--animation-delay': key-title[0].length}} 
                className="inline-block translate-x-96 animate-assamble-letters-right">
                {value}
              </div>
            )}
          </div>
        </div>
        <div className="m-4 row-span-3 rounded-xl bg-red-900">
          <div className="">web developer</div>
        </div>
      </div>
    </div>
  );
}
