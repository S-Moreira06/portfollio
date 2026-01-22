import { Gravitas_One , Momo_Signature} from "next/font/google";
import StackIcon from "tech-stack-icons";

const gravitas_One = Gravitas_One({
  weight: "400",
  subsets: ['latin'],
})
const momo_signature = Momo_Signature({
  weight: "400",
  subsets: ['latin'],
})

export default function Stacks() {
    return (
        <div>
            <div className="p-10 bg-fuchsia-950">
                <h2 className="text-4xl text-center">Stacks :</h2>
                <div className="flex mb-5">
                    <h3 className="self-center text-2xl pr-20">Natifs</h3>
                    <div className="flex gap-10">
                        <div style={{ width: 90, height: 90 }}>
                            <StackIcon name="html5" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                            <StackIcon name="css3" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                            <StackIcon name="js" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                            <StackIcon name="php" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-10">
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="react" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="nextjs" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="laravel" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="hono" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="mysql" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="expo" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="nodejs" />
                        </div>
                        <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="bootstrap4" />
                        </div>
                        <h3 className="self-center text-2xl pr-20">Library and framework</h3>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="git" />
                    </div>
                    <div style={{ width: 90, height: 90 }}>
                        <StackIcon name="github" />
                    </div>
                </div>
            </div>
        </div>
    );
}
