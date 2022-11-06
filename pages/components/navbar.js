export default function Navbar() {
    return (
        <div className='w-full p-8 fixed z-50 top-0'>
            <div className='bg-white w-full border border-black rounded-xl p-4 flex flex-row justify-between items-center'>
                <img className='h-7 sm:h-9 w-auto object-contain' src='/logo-color.png' />
                <button className="rounded-xl px-4 py-2 bg-[#EFEFEF] hover:bg-[#E4E4E4] cursor-pointer">About</button>
            </div>
        </div>
    )
}