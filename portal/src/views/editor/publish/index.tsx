import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus, Save } from "lucide-react";

const ContentPublishing = () => {
  return (
    <Card className="bg-transparent border-none w-full">
      <CardHeader>
        <CardTitle>Publish Premium Content</CardTitle>
        <CardDescription>
          Review your publishing settings and confirm when ready to proceed.
        </CardDescription>
        <CardAction>
          <Button>Publish</Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default ContentPublishing;
