import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Dashboard () {
  return(
    <div className="w-3/4 h-3/4 m-4 flex p-4 rounded justify-center dark:bg-neutral-900">
      <Tabs className="w-3/4">
        <TabsList className="w-full dark:bg-background bg-foreground">
          <TabsTrigger value="CreateCard">Criar novo</TabsTrigger>
          <TabsTrigger value="Edit">Editar</TabsTrigger>

        </TabsList>
        <TabsContent value="account">
          Oi
        </TabsContent>
      </Tabs>
    </div>
  )
}