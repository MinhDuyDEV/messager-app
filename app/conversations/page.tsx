"use client";
import React from "react";
import useConversation from "@/hooks/useConversation";
import EmptyState from "@/components/EmptyState";
import clsx from "clsx";

const ConversationPage = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx(`lg:pl-80 h-full lg:block`, isOpen ? "block" : "hidden")}
    >
      <EmptyState></EmptyState>
    </div>
  );
};

export default ConversationPage;
