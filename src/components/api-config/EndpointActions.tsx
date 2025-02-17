
import { Eye, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface EndpointActionsProps {
  url: string;
  method: 'GET' | 'POST';
  isEditing: boolean;
  onToggleEdit: () => void;
  onTest: () => void;
}

export const EndpointActions = ({ url, method, isEditing, onToggleEdit, onTest }: EndpointActionsProps) => {
  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onToggleEdit}
        className="border-trader-gray text-trader-green hover:text-trader-green/90"
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onTest}
        className="border-trader-gray text-trader-green hover:text-trader-green/90"
      >
        <Eye className="h-4 w-4" />
      </Button>
    </>
  );
};
