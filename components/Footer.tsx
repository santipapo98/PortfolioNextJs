import Link from 'next/link'

function Footer() {
  return (
    <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='h-10 w-fit text-gray-400 hover:text-white rounded-full cursor-pointer m-auto'>Go up !</div>
        </footer>
    </Link>
  )
}

export default Footer