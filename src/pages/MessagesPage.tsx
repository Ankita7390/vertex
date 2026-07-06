import { Navigate, useParams } from "react-router-dom";

import { ChatWindow } from "@/components/messages/ChatWindow";
import { ConversationList } from "@/components/messages/ConversationList";
import { EmptyState } from "@/components/ui";
import { conversations, messages } from "@/data";

interface MessagesPageProps {
  redirectToFirst?: boolean;
}

export default function MessagesPage({ redirectToFirst = false }: MessagesPageProps) {
  const { id } = useParams();
  const firstConversation = conversations[0];
  const activeId = id ?? firstConversation?.id;
  const activeConversation = conversations.find((conversation) => conversation.id === activeId);
  const activeMessages = messages.filter((message) => message.conversationId === activeId);

  if (redirectToFirst && firstConversation) {
    return <Navigate replace to={`/messages/${firstConversation.id}`} />;
  }

  if (!activeConversation) {
    return (
      <EmptyState
        description="This conversation is not available in the local mock data."
        title="Conversation not found"
      />
    );
  }

  return (
    <div className="grid min-h-[calc(100vh-8rem)] gap-4 lg:grid-cols-[24rem_minmax(0,1fr)]">
      <div className={id ? "hidden lg:block" : "block"}>
        <ConversationList activeId={activeConversation.id} conversations={conversations} />
      </div>
      <div className={id ? "block" : "hidden lg:block"}>
        <ChatWindow conversation={activeConversation} messages={activeMessages} />
      </div>
    </div>
  );
}
