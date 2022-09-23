export default function Navbar() {
    return (
        <div className='w-full p-8 fixed z-50 top-0'>
            <div className='bg-white w-full border border-black rounded-xl p-4 flex flex-row justify-between'>
                <img className='h-7 sm:h-9 w-auto object-contain' src='/logo-color.png' />
            </div>
        </div>
    )
}