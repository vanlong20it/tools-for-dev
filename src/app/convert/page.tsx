"use client";
import PageTitle from "@/components/PageTitle";
import camelcaseKeys from "camelcase-keys";
import React, { FormEvent, useState } from "react";

const ConvertPage = () => {
  const [text, setText] = useState("");

  const handleConvert = (event: FormEvent) => {
    event.preventDefault();
    const data = camelcaseKeys(JSON.parse(text), { deep: true });
    const result = {
      ...data,
      detail: data.detail.map((item: { fname: string }) => {
        return {
          ...item,
          fname: convertToCamelCase(item.fname),
        };
      }),
    };
    console.log(result);
  };

  const convertToCamelCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
  };

  return (
    <main>
      <div className="container">
        <PageTitle>Convert object from any case to camelCase</PageTitle>
        <form
          onSubmit={handleConvert}
          method="get"
        >
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            name=""
            id=""
            rows={20}
            className="textarea textarea-bordered w-full"
          ></textarea>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary">
              Convert now
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ConvertPage;
