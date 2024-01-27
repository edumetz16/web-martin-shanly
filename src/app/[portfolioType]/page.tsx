import { AwardsEvent, PortfolioAwards } from "@/components/Portfolio/PortfolioAwards";
import { PortfolioItem } from "@/components/Portfolio/PortfolioItem";
import Director from "@/components/Portfolio/director";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Portfolio({params}: {params: {portfolioType: string}}) {

  if(params.portfolioType === "director") {
    return <Director></Director>
  } else {
    notFound();
  }
}
