"use client";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";

function AddAddressCard() {
  const formSchema = z.object({
    name: z.string().min(3).max(50),
    mobile: z.string().min(3).max(15),
    pincode: z.string().min(3).max(15),
    houseNo: z.string().min(3).max(100),
    areaStreet: z.string().min(3).max(100),
    landmark: z.string().min(3).max(100),
    townCity: z.string().min(3).max(100),
    state: z.string().min(3).max(100),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    form.reset();

    // TODO: Save data to database
  };

  return (
    <Dialog>
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
                <div className="flex gap-5 items-center">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          Name
                          <p className="text-xs text-primary">(required)</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Jhon doe" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          Mobile Number
                          <p className="text-xs text-primary">(required)</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter title" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <div className="flex items-center gap-5">
                  {" "}
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          Pincode
                          <p className="text-xs text-primary">(required)</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter pincode" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          State
                          <p className="text-xs text-primary">(required)</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter state" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <FormField
                  control={form.control}
                  name="houseNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Flat, House no., Building, Company, Apartment
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="areaStreet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Area, Street, Sector, Village
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="landmark"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Landmark
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="townCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        Town/City
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
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

export default AddAddressCard;
