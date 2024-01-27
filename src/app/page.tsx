import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm lg:flex flex-col gap-10">
        <div>
          <p>Director/writer. Buenos Aires., Argentina 1988. Graduates in Filmmaking from Universidad del Cine (FUC) in 2011. He directed “About Twelve”, recipient of the Fondo Metropolitano de la Ciudad de Buenos Aires grant, which premiered in the National Competition at BAFICI (2014).</p>
        </div>

        <hr className="w-full"></hr>
        <div>
          <span>Instagram: </span><Link className="underline text-secondary" href={"https://www.instagram.com/m._.shanly/?hl=en"}>@m._.shanly</Link>
        </div>
        
      </div>
    </main>
  );
}
