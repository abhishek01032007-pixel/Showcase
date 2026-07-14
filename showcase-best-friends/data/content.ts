export const besties = {
  one: "Maya",
  two: "Zoya",
  since: "BEST FRIENDS SINCE 2019",
  subtitle: "Two people. One chaos. Infinite memories.",
};

export const profiles = [
  {
    name: "Maya",
    role: "The Planner",
    tag: "Keeps the group alive",
    detail: "Has the plan, the snacks, and somehow still arrives late.",
  },
  {
    name: "Zoya",
    role: "The Chaos",
    tag: "Turns plans into stories",
    detail: "Makes every normal day feel like a memory worth saving.",
  },
];

export const memories = Array.from({ length: 20 }, (_, index) => {
  const items = [
    ["The day we met", "12 Jun 2019", "A normal day that quietly became the beginning of everything."],
    ["Our first selfie", "20 Jul 2019", "Blurry photo, perfect memory, zero idea how important it would become."],
    ["Birthday madness", "03 Mar 2020", "Cake, chaos, bad singing, and the kind of happiness that stays."],
    ["Late night talks", "18 Sep 2020", "One conversation turned into hours, and somehow everything felt lighter."],
    ["The inside joke", "09 Jan 2021", "Nobody else understands it. That is exactly why it matters."],
    ["The first fight", "22 Apr 2021", "Proof that real friendship survives honest feelings and dramatic silence."],
    ["Patch-up day", "25 Apr 2021", "One message, one laugh, and suddenly we were us again."],
    ["Food adventure", "16 Aug 2021", "We ordered too much and still discussed dessert like professionals."],
    ["The trip plan", "11 Dec 2021", "Half the trip was planning. The other half was changing the plan."],
    ["Favorite cafe", "06 Feb 2022", "Our table, our stories, and one bill we pretended not to see."],
    ["Farewell hugs", "30 May 2022", "A goodbye that proved distance is not stronger than friendship."],
    ["Long call record", "14 Oct 2022", "Started with one update, ended with life advice and laughter."],
    ["The surprise", "03 Mar 2023", "We nearly ruined it twice, but the smile made everything perfect."],
    ["Rain walk", "29 Jul 2023", "No umbrella, no regrets, just a memory that felt like a movie."],
    ["Photo recreation", "12 Jun 2024", "Same pose, better people, stronger friendship."],
    ["The voice note era", "23 Sep 2024", "Some messages should probably never be played in public."],
    ["Festival lights", "01 Nov 2024", "Bright lights outside, brighter chaos inside."],
    ["Almost missed it", "18 Jan 2025", "We were late, dramatic, and somehow exactly on time for the story."],
    ["Our safe place", "07 Apr 2025", "The kind of friendship where silence is comfortable too."],
    ["Still us", "Today", "More memories loading. Same friendship, new stories."],
  ];
  const [title, date, description] = items[index];
  return { id: index + 1, title, date, description };
});

export const timeline = [
  ["2019", "First Meeting", "Two strangers became the start of a very loud story."],
  ["2019", "First Conversation", "One small conversation turned into a habit of sharing everything."],
  ["2020", "First Bestie Birthday", "A celebration full of bad singing and perfect emotion."],
  ["2021", "First Fight", "The friendship got tested and came back stronger."],
  ["2021", "Patch-Up Moment", "A message, a laugh, and the friendship felt like home again."],
  ["2022", "First Trip Plan", "The planning was chaotic, but the dream became unforgettable."],
  ["2024", "Favorite Memory", "A moment we still talk about like it happened yesterday."],
  ["Today", "Still More To Come", "This story is nowhere close to finished."],
];

export const jokes = [
  ["Five minutes away", "Usually said from bed."],
  ["The code word", "One phrase. Entire conversations understood."],
  ["That restaurant", "We said never again. We went again."],
  ["The voice note", "Too iconic to delete, too dangerous to play."],
];

export const bucketList = ["Take a road trip", "Watch sunrise", "Try every cafe", "Recreate our first photo", "Plan a surprise birthday", "Travel together", "Start a tradition"];
