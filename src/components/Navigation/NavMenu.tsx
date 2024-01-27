"use client"
import { usePathname } from "next/navigation"

export const NavMenu = ()=>{
  const path = usePathname();
  console.log(path);
  return <></>
}