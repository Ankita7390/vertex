import { CalendarClock, Hash, ImagePlus, MapPin, Send, SmilePlus, UsersRound } from "lucide-react";

import { Avatar, Button, Card, Input, Textarea } from "@/components/ui";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function CreatePostPage() {
  const user = useCurrentUser();

  return (
    <div className="mx-auto w-full max-w-3xl space-y-5">
      <div>
        <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Create post</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Compose a static Vertex post with audience, media, tags, location, schedule, and draft controls.
        </p>
      </div>
      <Card className="p-5">
        <div className="flex gap-3">
          <Avatar alt={user.name} src={user.avatarUrl} />
          <div className="min-w-0 flex-1 space-y-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-black text-primary-700 dark:bg-orange-950/30 dark:text-primary-100">
              <UsersRound size={14} /> Public circle
            </button>
            <Textarea className="min-h-44 text-base" placeholder="What do you want to share?" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="# Add hashtags" />
              <Input placeholder="@ Mention people" />
              <Input placeholder="Location" />
              <Input placeholder="Schedule for later" />
            </div>
            <div className="grid gap-3 rounded-2xl border border-dashed border-orange-200 bg-orange-50/40 p-5 text-center dark:border-orange-950 dark:bg-orange-950/20">
              <ImagePlus className="mx-auto text-primary-700 dark:text-primary-100" />
              <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                Media preview grid
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-1">
                {[SmilePlus, ImagePlus, MapPin, Hash, CalendarClock].map((Icon, index) => (
                  <Button aria-label="Post tool" key={index} size="icon" variant="ghost">
                    <Icon size={18} />
                  </Button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="secondary">Save draft</Button>
                <Button>
                  <Send size={17} /> Publish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
