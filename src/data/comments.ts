import type { Comment } from "@/types/social";

export const comments: Comment[] = [
  {
    id: "c-001",
    postId: "p-002",
    authorId: "u-noah",
    content: "The first tiny win framing is excellent. It gives the user momentum without pressure.",
    createdAt: "2026-07-06T06:10:00.000Z",
    likes: 42,
    replies: [
      {
        id: "c-001-r1",
        postId: "p-002",
        authorId: "u-maya",
        content: "Exactly. We started thinking of it as orientation before activation.",
        createdAt: "2026-07-06T06:22:00.000Z",
        likes: 18,
      },
    ],
  },
  {
    id: "c-002",
    postId: "p-003",
    authorId: "u-priya",
    content: "Reaction feedback has the most emotional leverage, especially if it stays subtle.",
    createdAt: "2026-07-06T04:40:00.000Z",
    likes: 31,
  },
  {
    id: "c-003",
    postId: "p-004",
    authorId: "u-maya",
    content: "Warm networks is the phrase I wanted and did not have. Saving this.",
    createdAt: "2026-07-05T20:13:00.000Z",
    likes: 67,
  },
];
