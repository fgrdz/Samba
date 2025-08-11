import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export function Dashboard () {
  return(
    <div className="w-3/4 h-3/4 m-4 flex p-4 rounded justify-center dark:bg-neutral-900">
      <Tabs className="w-3/4">
        <TabsList className="w-full dark:bg-background bg-foreground">
          <TabsTrigger value="CreateCard">Criar novo</TabsTrigger>
          <TabsTrigger value="Edit">Editar</TabsTrigger>

        </TabsList>
        <TabsContent value="CreateCard">
          <div className="w-full flex p-4 bg-background rounded">
            <form>
              <Label>Oi</Label>
              <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Instagram"/>
                  </SelectTrigger>
                  <SelectContent className="text-primary">
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="youtube">Youtube</SelectItem>
                  </SelectContent>
              </Select>
            </form>
          </div>
        </TabsContent>
        <TabsContent value="Edit">
          <div className="w-full flex p-4">
            Oi            
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}