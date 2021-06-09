import { Button, Input, Label, Textarea } from "@windmill/react-ui";
import React from "react";
import { IoDownloadOutline } from "react-icons/io5";

export default function InquiryForm() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Label className="w-full">
          <span>Name</span>
          <span className="ml-1 text-red-600">*</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full">
          <span>Email Address</span>
          <span className="ml-1 text-red-600">*</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full col-span-2">
          <span>Company or School Name</span>
          <span className="ml-1 text-red-600">*</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full">
          <span>Country of Residence</span>
          <span className="ml-1 text-red-600">*</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full">
          <span>Phone Number</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full col-span-2">
          <span>Job Title</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full col-span-2">
          <span>Title of Inquiry</span>

          {/* @ts-ignore */}
          <Input className="mt-1" />
        </Label>
        <Label className="w-full col-span-2">
          <span>Message</span>
          <span className="ml-1 text-red-600">*</span>

          {/* @ts-ignore */}
          <Textarea
            className="mt-1 placeholder-gray-400"
            rows={3}
            placeholder="Enter your message here"
          />
        </Label>
      </div>

      <Button iconRight={IoDownloadOutline} size="large" className="mt-8">
        Get Introductory Deck
      </Button>
    </div>
  );
}
