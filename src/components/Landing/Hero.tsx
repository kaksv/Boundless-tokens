import Link from 'next/link'
import cardList from './data'

const Hero = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          Aquire an NFT.
        </h3>
        {/* <main className="container mx-auto py-2 px-8"></main> */}
        <div className="grid lg:grid-cols-3  gap-x-3 gap-y-6">
          {cardList.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="bg-white shadow-lg rounded-lg" key={index}>
                <img
                  className="rounded-t-lg lg:h-[180px]"
                  src={item.img}
                  alt=""
                />
                <div className="p-4">
                  <h4 className="text-3x1 font-bold text-slate-700 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-lg font-normal text-gray-600">
                    {item.text}
                  </p>
                  <div className="flex items-center justify-center">
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl my-2 ">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
    // <section>
    //   <div className="p-4">
    //     <h1 className="text-center  bg-gradient-linear-starknet-gradient text-transparent bg-clip-text my-0 mx-auto lg:p-10  lg:w-[40%]">
    //       Transforming any NFT to a Wallet
    //     </h1>
    //     <p className="lg:w-[35%] lg:px-10 text-center  my-0 mx-auto lg:text-justify">
    //       A &#8221;Token Bound Account&#8221; is a smart contract account,
    //       controlled by an NFT. It can do everything a normal wallet can do and
    //       is compatible with every NFT you already own.
    //     </p>
    //     <Link href={"https://tokenbound.gitbook.io/starknet-tokenbound/"}>
    //       <button className="xsm:w-[90%] w-[14rem] block mt-4 mx-auto p-4 bg-deep-blue rounded-[8px] text-white">
    //         Visit Documentation
    //       </button>
    //     </Link>
    //   </div>
    //   <div>
    //     <img src="/Frame 20.png" alt="" />
    //   </div>
    // </section>
  )
}

export default Hero
