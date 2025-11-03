import type { FC } from "react";
import { ImageCard } from "./Image";

export type PostCardProps = {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImageSrc?: string;
};

export const PostCard: FC<PostCardProps> = (post) => {
  return (
    <li className="group">
      <a
        className="block no-underline transition-opacity duration-200 hover:opacity-70"
        href={`/blog/${post.id}/`}
      >
        <article className="flex flex-col gap-3">
          <div className="flex items-baseline gap-3">
            <time 
              dateTime={post.pubDate.toISOString()}
              className="text-xs font-medium text-muted-foreground uppercase tracking-wider shrink-0"
            >
              {post.pubDate.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            
            <h3 className="text-lg font-semibold text-foreground leading-snug">
              {post.title}
            </h3>
          </div>
          
          {post.description && (
            <p className="text-[0.9375rem] text-muted-foreground leading-relaxed pl-[4.5rem]">
              {post.description}
            </p>
          )}
        </article>
      </a>
    </li>
  );
};