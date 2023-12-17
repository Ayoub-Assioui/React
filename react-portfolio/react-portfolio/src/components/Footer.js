import hr from '../assets/curve-hr.svg'

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-400 rounded-md text-white px-8 py-4">

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023 AYOUB ASSIOUI. All Right Reserved</p>

    </div>
  )
}
