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
import BankCardAction from "./BankCardAction";

function BankCard({ data, onCopy }) {
  return (
    <Card className="px-2 max-h-max">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base flex flex-col gap-1">
          <span>{data?.cardName}</span>
          <span className="font-medium">{data?.name}</span>
        </CardTitle>
        <div className="flex gap-2">
          {/* <StarIcon size={20} className="!mt-0" /> */}
          <BankCardAction id={data._id} />
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription className="flex flex-col gap-3">
          <div className="flex justify-center bg-background p-1 px-3 mt-3 flex-col gap-2">
            <span>Card Number</span>
            <div className="flex items-center bg-muted px-1 rounded-sm">
              <Input
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8 bg-transparent"
                type="password"
                value={data?.cardNumber ? "**** **** **** ****" : ""}
                disabled={true}
              />
              <CopyIcon
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  onCopy(data?.cardNumber);
                }}
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex justify-center bg-background p-1 px-3 mt-3 flex-col gap-2">
              <span>Expiry</span>
              <div className="flex items-center bg-muted px-1 rounded-sm">
                <Input
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8 bg-transparent"
                  type="password"
                  value={data?.expMonth ? "**/**" : ""}
                  disabled={true}
                />
                <CopyIcon
                  size={20}
                  className="cursor-pointer"
                  onClick={() => {
                    onCopy(data?.expMonth);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center bg-background p-1 px-3 mt-3 flex-col gap-2">
              <span>CVV</span>
              <div className="flex items-center bg-muted px-1 rounded-sm">
                <Input
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8 bg-transparent"
                  type="password"
                  value={data?.cvv ? "***" : ""}
                  disabled={true}
                />
                <CopyIcon
                  size={20}
                  className="cursor-pointer"
                  onClick={() => {
                    onCopy(data?.cvv);
                  }}
                />
              </div>
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default BankCard;
