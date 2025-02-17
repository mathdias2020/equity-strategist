
import { Button } from "@/components/ui/button";
import { FilterType } from "@/types/dashboard";
import { cn } from "@/lib/utils";
import { DollarSign, TrendingUp } from "lucide-react";

interface FilterButtonsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={activeFilter === 'dolar' ? 'default' : 'outline'}
        className={cn(
          "gap-2",
          activeFilter === 'dolar' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
        )}
        onClick={() => onFilterChange('dolar')}
      >
        <DollarSign className="h-4 w-4" />
        Dólar
      </Button>
      <Button
        variant={activeFilter === 'indice' ? 'default' : 'outline'}
        className={cn(
          "gap-2",
          activeFilter === 'indice' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
        )}
        onClick={() => onFilterChange('indice')}
      >
        <TrendingUp className="h-4 w-4" />
        Índice
      </Button>
    </div>
  );
};
