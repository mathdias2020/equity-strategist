
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MarketConfigSectionProps, MarketTable, MarketEndpoint } from "@/types/api-config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const MarketConfigSection = ({ title, tables, activeFilter, onSave }: MarketConfigSectionProps) => {
  const [localTables, setLocalTables] = useState<MarketTable[]>(tables);

  const handleEndpointChange = (tableId: string, endpointIndex: number, value: string) => {
    setLocalTables((prev) =>
      prev.map((table) => {
        if (table.id === tableId) {
          const newEndpoints = [...table.endpoints];
          newEndpoints[endpointIndex] = {
            ...newEndpoints[endpointIndex],
            endpoint: {
              ...newEndpoints[endpointIndex].endpoint,
              [activeFilter]: value,
            },
          };
          return { ...table, endpoints: newEndpoints };
        }
        return table;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(localTables);
  };

  return (
    <Card className="bg-trader-navy border-trader-gray">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-trader-green">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Accordion type="single" collapsible className="space-y-2">
            {localTables.map((table) => (
              <AccordionItem key={table.id} value={table.id}>
                <AccordionTrigger className="text-white hover:text-trader-green">
                  {table.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    {table.endpoints.map((endpoint, index) => (
                      <div key={`${table.id}-${index}`} className="space-y-2">
                        <Label htmlFor={`${table.id}-${index}`} className="text-gray-300">
                          {endpoint.name} - {activeFilter === 'dolar' ? 'Dólar' : 'Índice'}
                        </Label>
                        <Input
                          id={`${table.id}-${index}`}
                          value={endpoint.endpoint[activeFilter]}
                          onChange={(e) => handleEndpointChange(table.id, index, e.target.value)}
                          className="bg-black border-trader-gray text-white"
                          placeholder={`Digite o endpoint para ${endpoint.name}`}
                        />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button 
            type="submit"
            className="w-full bg-trader-green text-black hover:bg-trader-green/90"
          >
            Salvar Configurações
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

