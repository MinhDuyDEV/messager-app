import getConversation from "@/actions/getConversation";
import ConversationList from "@/components/conversation/ConversationList";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations}></ConversationList>
        {children}
      </div>
    </Sidebar>
  );
}
