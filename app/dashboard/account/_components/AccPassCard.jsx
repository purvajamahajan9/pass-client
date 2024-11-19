"use client";
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
import AccCardActions from "./AccCardActions";
import { toast } from "sonner";

function AccPassCard({ data, onCopy }) {
  return (
    <Card className="px-2 max-h-[250px]">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base">{data?.website}</CardTitle>
        <div className="flex gap-2">
          {/* <StarIcon size={20} className="!mt-0" /> */}
          <AccCardActions id={data._id} link={data.website} />
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription className="flex flex-col gap-3">
          <div className="flex items-center bg-muted rounded-md p-1 px-3 mt-3">
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8 bg-transparent"
              type="email"
              value={data.email}
              disabled={true}
            />
            <CopyIcon
              size={20}
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(data.email).then(() =>
                  toast.success("Email copied successfully!", {
                    id: "show-pass",
                  })
                );
              }}
            />
          </div>

          <div className="flex items-center bg-muted rounded-md px-3">
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8"
              type="password"
              value={data.password}
              disabled={true}
            />
            <CopyIcon
              size={20}
              onClick={() => onCopy(data.password)}
              className="cursor-pointer"
            />
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default AccPassCard;
