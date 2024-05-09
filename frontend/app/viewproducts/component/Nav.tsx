import Link from 'next/link'

function Nav() {
    return (
        <div className="sticky top-0 z-50 text-xl font-bold text-[#B6EADA] bg-[#301E67]">
            <div className="flex justify-center items-center h-16 p-2">
                <a href="" className="relative text-4xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    Ecommerce
                </a>
            </div>
        </div>
    )
}

export default Nav;