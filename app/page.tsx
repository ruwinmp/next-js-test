import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <br />
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/product">Product</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </>
  );
}
 