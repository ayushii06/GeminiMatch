"use client"
import Image from 'next/image'
import React from 'react'
import LogInBg from '../../../../public/signin-background.png'
import logo from '../../../../public/logo.png'

function page() {
    const handleOnChange = () => {
        console.log("it")
    }
    return (
        <div className="bg-theme flex flex-row">
            <div className="hidden w-1/2 flex-col md:flex">
                <div className="flex absolute z-10 top-6 left-4  items-center gap-2">
                    <Image src={logo} alt='logo' width={24} height={24} />
                    <div className="font-semibold text-sm italic text-white">Tech Dhundo</div>
                </div>

                <h3 className="absolute z-10 bottom-20 left-4 self-end px-4 text-lg text-center font-semibold text-white">Experience the searching of Product Selection with TechDhundo.</h3>
                <Image className="relative h-screen bg-cover bg-center" src={LogInBg} alt="logIn" />
            </div>
            <div className="flex h-screen w-full flex-col bg-black text-white md:w-1/2">
                <div className="flex justify-end pr-6 pt-6">
                    <button className="px-6 py-3 rounded-sm text-sm font-semibold bg-blue-800">Sign up</button>
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-6">
                    <div className="flex flex-col gap-1 text-xl font-semibold text-center">
                        <h3>Log in</h3>
                    </div>
                    <p className="font-normal text-sm text-gray-400">Please sign-in below using your account details</p>
                    <div className="flex w-full max-w-[360px] flex-col items-center justify-center gap-6">
                        <div className="flex w-full flex-col gap-3">
                            <form className="flex flex-col gap-2">
                                <div className="grid w-full gap-2">
                                    <div className="grid gap-2">
                                        <div className="relative false">
                                            <input className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-solid border-input bg-background px-3 py-2 text-sm font-normal text-foreground caret-foreground-50 outline-none duration-300 focus-within:border-foreground-50 disabled:cursor-not-allowed disabled:text-muted-foreground file:border-0 file:bg-background-100 file:text-sm file:font-medium file:text-foreground h-10 false undefined undefined undefined false" placeholder="Enter your email address" id=":r0:-form-item" aria-describedby=":r0:-form-item-description" aria-invalid="false" name="email" value="" onChange={() => { handleOnChange() }} />
                                        </div>
                                        <div className="relative false">
                                            <input className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-solid border-input bg-background px-3 py-2 text-sm font-normal text-foreground caret-foreground-50 outline-none duration-300 focus-within:border-foreground-50 disabled:cursor-not-allowed disabled:text-muted-foreground file:border-0 file:bg-background-100 file:text-sm file:font-medium file:text-foreground h-10 false undefined undefined undefined false" placeholder="Enter your password" id=":r0:-form-item" aria-describedby=":r0:-form-item-description" aria-invalid="false" name="email" value="" onChange={() => { handleOnChange() }} />
                                        </div>

                                    </div>
                                    <button className='px-6 my-3 py-3 rounded-lg text-sm font-semibold bg-blue-800'>Log In</button>
                                </div>


                            </form>

                        </div>

                        <p className="font-normal text-sm text-gray-400">Or continue with</p>


                        <div className="w-full">
                            <button className="small items-center justify-center whitespace-nowrap rounded-md font-medium outline-none transition duration-150 ease-in-out focus:border-foreground-50 active:focus:border-foreground-50 disabled:cursor-not-allowed disabled:opacity-50 border border-input text-secondary-foreground hover:bg-accent disabled:hover:bg-transparent h-10 px-4 py-2 flex w-full gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16" className="h-4 w-4"><path fill="#4285F4" d="M15.5 8.155c0-.575-.047-.995-.15-1.43H8.644v2.597h3.936c-.08.646-.508 1.618-1.46 2.271l-.014.087 2.12 1.61.148.014c1.349-1.22 2.127-3.017 2.127-5.149"></path><path fill="#34A853" d="M8.643 15c1.929 0 3.548-.622 4.73-1.696l-2.254-1.71c-.603.412-1.412.7-2.476.7a4.29 4.29 0 0 1-4.063-2.91l-.084.007-2.205 1.673-.029.078A7.15 7.15 0 0 0 8.643 15"></path><path fill="#FBBC05" d="M4.58 9.384A4.2 4.2 0 0 1 4.342 8c0-.482.087-.949.23-1.384l-.004-.093-2.232-1.7-.073.035A6.9 6.9 0 0 0 1.5 8c0 1.128.278 2.193.762 3.142z"></path><path fill="#EB4335" d="M8.643 3.707c1.341 0 2.246.567 2.762 1.042l2.016-1.929C12.183 1.692 10.57 1 8.643 1a7.15 7.15 0 0 0-6.38 3.858l2.309 1.758a4.31 4.31 0 0 1 4.071-2.91"></path></svg><span>Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page