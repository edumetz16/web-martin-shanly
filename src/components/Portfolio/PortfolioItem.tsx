import Image from "next/image"
import { Children } from "react"

export const PortfolioItem = ({ title, image, children}:{ title: string, image?: string, children:React.ReactNode } ) => {
  return (
    <>
    
      <div className="flex gap-4 items-center">
        {image &&
          <Image alt={title} src={image} width="35" height="60" objectFit="cover"></Image>
        }
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    <div className="grid grid-cols-12 gap-4 w-full">
      {Children.map(children, (child)=>(
        <div className="col-span-12 md:col-span-6">
            {child}
          </div>
      ))}
    </div>
    </>
  )
}