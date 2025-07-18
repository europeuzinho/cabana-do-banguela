
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cakesData } from "@/lib/cakes-data";

export function CakesMenu() {
  return (
    <Tabs defaultValue={cakesData[0].category} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto">
        {cakesData.map((tab) => (
          <TabsTrigger key={tab.category} value={tab.category} className="whitespace-normal">
            {tab.category}
          </TabsTrigger>
        ))}
      </TabsList>

      {cakesData.map((tab) => (
        <TabsContent key={tab.category} value={tab.category}>
          <Card>
            <CardContent className="p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
                {tab.items.map((cake, index) => (
                  <li key={index} className="text-sm text-foreground/80">
                    {cake}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
