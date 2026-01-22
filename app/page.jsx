import { Gravitas_One , Momo_Signature} from "next/font/google";
import Stacks from "@/components/Stacks";
import Image from "next/image";
import HeroImage from '../public/hero.png';

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
      <div className="flex justify-center">
        <Image src={HeroImage} alt="Logo S-Moreira" height={500} />
      </div>
      <div className={gravitas_One.className} >
        <p className="text-sans text-xl text-center p-10">Tombé dans la marmite du dévellopement en 2020, je me suis formé (seul et grâce a plusieurs cursus de formation) durant tout se temps a comprendre le dev, travailler ma capacitée d'apprentissage et d'adaptation entre autres. J'ai pu aussi experimenter le travail en équipe et les méthodes agiles lors de ma dernière alternance.</p>
      </div>
      <Stacks/>
      <div className="grid grid-cols-2 p-10">
        <div>
          Projet 1 : Chat Interactif
          Création un chat html css et php natif!
        </div>
        <div>
          <h2>Pojet 2: BackOffice Associatif</h2>
          <p>Création d'un portail de resevartion pour mettre en relations association et réstaurateurs</p>
        </div>         
      </div>
    </div>
  );
}
