import { useParams } from "react-router-dom";

import { ProfileActivity } from "@/components/profile/ProfileActivity";
import { ProfileDetails } from "@/components/profile/ProfileDetails";
import { ProfileHero } from "@/components/profile/ProfileHero";
import { EmptyState } from "@/components/ui";
import { posts, users } from "@/data";

export default function ProfilePage() {
  const { id } = useParams();
  const user = users.find((item) => item.id === id) ?? users[0];
  const userPosts = posts.filter((post) => post.authorId === user.id);

  if (!user) {
    return (
      <EmptyState
        description="This member profile does not exist in the local mock data."
        title="Profile not found"
      />
    );
  }

  return (
    <div className="space-y-5">
      <ProfileHero isCurrentUser={user.id === "u-priya"} user={user} />
      <ProfileDetails user={user} />
      <ProfileActivity posts={userPosts.length ? userPosts : posts.slice(0, 2)} user={user} />
    </div>
  );
}
