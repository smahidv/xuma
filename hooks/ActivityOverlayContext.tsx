"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface ActivityOverlayContextType {
    isOverlayOpen: boolean;
    currentActivityIndex: number | null;
    openOverlay: (index: number) => void;
    closeOverlay: () => void;
}

// Initialize the context with a default value of undefined
const ActivityOverlayContext = createContext<ActivityOverlayContextType | undefined>(undefined);

// Create the provider component
export const ActivityOverlayProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOverlayOpen, setOverlayOpen] = useState(false);
    const [currentActivityIndex, setCurrentActivityIndex] = useState<number | null>(null);

    const openOverlay = (index: number) => {
        setCurrentActivityIndex(index);
        setOverlayOpen(true);
     
        
    };

    const closeOverlay = () => {
        setOverlayOpen(false);
        setCurrentActivityIndex(null);
    };

    return (
        <ActivityOverlayContext.Provider value={{ isOverlayOpen, currentActivityIndex, openOverlay, closeOverlay }}>
            {children}
        </ActivityOverlayContext.Provider>
    );
};

// Custom hook to use the context
export const useActivityOverlay = () => {
    const context = useContext(ActivityOverlayContext);
    if (context === undefined) {
        throw new Error('useActivityOverlay must be used within an ActivityOverlayProvider');
    }
    return context;
};
