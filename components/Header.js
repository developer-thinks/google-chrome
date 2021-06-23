import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useRef } from 'react';
import Avatar from './Avatar';

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e =>{
        e.preventDefault();

        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white' >
            <div className='flex w-full p-6 items-center'>
         <Image 
            src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={120}
            height={40}
            className="cursor-pointer"
            onClick={()=> router.push("/")}
        />

        <form className="flex border border-gray-200 rounded-full shadow-lg flex-grow max-w-3xl items-center px-6 py-3 ml-10 mr-5 " >

            <input 
            ref={searchInputRef}
            type="text"  
            className="flex-grow w-full focus:outline-none"
            />

            <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer  transition duration-100 transform hover:scale-125" 
                onClick={()=>(searchInputRef.current.value="")}
            />
            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
            <SearchIcon className="h-7 text-blue-500 hidden  sm:inline-flex" />
            <button hidden type="submit" onClick={search} >search</button>

        </form>
        <Avatar className="ml-auto" url="https://avatars.githubusercontent.com/u/82900434?v=4"  />
        </div>
        </header>
    )
}

export default Header;
