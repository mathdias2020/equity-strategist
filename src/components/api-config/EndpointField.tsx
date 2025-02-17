
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EndpointActions } from "./EndpointActions";

interface EndpointFieldProps {
  label: string;
  id: string;
  url: string;
  method: 'GET' | 'POST';
  isEditing: boolean;
  onUrlChange: (value: string) => void;
  onMethodChange: (value: 'GET' | 'POST') => void;
  onToggleEdit: () => void;
  onTest: () => void;
  filterType: string;
}

export const EndpointField = ({
  label,
  id,
  url,
  method,
  isEditing,
  onUrlChange,
  onMethodChange,
  onToggleEdit,
  onTest,
  filterType,
}: EndpointFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-300">
        API {label} - {filterType === 'dolar' ? 'Dólar' : 'Índice'}
      </Label>
      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            id={id}
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
            className="bg-black border-trader-gray text-white"
            placeholder={`Digite o endpoint para ${label} (${filterType === 'dolar' ? 'Dólar' : 'Índice'})`}
            disabled={!isEditing}
          />
        </div>
        <Select
          value={method}
          onValueChange={(value: 'GET' | 'POST') => onMethodChange(value)}
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
        <EndpointActions
          url={url}
          method={method}
          isEditing={isEditing}
          onToggleEdit={onToggleEdit}
          onTest={onTest}
        />
      </div>
    </div>
  );
};
