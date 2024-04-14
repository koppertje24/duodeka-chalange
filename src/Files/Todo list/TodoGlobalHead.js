import React from 'react';

export const initialGlobalState = {
    todos: [
        {title: "Reading Time", description: "Spend 30 minutes reading a book of your choice."},
        {title: "Fresh Air Walk", description: "Go for a 15-minute walk to get some fresh air and exercise."},
        {title: "Report Completion", description: "Complete the pending report for work."},
        {title: "Friendly Call", description: "Reach out to a friend or family member for a catch-up."},
        {title: "Healthy Meal Prep", description: "Prepare a healthy meal with a variety of vegetables."},
        {title: "Mindful Meditation", description: "Spend 10 minutes meditating to clear your mind."},
        {title: "Living Room Cleanup", description: "Tidy up the living room."},
    ],
};

export const ToDoGlobalState = React.createContext(initialGlobalState);