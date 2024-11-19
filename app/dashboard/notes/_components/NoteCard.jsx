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
import BankCardAction from "./NoteCardAction";

function NoteCard() {
  return (
    <Card className="px-2">
      <CardHeader className="flex-row items-center justify-between gap-2">
        <CardTitle className="text-base">
          <span className="text-ellipsis line-clamp-2 overflow-hidden w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            autem eligendi doloribus ipsam iusto perspiciatis voluptas corporis
            itaque hic provident?
          </span>
        </CardTitle>
        <div className="flex gap-2">
          <StarIcon size={20} className="!mt-0" />
          <BankCardAction />
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription className="mt-5 text-ellipsis line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum
          ipsa fuga laboriosam, similique nemo, natus illum distinctio rerum
          omnis rem ut accusamus dolorem reprehenderit dolores, at minima cumque
          quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          ipsum ipsa fuga laboriosam, similique nemo, natus illum distinctio
          rerum omnis rem ut accusamus dolorem reprehenderit dolores, at minima
          cumque quia?
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
