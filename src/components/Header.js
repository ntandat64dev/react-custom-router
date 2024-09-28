import Link from './Link'

export default function Header() {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
        </header>
    )
}