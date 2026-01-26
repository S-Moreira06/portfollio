import { Gravitas_One , Momo_Signature} from "next/font/google";
import Stacks from "@/components/Stacks";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Expertise from "@/components/Expertise";
import HeroBlog from "@/components/HeroBlog";
import CTA from "@/components/CTA";

const gravitas_One = Gravitas_One({
  weight: "400",
  subsets: ['latin'],
})

const momo_signature = Momo_Signature({
  weight: "400",
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div>
      <Hero/>
      <Expertise/>
      <Project/>
      <HeroBlog/>
      <CTA/>
    </div>
  );
}
