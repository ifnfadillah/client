import { CardHeader, CardTitle} from "@/components/ui/card"
import { BotMessageSquare } from "lucide-react"
import Image from "next/image"
import { ModeToggle } from "./ui/mode-toggle"

export function CustomCardHeader() {
  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
      <div className="flex text-2xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl me-2">
                <BotMessageSquare className="mt-1 me-2 w-7 h-7"></BotMessageSquare>
                Tanya Kaboo
              </div>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
      </div>
    </CardHeader>
  )
}

