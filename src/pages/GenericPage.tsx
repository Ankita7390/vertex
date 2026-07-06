import { useLocation } from "react-router-dom";

import { PlaceholderPage } from "@/pages/PlaceholderPage";

const labels: Record<string, string> = {
  "/explore": "Explore",
  "/profile/edit": "Edit Profile",
  "/messages": "Messages",
  "/network": "Network",
  "/notifications": "Notifications",
  "/bookmarks": "Bookmarks",
  "/search": "Search",
  "/settings": "Settings",
  "/settings/account": "Account Settings",
  "/settings/privacy": "Privacy Settings",
  "/settings/security": "Security Settings",
  "/settings/theme": "Theme Settings",
  "/settings/preferences": "Preference Settings",
  "/create-post": "Create Post",
  "/trending": "Trending",
  "/saved": "Saved",
  "/help": "Help Center",
};

export default function GenericPage() {
  const { pathname } = useLocation();
  const title = labels[pathname] ?? "Vertex";

  return (
    <PlaceholderPage
      description="This route is registered and ready for its production feature implementation in the upcoming incremental steps."
      title={title}
    />
  );
}
