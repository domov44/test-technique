import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { LucideArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  title: string;
  fields: { label: string; value: string | number }[];
};

export function EntityCard({ title, fields }: Props) {
  const navigate = useNavigate();

  return (
    <Card className="max-w-md mx-auto mt-12 shadow-xl">
      <CardHeader className="flex justify-between items-center">
        <Button
          onClick={() => navigate(-1)}
          type="button"
          variant={"link"}
          className="cursor-pointer"
        >
          <LucideArrowLeft size={16} />
          Back
        </Button>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {fields.map((f) => (
          <div key={f.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{f.label}</span>
            <span className="font-medium">{f.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}