import Image from 'next/image';
import Link from 'next/link'
import Logo from '@/app/viewproducts/component/assets/Logo.png'
import { Toggle } from '@/app/components/Toggle';

function Nav() {
    return (
        <div className=" bg-slate-200 dark:bg-black flex justify-between h-16 items-center">
            <Link href={'/'}>
                <div className="p-1 ml-2 bg-white rounded-md">
                    <Image src={Logo} alt='logo' className='w-36' />
                </div>
            </Link>
            <div className='flex items-center'>
                <Link href={'/order'}>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Orders</button>
                </Link>
                <Toggle />
            </div>
        </div>
    )
}

export default Nav;