export type ID = string;

export interface User {
  id: ID;
  name: string;
  handle: string;
  avatarUrl: string;
  coverUrl?: string;
  headline: string;
  location?: string;
  bio?: string;
  mutuals?: string[];
  connections?: number;
  followers: number;
  following: number;
  experience?: ProfileExperience[];
  education?: ProfileEducation[];
  skills?: string[];
  projects?: ProfileProject[];
  certificates?: ProfileCertificate[];
}

export interface ProfileExperience {
  id: ID;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProfileEducation {
  id: ID;
  school: string;
  credential: string;
  period: string;
}

export interface ProfileProject {
  id: ID;
  name: string;
  description: string;
  metric: string;
}

export interface ProfileCertificate {
  id: ID;
  name: string;
  issuer: string;
  issuedAt: string;
}

export interface Post {
  id: ID;
  authorId: ID;
  type: "text" | "image" | "gallery" | "video" | "poll" | "article";
  content: string;
  createdAt: string;
  visibility: "public" | "connections" | "private";
  media?: string[];
  poll?: {
    question: string;
    options: Array<{ id: ID; label: string; votes: number }>;
    totalVotes: number;
    endsAt: string;
  };
  article?: {
    title: string;
    source: string;
    excerpt: string;
    imageUrl: string;
  };
  hashtags: string[];
  mentions: string[];
  stats: {
    likes: number;
    comments: number;
    shares: number;
    bookmarks: number;
    views: number;
  };
}

export interface Comment {
  id: ID;
  postId: ID;
  authorId: ID;
  content: string;
  createdAt: string;
  likes: number;
  replies?: Comment[];
}

export interface NotificationItem {
  id: ID;
  type: "reaction" | "comment" | "follow" | "mention" | "job" | "event";
  actorId: ID;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: ID;
  participantIds: ID[];
  lastMessageAt: string;
  unreadCount: number;
  title?: string;
  summary?: string;
  pinned?: boolean;
  archived?: boolean;
  typingUserId?: ID;
  seenBy?: ID[];
}

export interface Message {
  id: ID;
  conversationId: ID;
  senderId: ID;
  body: string;
  createdAt: string;
  status: "sent" | "delivered" | "seen";
  media?: {
    type: "image" | "file";
    label: string;
    url?: string;
  };
}
