import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
import { unstable_noStore } from "next/cache";

// export const revalidate = 5;
// export const dynamic = "force-dynamic"; // === cache: 'no-store'

export default async function MessagesPage() {
  // unstable_noStore();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
