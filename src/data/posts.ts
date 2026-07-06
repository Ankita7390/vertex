import type { Post } from "@/types/social";

export const posts: Post[] = [
  {
    id: "p-001",
    authorId: "u-priya",
    type: "text",
    content: "A useful social product should make people feel more oriented, not more scattered.",
    createdAt: "2026-07-05T15:40:00.000Z",
    visibility: "public",
    hashtags: ["ProductDesign", "SocialUX"],
    mentions: [],
    stats: { likes: 284, comments: 36, shares: 18, bookmarks: 91, views: 14200 },
  },
  {
    id: "p-002",
    authorId: "u-maya",
    type: "gallery",
    content:
      "We redesigned our onboarding around three moments: welcome, orientation, and first tiny win. The surprise was how much calmer the community felt after removing half the prompts.",
    createdAt: "2026-07-06T05:20:00.000Z",
    visibility: "public",
    media: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=700&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=700&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=700&fit=crop",
    ],
    hashtags: ["CommunityDesign", "Onboarding"],
    mentions: ["HearthLabs"],
    stats: { likes: 921, comments: 84, shares: 52, bookmarks: 318, views: 48600 },
  },
  {
    id: "p-003",
    authorId: "u-noah",
    type: "poll",
    content:
      "Motion question for product folks: where should a social app spend its animation budget first?",
    createdAt: "2026-07-06T03:10:00.000Z",
    visibility: "connections",
    poll: {
      question: "What animation makes a feed feel most premium?",
      options: [
        { id: "po-1", label: "Page transitions", votes: 286 },
        { id: "po-2", label: "Reaction feedback", votes: 418 },
        { id: "po-3", label: "Composer microstates", votes: 173 },
        { id: "po-4", label: "Skeleton loading", votes: 97 },
      ],
      totalVotes: 974,
      endsAt: "2026-07-08T09:00:00.000Z",
    },
    hashtags: ["Frontend", "MotionDesign"],
    mentions: [],
    stats: { likes: 512, comments: 61, shares: 24, bookmarks: 144, views: 27700 },
  },
  {
    id: "p-004",
    authorId: "u-amelia",
    type: "article",
    content:
      "Published a field note on why smaller, slower social spaces can outperform big noisy networks for trust and retention.",
    createdAt: "2026-07-05T18:05:00.000Z",
    visibility: "public",
    article: {
      title: "The Case for Warm Networks",
      source: "Hearth Labs Journal",
      excerpt:
        "A practical look at social product mechanics that make people feel known without forcing performance.",
      imageUrl:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=520&fit=crop",
    },
    hashtags: ["SocialUX", "ProductStrategy"],
    mentions: [],
    stats: { likes: 1800, comments: 146, shares: 302, bookmarks: 690, views: 88400 },
  },
  {
    id: "p-005",
    authorId: "u-priya",
    type: "video",
    content:
      "Prototype note: the best composer is not a blank box. It is a tiny studio with just enough cues to make posting feel easy.",
    createdAt: "2026-07-04T21:24:00.000Z",
    visibility: "public",
    media: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=560&fit=crop",
    ],
    hashtags: ["Prototype", "CreatorTools"],
    mentions: ["NoahShah"],
    stats: { likes: 742, comments: 93, shares: 39, bookmarks: 227, views: 39200 },
  },
];
