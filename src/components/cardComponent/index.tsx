import { cn } from "@/lib/utils";
import { SpecialButton } from "../ui/specialButton";
import { SocialButtonType } from "@/constants/social-buttons-types";
import { Share } from "lucide-react";

interface CardComponentProps {
  className?: string;
}

export function CardComponent({ className }: CardComponentProps) {
  return(
    <div className={cn(`w-1/4 h-3/4 flex items-center p-6 rounded-2xl dark:bg-neutral-900 flex-col gap-4 light-shadow dark:dark-shadow ${className}`)}>
      {/* Header */}
      <div className="flex flex-col w-full mb-4">
        <div className="self-end">
          <button className="bg-muted p-2 rounded-full hover:bg-foreground hover:text-primary-foreground cursor-pointer">
            <Share size={18}/>
          </button>
        </div>
        <div className="flex flex-col items-center text-primary gap-2">
          <span className="text-2xl font-bold">Titulo</span>
          <span className="text-sm">Nome de usuário</span>
          <span className="text-sm">Descrição</span>
        </div>
      </div>
      <SpecialButton text={SocialButtonType.Instagram.text} className='w-2xs' icon={SocialButtonType.Instagram.icon}/>
      <SpecialButton text={SocialButtonType.Facebook.text} className='w-2xs' icon={SocialButtonType.Facebook.icon}/>
      <SpecialButton text={SocialButtonType.Youtube.text} className='w-2xs'icon={SocialButtonType.Youtube.icon}/>
    </div>
  )
}