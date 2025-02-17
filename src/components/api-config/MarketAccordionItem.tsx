
import { MarketEndpointField } from "./MarketEndpointField";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { marketTables } from "@/utils/api-config";
import { APIConfig, ActiveFilter } from "@/types/api-config";

interface MarketAccordionItemProps {
  tableKey: string;
  table: typeof marketTables[keyof typeof marketTables];
  config: APIConfig;
  activeFilter: ActiveFilter;
  onUrlChange: (key: string, value: string) => void;
  onJsonPathChange: (key: string, value: string) => void;
  onMethodChange: (key: string, value: 'GET' | 'POST') => void;
  onToggleEdit: (key: string) => void;
  onTest: (key: string) => void;
}

export const MarketAccordionItem = ({
  tableKey,
  table,
  config,
  activeFilter,
  onUrlChange,
  onJsonPathChange,
  onMethodChange,
  onToggleEdit,
  onTest,
}: MarketAccordionItemProps) => {
  return (
    <AccordionItem value={tableKey} className="border-trader-gray">
      <AccordionTrigger className="text-trader-green hover:text-trader-green/90">
        {table.name}
      </AccordionTrigger>
      <AccordionContent className="space-y-4 p-4">
        {table.assets.map((asset) => (
          <MarketEndpointField
            key={asset.key}
            assetKey={asset.key}
            assetName={asset.name}
            url={config[asset.key]?.[activeFilter]?.url || ''}
            jsonPath={config[asset.key]?.[activeFilter]?.jsonPath || ''}
            method={config[asset.key]?.[activeFilter]?.method || 'GET'}
            isEditing={config[asset.key]?.[activeFilter]?.isEditing || false}
            activeFilter={activeFilter}
            onUrlChange={onUrlChange}
            onJsonPathChange={onJsonPathChange}
            onMethodChange={onMethodChange}
            onToggleEdit={onToggleEdit}
            onTest={onTest}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
