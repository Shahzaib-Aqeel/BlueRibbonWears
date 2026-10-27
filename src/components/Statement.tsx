import React from 'react'

function Statement() {
  return (
    <div>
      <section className="bg-white py-16 px-4 text-center">
        <div>
          <div
            aria-hidden="true"
            className="-mb-15 text-9xl font-serif text-[#001F3F]"
          >
            “
          </div>
          <h1 className="text-4xl md:text-4xl font-bold leading-tight text-[#001F3F]">
            Your Vision. Our Expertise.
            <br />
            <span className="text-[#001F3F]">
              Premium Clothing Manufacturing in Pakistan
            </span>
          </h1>
          <div className="flex justify-center items-center mt-8 gap-4 text-[#001F3F] font-semibold">
            <div className="w-20 bg-[#001F3F] h-px"></div>
            <span>BLUE RIBBON WEARS</span>
            <div className="w-20 bg-[#001F3F] h-px"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Statement
