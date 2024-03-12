import Link from 'next/link'
import React from 'react'
import { IoMdDownload } from 'react-icons/io'

interface Props {}

function Curriculum(props: Props) {
    const {} = props

    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-gray-900 opacity-75 z-10'></div>
            <div className='fixed bottom-0 left-0 mb-4 ml-4 p-4 rounded-full bg-slate-800'>
                <Link
                    href="/pdf/Curriculum.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className= 'rounded-full bg-slate-800'
                    title='Baixe meu Currículo!'
                >
                    <div className='tooltip'>
                        <IoMdDownload className='h-8 w-8' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Curriculum
