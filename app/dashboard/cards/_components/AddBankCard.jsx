"use client";
import { createCard } from "@/actions/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

function AddBankCard() {
  const formSchema = z.object({
    name: z.string().min(3).max(50),
    cardName: z.string().min(3).max(50),
    cardNumber: z.string().min(3).max(50),
    expMonth: z.string().min(5).max(5),
    cvv: z.string().min(3).max(3),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Kartik pawar",
      cardNumber: "4242 4242 4242 4242",
      expMonth: "02/33",
      cvv: "344",
      cardName: "VISA CARD",
    },
  });

  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: createCard,
    onSuccess: (data) => {
      if (data?.error) {
        setOpen(false);
        return toast.error(data.error || "Something went wrong", {
          id: "create-pass",
        });
      }
      toast.error(data?.data, {
        id: "create-pass",
      });
      setOpen(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    form.reset();
    // TODO: Save data to database
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          <span className="font-semibold">Add</span>
          <ChevronDownIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Card</DialogTitle>
          <DialogDescription className="mt-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Card number{" "}
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="4242 4242 4242 4242" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <div className="flex gap-2 justify-between">
                  <FormField
                    control={form.control}
                    name="expMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          Expiry Month{" "}
                          <p className="text-xs text-primary">(required)</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          Password{" "}
                          <p className="text-xs text-primary">(required)</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="CVV" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Card Name
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Master, visa, rupay .."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Name on card{" "}
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John doe" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddBankCard;
