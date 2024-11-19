import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CopyIcon, StarIcon } from "lucide-react";
import AddressActionCard from "./AddressActionCard";

function BankCard() {
  return (
    <Card className="px-2">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base flex flex-col gap-1">
          <span className="font-medium">Kartik Pawar</span>
        </CardTitle>
        <div className="flex gap-2">
          <StarIcon size={20} className="!mt-0" />
          <AddressActionCard />
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription className="flex flex-col gap-3">
          <div className="flex justify-center bg-background p-1 px-3 mt-3 gap-2 items-center">
            <div className="flex flex-col gap-2">
              <span className="font-semibold">You Address</span>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                consequatur.
                <br />
                Lorem ipsum dolor sit amet.
                <br />
                Lorem.
                <br />
                Lorem ipsum dolor sit amet.
              </span>
            </div>
            <CopyIcon />
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default BankCard;
