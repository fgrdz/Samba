import { cn } from "@/lib/utils";
import { SpecialButton } from "../ui/specialButton";
import { SocialButtonType } from "@/constants/social-buttons-types";

interface CardComponentProps {
  className?: string;
}

export function CardComponent({ className }: CardComponentProps) {
  return(
    <div className={cn(`w-1/4 h-3/4 flex items-center p-6 rounded-2xl bg-muted flex-col gap-4 border border-border ${className}`)}>
      <SpecialButton text={SocialButtonType.Instagram.text} className='w-2xs' icon={SocialButtonType.Instagram.icon}/>
      <SpecialButton text={SocialButtonType.Facebook.text} className='w-2xs' icon={SocialButtonType.Facebook.icon}/>
      <SpecialButton text={SocialButtonType.Youtube.text} className='w-2xs'icon={SocialButtonType.Youtube.icon}/>
    </div>
  )
}