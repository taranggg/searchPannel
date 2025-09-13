// Expanded item types to match the UI tabs and filters
export type ItemType =
  | "people"
  | "files"
  | "folders"
  | "videos"
  | "chats"
  | "lists";

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  subtitle?: string;
  status?: "active" | "idle";
  // Optional avatar image for people
  avatar?: string;
  // Optional deep link for the item
  url?: string;
}

export const MOCK: Item[] = [
  // People
  {
    id: "p1",
    type: "people",
    title: "Randall Johnsson",
    subtitle: "Active now",
    status: "active",
    avatar: "https://i.pravatar.cc/64?img=11",
  },
  {
    id: "p2",
    type: "people",
    title: "Kristinge Karand",
    subtitle: "Active 2d ago",
    status: "idle",
    avatar: "https://i.pravatar.cc/64?img=32",
  },
  {
    id: "p3",
    type: "people",
    title: "Dana Patel",
    subtitle: "Active 5m ago",
    status: "active",
    avatar: "https://i.pravatar.cc/64?img=5",
  },
  {
    id: "p4",
    type: "people",
    title: "Miguel Santos",
    subtitle: "Active 1h ago",
    status: "idle",
    avatar: "https://i.pravatar.cc/64?img=15",
  },
  {
    id: "p5",
    type: "people",
    title: "Lin Mei",
    subtitle: "Active yesterday",
    status: "idle",
    avatar: "https://i.pravatar.cc/64?img=47",
  },

  // Files
  {
    id: "f1",
    type: "files",
    title: "creative_brief_v2.pdf",
    subtitle: "in Docs/Briefs • Edited 12m ago",
  },
  {
    id: "f2",
    type: "files",
    title: "marketing-plan.xlsx",
    subtitle: "in Finance • Edited 2h ago",
  },
  {
    id: "f3",
    type: "files",
    title: "brand-logo.svg",
    subtitle: "in Assets/Logos • Edited 3d ago",
  },
  {
    id: "f4",
    type: "files",
    title: "meeting-notes.md",
    subtitle: "in Notes • Edited 1d ago",
  },
  {
    id: "f5",
    type: "files",
    title: "creative_file_frandkies.jpg",
    subtitle: "in Photos/Assets • Edited 12m ago",
  },

  // Folders
  {
    id: "fd1",
    type: "folders",
    title: "Random Michal Folder",
    subtitle: "in Photos • Edited 12m ago",
  },
  {
    id: "fd2",
    type: "folders",
    title: "Q4 Reports",
    subtitle: "in Finance • Updated 1d ago",
  },
  {
    id: "fd3",
    type: "folders",
    title: "Design System",
    subtitle: "in Assets • Updated 4d ago",
  },

  // Videos
  {
    id: "v1",
    type: "videos",
    title: "files_krande_michelle.avi",
    subtitle: "in Videos • Added 12m ago",
  },
  {
    id: "v2",
    type: "videos",
    title: "product-demo.mov",
    subtitle: "in Videos • Added 2w ago",
  },
  {
    id: "v3",
    type: "videos",
    title: "team-retreat.mp4",
    subtitle: "in Events • Added 6d ago",
  },

  // Chats
  {
    id: "c1",
    type: "chats",
    title: "Team Standup",
    subtitle: "You: Pushing fix in 5 mins",
    avatar: "https://i.pravatar.cc/64?img=64",
    status: "active",
  },
  {
    id: "c2",
    type: "chats",
    title: "Design Review",
    subtitle: "Lin: New mock ups ready",
    avatar: "https://i.pravatar.cc/64?img=23",
    status: "idle",
  },
  {
    id: "c3",
    type: "chats",
    title: "Finance",
    subtitle: "Miguel: Invoice approved",
    avatar: "https://i.pravatar.cc/64?img=8",
    status: "idle",
  },
  {
    id: "c4",
    type: "chats",
    title: "Random",
    subtitle: "Dana: That was hilarious 😂",
    avatar: "https://i.pravatar.cc/64?img=19",
    status: "active",
  },

  // Lists
  {
    id: "l1",
    type: "lists",
    title: "Groceries",
    subtitle: "7 items • Updated 1d ago",
  },
  {
    id: "l2",
    type: "lists",
    title: "Sprint Backlog",
    subtitle: "12 items • Updated 2h ago",
  },
  {
    id: "l3",
    type: "lists",
    title: "Reading",
    subtitle: "3 items • Updated 5d ago",
  },
];
