import ContentCard from "@/components/ContentCard";
import { content } from "@/data/content";
import React from "react";

export default function page() {
  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold mt-5">Popular Topics</h1>
      <div className="flex overflow-x-scroll mt-10 hide-scroll-bar">
        <div className="flex flex-nowrap gap-5">
          {content.map((content) => {
            return (
              <ContentCard
                key={content.id}
                title={content.title}
                description={content.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
