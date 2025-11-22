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

const NewVersionAdaption = () => {
  return (
    <Card className="bg-transparent border-none w-full">
      <CardHeader>
        <CardTitle>Version Migration</CardTitle>
        <CardDescription>
          Review your selected version and migrate its pages automatically to
          the latest version.
        </CardDescription>
        <CardAction>
          <Button>New Version</Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default NewVersionAdaption;
