import { Camera, Save } from "lucide-react";

import { Avatar, Button, Card, Input, Textarea } from "@/components/ui";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function EditProfilePage() {
  const user = useCurrentUser();

  return (
    <div className="mx-auto w-full max-w-3xl space-y-5">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
          Edit profile
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Static form controls for shaping your Vertex presence.
        </p>
      </div>
      <Card className="overflow-hidden">
        <div className="relative z-0 h-44 bg-zinc-200 dark:bg-zinc-900">
          <img alt="" className="relative z-0 size-full object-cover" src={user.coverUrl} />
          <button className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-sm font-bold text-zinc-900 shadow-sm backdrop-blur">
            <Camera size={16} /> Cover
          </button>
        </div>
        <div className="relative z-20 px-5 pb-6">
          <div className="relative z-30 -mt-12 w-fit">
            <Avatar
              alt={user.name}
              className="size-24 ring-4 ring-white dark:ring-zinc-950"
              src={user.avatarUrl}
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Input defaultValue={user.name} aria-label="Name" />
            <Input defaultValue={user.handle} aria-label="Handle" />
            <Input className="sm:col-span-2" defaultValue={user.headline} aria-label="Headline" />
            <Input defaultValue={user.location} aria-label="Location" />
            <Input defaultValue="vertex.social/priyak" aria-label="Website" />
            <Textarea className="sm:col-span-2" defaultValue={user.bio} aria-label="Bio" />
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary">Cancel</Button>
            <Button>
              <Save size={17} /> Save changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
