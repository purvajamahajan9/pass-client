"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CopyIcon, RectangleEllipsisIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { toast } from "sonner";

function PassswordGeneratorDialog() {
  const [inputValue, setInputValue] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [length, setLength] = useState(16);
  const [orgInputValue, setOrgInputValue] = useState("");

  const genpass = (userInput) => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";

    if (includeUppercase) characterPool += uppercaseChars;
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (!characterPool) {
      toast.error("Please select at least one character type.", {
        id: "copy-pass",
      });
      return;
    }

    // let generatedPassword = "";
    // for (let i = 0; i < length; i++) {
    //   const randomIndex = Math.floor(Math.random() * characterPool.length);
    //   generatedPassword += characterPool[randomIndex];
    // }

    const remainingLength = Math.max(0, length - orgInputValue.length);
    const charsBeforeCount = Math.floor(remainingLength / 2);
    const charsAfterCount = remainingLength - charsBeforeCount;

    let charsBefore = "";
    let charsAfter = "";

    // Generate random characters for before the userInput
    for (let i = 0; i < charsBeforeCount; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      charsBefore += characterPool[randomIndex];
    }

    // Generate random characters for after the userInput
    for (let i = 0; i < charsAfterCount; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      charsAfter += characterPool[randomIndex];
    }

    // Combine the parts to create the final password
    const generatedPassword = charsBefore + orgInputValue + charsAfter;

    setInputValue(generatedPassword);
  };

  const onClick = () => {
    navigator.clipboard.writeText(inputValue).then(() =>
      toast.success("Pasword copied successfully!", {
        id: "copy-pass",
      })
    );
  };

  return (
    <Dialog open={true}>
      <DialogTrigger className="flex gap-3">
        <RectangleEllipsisIcon />
        <span> Password Generator</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto">Generate password</DialogTitle>
          <DialogDescription className="flex flex-col gap-3">
            <div className="flex mt-4">
              {" "}
              <div className="flex items-center border-2 border-primary h-max p-1 px-4 box-border gap-3 rounded-md w-full">
                <Input
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 w-full text-lg h-8"
                  placeHolder=""
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setOrgInputValue(e.target.value);
                  }}
                />
                <CopyIcon
                  className="stroke-primary/50 cursor-pointer"
                  onClick={onClick}
                />
              </div>
            </div>
            <div className="flex mt-3 flex-col justify-center">
              <Label htmlFor="slider-length" className="text-lg mb-2">
                Length - {length} chars
              </Label>
              <Slider
                defaultValue={[length]}
                max={30}
                step={1}
                className=""
                onValueChange={(value) => setLength(value)}
                id="slider-length"
              />
            </div>

            <RadioGroup className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  checked={includeUppercase}
                  onClick={() => setIncludeUppercase((prev) => !prev)}
                />
                <Label htmlFor="option-one" className="text-lg">
                  Include Uppercase
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  checked={includeLowercase}
                  onClick={() => setIncludeLowercase((prev) => !prev)}
                />
                <Label htmlFor="option-two" className="text-lg">
                  Include Lowercase
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-three"
                  id="option-three"
                  checked={includeNumbers}
                  onClick={() => setIncludeNumbers((prev) => !prev)}
                />
                <Label htmlFor="option-three" className="text-lg">
                  Include Numbers
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-four"
                  id="option-four"
                  checked={includeSymbols}
                  onClick={() => setIncludeSymbols((prev) => !prev)}
                />
                <Label htmlFor="option-four" className="text-lg">
                  Include Symbols
                </Label>
              </div>
            </RadioGroup>
            <Button className="mt-5" onClick={genpass}>
              {" "}
              Generate
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PassswordGeneratorDialog;
