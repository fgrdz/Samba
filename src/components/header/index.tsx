import { ExpandedTabs } from "../ui/expanded-tabs";
import { Bell,Settings,LogOut, User } from "lucide-react"
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/toggle-theme";

const tabs = [
    { title: "Notifications", icon: Bell },
    { title: "Settings", icon: Settings },
    { title: "Profile", icon: User},
    { type: "separator" as const },
    { title: "Exit", icon: LogOut},
  ]

export function Header () {
  return(
    <div className={cn("w-full flex p-2 items-center gap-4 justify-between")}>     
      <div className={cn("ml-2")}>
        <span className={cn("font-bold text-4xl")}>Samba</span>
      </div>
      <div className={cn("justify-self-end flex gap-2 items-center")}>
        <ModeToggle/>
        <ExpandedTabs className={cn("items-center")} tabs={tabs}/>
      </div>
    </div>
  )
}

