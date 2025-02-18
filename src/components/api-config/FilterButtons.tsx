
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActiveFilter } from "@/types/api-config";
import { useNavigate, useLocation } from "react-router-dom";

interface FilterButtonsProps {
  activeFilter: ActiveFilter;
  onFilterChange: (filter: ActiveFilter) => void;
}

export const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterChange = (filter: ActiveFilter) => {
    onFilterChange(filter);
    navigate(`/api-base-config/${filter}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={activeFilter === 'dolar' ? 'default' : 'outline'}
        className={cn(
          "gap-2",
          activeFilter === 'dolar' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
        )}
        onClick={() => handleFilterChange('dolar')}
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
        onClick={() => handleFilterChange('indice')}
      >
        <TrendingUp className="h-4 w-4" />
        Índice
      </Button>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => navigate('/api-base-config')}
      >
        <Settings2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
