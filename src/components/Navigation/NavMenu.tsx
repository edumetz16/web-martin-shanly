"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type MenuItem = {
  path: string,
  name: string
}
export const NavMenu = ({items, children}:{ items: MenuItem[], children?: React.ReactNode})=>{
  const currentPath = usePathname();
  return <>
    {items.map((item, i)=>(

      <Link key={i} href={item.path} className={`${currentPath.startsWith(item.path)?'underline text-zinc-900':'text-zinc-600'}`}>{item.name}</Link>
    ))}
  </>
}