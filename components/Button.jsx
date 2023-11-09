import Link from 'next/link';
const Button = ({label, addclass, link}) => {
    return (
        <Link href={link}>
            <button className={`flex justify-center items-center px-7 py-4 leading-none bg-primary text-white hover:bg-primary/80
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