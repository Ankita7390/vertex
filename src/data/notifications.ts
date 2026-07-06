import type { NotificationItem } from "@/types/social";

export const notifications: NotificationItem[] = [
  {
    id: "n-001",
    type: "reaction",
    actorId: "u-maya",
    message: "reacted to your post",
    createdAt: "2026-07-06T08:30:00.000Z",
    read: false,
  },
  {
    id: "n-002",
    type: "comment",
    actorId: "u-noah",
    message: "commented on your motion design poll",
    createdAt: "2026-07-06T05:45:00.000Z",
    read: false,
  },
  {
    id: "n-003",
    type: "follow",
    actorId: "u-amelia",
    message: "started following you",
    createdAt: "2026-07-05T18:12:00.000Z",
    read: true,
  },
  {
    id: "n-004",
    type: "mention",
    actorId: "u-maya",
    message: "mentioned you in Vertex Makers",
    createdAt: "2026-07-03T11:20:00.000Z",
    read: true,
  },
];
