"use client";
import React from "react";
import styles from "./bookingForm.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ButtonCustom from "../../lib/button/ButtonCustom";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function BookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form className={styles.bookingForm}>
      <div>
        <Label htmlFor="name" />
        <Input type="text" placeholder="Your Name" id="name" />
      </div>
      <div className={`${styles.row}`}>
        <div>
          <Label htmlFor="email" />
          <Input type="email" placeholder="Your Email" id="email" />
        </div>
        <div>
          <Label htmlFor="tel" />
          <Input type="tel" placeholder="Your Phone" id="tel" />
        </div>
      </div>
      <div className={`${styles.row}`}>
        <div className="">
          <Label htmlFor="email" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Your Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Hands</SelectItem>
              <SelectItem value="dark">Feet</SelectItem>
              <SelectItem value="system">Hairs</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="email" />
          <DatePicker />
        </div>
      </div>
      <div>
        <Label htmlFor="message" />
        <Textarea id="message" placeholder="Your Message" />
      </div>
      <div>
        <ButtonCustom text={"Book Appointement"} isFill type="submit" />
      </div>
    </form>
  );
}

export default BookingForm;

export function DatePicker() {
  const [date, setDate] = React.useState();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal w-full",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="pl-1 inline-block text-slate-600">
              Pick a date
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
