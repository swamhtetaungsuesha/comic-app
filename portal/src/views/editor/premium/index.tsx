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

const SettingPremium = () => {
  return (
    <Card className="bg-transparent border-none w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Premium Pricing Settings</CardTitle>
        <CardDescription>
          Configure the premium cost using the controls and save your changes.
        </CardDescription>
        <CardAction>
          <ButtonGroup>
            <Button disabled>
              <Save />
            </Button>
            <Button variant={"outline"}>500</Button>
            <Button variant={"outline"}>
              <Plus />
            </Button>
            <Button variant={"outline"}>
              <Minus />
            </Button>
          </ButtonGroup>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default SettingPremium;
