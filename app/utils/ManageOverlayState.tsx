"use client";
import { ReactNode } from "react";
import { Header, Footer } from "@/components";
import {  useActivityOverlay } from '@/hooks/ActivityOverlayContext';
import ActivityOverlay from "@/components/activities/ActivityOverlay";

interface ManageOverlayStateProps {
    children: ReactNode;
  }
export default function ManageOverlayState({ children }:ManageOverlayStateProps) {
    const { isOverlayOpen, closeOverlay } = useActivityOverlay();
    return (
        <>
          {isOverlayOpen ? (
            <ActivityOverlay onClose={closeOverlay} />
          ) : (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
        </>
      );
}
