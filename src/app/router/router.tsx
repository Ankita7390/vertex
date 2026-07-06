/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { routes } from "@/constants/routes";
import { AuthLayout } from "@/layouts/AuthLayout";
import { AppLayout } from "@/layouts/AppLayout";
import { Skeleton } from "@/components/ui";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AuthPage = lazy(() => import("@/pages/AuthPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const EditProfilePage = lazy(() => import("@/pages/EditProfilePage"));
const MessagesPage = lazy(() => import("@/pages/MessagesPage"));
const MessageThreadPage = lazy(() => import("@/pages/MessageThreadPage"));
const NotificationsPage = lazy(() => import("@/pages/NotificationsPage"));
const DiscoveryPage = lazy(() => import("@/pages/DiscoveryPage"));
const SettingsPage = lazy(() => import("@/pages/SettingsPage"));
const CreatePostPage = lazy(() => import("@/pages/CreatePostPage"));
const PostPage = lazy(() => import("@/pages/PostPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="grid w-full place-items-center">
      <div className="w-full max-w-2xl space-y-4">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: routes.login, element: withSuspense(<AuthPage />) },
      { path: routes.register, element: withSuspense(<AuthPage />) },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: routes.explore, element: withSuspense(<DiscoveryPage />) },
      { path: routes.profile, element: withSuspense(<ProfilePage />) },
      { path: routes.profileEdit, element: withSuspense(<EditProfilePage />) },
      { path: routes.messages, element: withSuspense(<MessagesPage redirectToFirst />) },
      { path: routes.messageThread, element: withSuspense(<MessageThreadPage />) },
      { path: routes.network, element: withSuspense(<DiscoveryPage />) },
      { path: routes.notifications, element: withSuspense(<NotificationsPage />) },
      { path: routes.bookmarks, element: withSuspense(<DiscoveryPage />) },
      { path: routes.search, element: withSuspense(<DiscoveryPage />) },
      { path: routes.settings, element: withSuspense(<SettingsPage />) },
      { path: routes.accountSettings, element: withSuspense(<SettingsPage />) },
      { path: routes.privacySettings, element: withSuspense(<SettingsPage />) },
      { path: routes.securitySettings, element: withSuspense(<SettingsPage />) },
      { path: routes.themeSettings, element: withSuspense(<SettingsPage />) },
      { path: routes.preferenceSettings, element: withSuspense(<SettingsPage />) },
      { path: routes.post, element: withSuspense(<PostPage />) },
      { path: routes.createPost, element: withSuspense(<CreatePostPage />) },
      { path: routes.trending, element: withSuspense(<DiscoveryPage />) },
      { path: routes.saved, element: withSuspense(<DiscoveryPage />) },
      { path: routes.help, element: withSuspense(<DiscoveryPage />) },
      { path: routes.notFound, element: withSuspense(<NotFoundPage />) },
      { path: "*", element: <Navigate replace to={routes.notFound} /> },
    ],
  },
]);
