
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActiveFilter } from "@/types/api-config";

interface MarketEndpointFieldProps {
  assetKey: string;
  assetName: string;
  url: string;
  jsonPath: string;
  method: 'GET' | 'POST';
  isEditing: boolean;
  activeFilter: ActiveFilter;
  onUrlChange: (key: string, value: string) => void;
  onJsonPathChange: (key: string, value: string) => void;
  onMethodChange: (key: string, value: 'GET' | 'POST') => void;
  onToggleEdit: (key: string) => void;
  onTest: (key: string) => void;
}

export const MarketEndpointField = ({
  assetKey,
  assetName,
  url,
  jsonPath,
  method,
  isEditing,
  activeFilter,
  onUrlChange,
  onJsonPathChange,
  onMethodChange,
  onToggleEdit,
  onTest,
}: MarketEndpointFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={assetKey} className="text-gray-300">
        API {assetName} - {activeFilter === 'dolar' ? 'Dólar' : 'Índice'}
      </Label>
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id={`${assetKey}-url`}
              value={url}
              onChange={(e) => onUrlChange(assetKey, e.target.value)}
              className="bg-black border-trader-gray text-white"
              placeholder={`Digite o endpoint para ${assetName} (${activeFilter === 'dolar' ? 'Dólar' : 'Índice'})`}
              disabled={!isEditing}
            />
          </div>
          <Select
            value={method}
            onValueChange={(value: 'GET' | 'POST') => onMethodChange(assetKey, value)}
            disabled={!isEditing}
          >
            <SelectTrigger className="w-[100px] bg-black border-trader-gray text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id={`${assetKey}-json-path`}
              value={jsonPath}
              onChange={(e) => onJsonPathChange(assetKey, e.target.value)}
              className="bg-black border-trader-gray text-white"
              placeholder="Digite o caminho do JSON (ex: data.value)"
              disabled={!isEditing}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => onToggleEdit(assetKey)}
            className="border-trader-gray text-trader-green hover:text-trader-green/90"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => onTest(assetKey)}
            className="border-trader-gray text-trader-green hover:text-trader-green/90"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
