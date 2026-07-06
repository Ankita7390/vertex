import type { User } from "@/types/social";

export const users: User[] = [
  {
    id: "u-priya",
    name: "Priya Kapoor",
    handle: "priyak",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop",
    coverUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=520&fit=crop",
    headline: "Product designer building calm social systems",
    location: "San Francisco, CA",
    bio: "Designing tools for thoughtful teams and communities. I care about interfaces that reduce social performance and make people feel oriented.",
    mutuals: ["Maya Chen", "Noah Shah", "Amelia Torres"],
    connections: 1860,
    followers: 12840,
    following: 842,
    experience: [
      {
        id: "exp-priya-1",
        role: "Principal Product Designer",
        company: "Northstar Studio",
        period: "2024 - Present",
        description:
          "Leading design systems and social interaction patterns for creator-led communities.",
      },
      {
        id: "exp-priya-2",
        role: "Senior UX Designer",
        company: "Orbit Social",
        period: "2021 - 2024",
        description:
          "Shipped feed, profile, and messaging systems used by millions of members.",
      },
    ],
    education: [
      {
        id: "edu-priya-1",
        school: "California College of the Arts",
        credential: "MFA, Interaction Design",
        period: "2018 - 2020",
      },
    ],
    skills: ["Product Strategy", "Design Systems", "Social UX", "Research", "Prototyping"],
    projects: [
      {
        id: "proj-priya-1",
        name: "Quiet Feed",
        description: "A social feed pattern that prioritizes intent, pacing, and conversation quality.",
        metric: "31% higher meaningful replies",
      },
      {
        id: "proj-priya-2",
        name: "Creator Studio",
        description: "A post composer system for rich media, drafts, scheduling, and audience control.",
        metric: "2.4x draft completion",
      },
    ],
    certificates: [
      {
        id: "cert-priya-1",
        name: "Advanced Design Leadership",
        issuer: "Design Executive Council",
        issuedAt: "2025",
      },
    ],
  },
  {
    id: "u-maya",
    name: "Maya Chen",
    handle: "mayac",
    avatarUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=240&h=240&fit=crop",
    coverUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=520&fit=crop",
    headline: "Community strategist for creator-led products",
    location: "New York, NY",
    bio: "Helping teams build social spaces people want to return to.",
    followers: 21400,
    following: 1190,
    connections: 2400,
    skills: ["Community Strategy", "Onboarding", "Moderation", "Research"],
  },
  {
    id: "u-noah",
    name: "Noah Shah",
    handle: "noahshah",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=240&fit=crop",
    coverUrl:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&h=520&fit=crop",
    headline: "Frontend engineer, motion systems, interface craft",
    location: "Austin, TX",
    bio: "Making pixels feel inevitable.",
    followers: 9360,
    following: 532,
    connections: 1184,
    skills: ["React", "Motion", "Design Engineering", "Accessibility"],
  },
  {
    id: "u-amelia",
    name: "Amelia Torres",
    handle: "ameliat",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=240&fit=crop",
    coverUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&h=520&fit=crop",
    headline: "Founder at Hearth Labs",
    location: "London, UK",
    bio: "Building healthier social rituals for small communities.",
    followers: 44100,
    following: 705,
    connections: 3200,
    skills: ["Founder", "Product Strategy", "Community", "Writing"],
  },
];
