import Link from "next/link";

export default function Home(){
  return (
    <div>
      <h1>my name is Muhammad Javaid</h1>
      <h2>Do you want to see country routing with component implementation? Click below</h2>
      <ul>
        <li>
          <Link href="/country">Country Routes</Link>
        </li>
      </ul>
    </div>
  )
}