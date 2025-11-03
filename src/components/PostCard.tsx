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
    <li>
      <a
        className="block no-underline hover:opacity-80 transition-opacity"
        href={`/blog/${post.id}/`}
      >
        <div className="flex items-start gap-4">
          {post.heroImageSrc && (
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
              <ImageCard src={post.heroImageSrc} alt={post.title} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold mb-1">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-2">
              <time dateTime={post.pubDate.toISOString()}>
                {post.pubDate.toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            {post.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};
