import Image from 'next/image';
import Link from 'next/link'
import Logo from '@/app/viewproducts/component/assets/Logo.png'

function Nav() {
    return (
        <div className=" bg-white">
            <div className="flex justify-start items-center h-14 p-2 ">
                <Image src={Logo} alt='logo' className='w-36 cursor-pointer' />
            </div>
        </div>
    )
}

export default Nav;