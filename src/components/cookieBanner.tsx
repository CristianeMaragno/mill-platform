'use client';
import { getLocalStorage, setLocalStorage } from '~/utils/storageHelper';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner(){
	const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);
	//const [cookieHasAnswer, setHasAnswer] = useState(false);

    useEffect (() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
		const value = typeof storedCookieConsent  == 'boolean' ?? null;
        setCookieConsent(value);
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'
        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]);

	return (
		<div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
										fixed bottom-0 left-0 right-0 
										flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
											bg-gray-700 rounded-lg shadow ${cookieConsent != null ? "hidden" : "flex"}`}>

			<div className='text-center'>
				<Link href="/info/cookies"><p>Nós utilizamos <span className='font-bold text-sky-400'>cookies</span> no nosso site.</p></Link>
			</div>

				
			<div className='flex gap-2'>
				<button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Recusar</button>
				<button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Aceitar Cookies</button>
			</div>   
		</div>
	)}