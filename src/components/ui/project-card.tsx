"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectCard = ({ url }: { url: string }) => {
  const [data, setData] = useState<OpenGraphData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/opengraph?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch OpenGraph data');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        // Fallback data
        setData({
          title: url,
          description: "Could not fetch OpenGraph data.",
          image: "",
          url: url,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return (
      <div className="relative w-full max-w-sm rounded-lg bg-card p-4 border border-border">
        <div className="animate-pulse">
          <div className="h-40 w-full rounded-lg bg-muted"></div>
          <div className="mt-4 h-6 w-3/4 rounded bg-muted"></div>
          <div className="mt-2 h-4 w-full rounded bg-muted"></div>
          <div className="mt-2 h-4 w-1/2 rounded bg-muted"></div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-sm rounded-lg bg-card p-0.5 overflow-hidden"
    >
      <div
        className={cn(
          "absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-[conic-gradient(from_var(--angle),_#ff0000,_#00ff00,_#0000ff,_#ff0000)]",
          "animate-border-beam [--duration:6] [--angle:0deg]",
          "group-hover:[--duration:3]"
        )}
        style={{
            "--angle": "0deg",
            "--duration": "6s",
        } as React.CSSProperties}
      ></div>
      <div className="relative rounded-lg bg-card p-4">
        {data.image && (
          <img src={data.image} alt={data.title} className="w-full h-40 object-cover rounded-lg mb-4" />
        )}
        <h3 className="text-lg font-bold text-foreground">{data.title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{data.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
