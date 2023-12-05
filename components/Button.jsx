import Link from 'next/link';
const Button = ({label, addclass, link}) => {
    return (
        <Link href={link}>
            <button className={`flex justify-center items-center px-4 text-xl py-2 lg:px-7 lg:text-2xl lg:py-3 leading-none bg-primary text-white hover:bg-primary/80
            ${
                addclass
                ?`${addclass}`
                :''
            }
            rounded-md `}>
                {label}
            </button>
        </Link>
    )
}
export default Button