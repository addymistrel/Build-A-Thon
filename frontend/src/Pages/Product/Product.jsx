import React from 'react'
import ProductHero from '../../Components/Hero/ProductHero'
import Chat from '../../Components/Chatbot/Chat'
import Phone from '../../assets/phone.png'
import Ring from '../../assets/ring.jpg'
export default function Product() {
    return (
        <>
            <ProductHero />
            <div className='flex flex-col justify-center items-center'>
                <div>
                <img src={Phone} alt="" />
                </div>
            </div>
            <Chat/>
        </>
    )
}
 