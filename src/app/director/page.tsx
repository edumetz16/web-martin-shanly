import { AwardsEvent, PortfolioAwards } from "@/components/Portfolio/PortfolioAwards";
import { PortfolioItem } from "@/components/Portfolio/PortfolioItem";
import Image from "next/image";
import Link from "next/link";

export default function Director() {

  const awardsJuana: AwardsEvent[] = [{
    name: "Condor de plata",
    awards: [
      {
        year: 2017,
        type: 'Nominee',
        nomination: 'Best film'
      },
      {
        year: 2017,
        type: 'Winner',
        nomination: 'Best actress'
      }
    ]
  }]

  const awardsArturo: AwardsEvent[] = [
    {
      name: "Berlin International Film Festival",
      awards: [
        {
          year: 2023,
          type: 'Nominee',
          nomination: 'Caligari Film Award'
        }
      ]
    },
    {
      name: "Buenos Aires International Festival of Independent Cinema",
      awards: [
        {
          year: 2023,
          type: 'Nominee',
          nomination: 'Best Argentinian Film'
        },
        {
          year: 2023,
          type: 'Winner',
          nomination: 'Best Sound Design'
        },
      ]
    },
    {
      name: "São Paulo International Film Festival",
      awards: [
        {
          year: 2023,
          type: 'Nominee',
          nomination: 'Best Fiction'
        },
      ]
    },
    {
      name: "Las Palmas Film Festival",
      awards: [
        {
          year: 2023,
          type: 'Nominee',
          nomination: 'Best Film'
        },
      ]
    },
    {
      name: "FICIC Cosquin Film Festival",
      awards: [
        {
          year: 2023,
          type: 'Nominee',
          nomination: 'Best Film'
        },
      ]
    },
    {
      name: "Torino Film Festival",
      awards: [
        {
          year: 2023,
          type: 'Nominee',
          nomination: 'Best Feature Film'
        },
      ]
    },
  ]
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm lg:flex flex-col gap-10">
        <PortfolioItem title="About Twelve" image="/img/director/about_twelve.jpeg">
          
          <div className="pt-[57%] w-full relative">
            <iframe className="absolute top-0 w-full h-full" src="https://player.vimeo.com/video/141124789?h=065610a36c" width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>
            <PortfolioAwards title="Awards & Nominations:" events={awardsJuana}></PortfolioAwards>

        </PortfolioItem>
        <PortfolioItem title="About Thirty" image="/img/director/about_thirty.jpg">
          
          <div className="pt-[57%] w-full relative">
            <iframe className="absolute top-0 w-full h-full" src="https://player.vimeo.com/video/864434587?h=065610a36c" width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>
          <PortfolioAwards title="Awards & Nominations:" events={awardsArturo}></PortfolioAwards>

        </PortfolioItem>
      </div>
    </main>
  );
}
