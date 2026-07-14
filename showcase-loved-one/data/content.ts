export type Memory = {
  id: number;
  label: string;
  title: string;
  date: string;
  description: string;
  layout: "feature" | "split" | "polaroid" | "masonry" | "floating" | "parallax";
};

export const couple = {
  personOne: "Aarav",
  personTwo: "Riya",
  since: "Together since 14 February 2021",
  subtitle: "A quiet little universe made of laughter, courage, and choosing each other—every single day.",
};

const memoryCopy = [
  ["Where it all began", "14 Feb 2021", "One unexpected hello became the beginning of everything."],
  ["Our first conversation", "18 Feb 2021", "Hours disappeared while the rest of the world became beautifully quiet."],
  ["Coffee and courage", "02 Mar 2021", "Nervous smiles, warm coffee, and a feeling neither of us could ignore."],
  ["The first photograph", "21 Mar 2021", "A slightly blurry picture and a perfectly clear memory."],
  ["Our favorite evening", "17 Apr 2021", "Golden light, an empty road, and nowhere else we needed to be."],
  ["A tiny celebration", "09 Jun 2021", "Cake for no reason, laughter too loud, happiness completely unplanned."],
  ["The thoughtful gift", "28 Aug 2021", "Proof that being truly known is the loveliest feeling in the world."],
  ["Rainy day promise", "12 Sep 2021", "We made a promise under one umbrella and have kept it ever since."],
  ["Our first festival", "04 Nov 2021", "Lights everywhere—but you were still the brightest part of the evening."],
  ["Midnight wishes", "01 Jan 2022", "A new year started with the same wish: more time together."],
  ["The first adventure", "19 Mar 2022", "Wrong turns, roadside tea, and stories we still laugh about."],
  ["Birthday magic", "23 Jul 2022", "A day filled with details that said, ‘I see you, and I adore you.’"],
  ["Our secret place", "16 Oct 2022", "A corner of the city that will always belong only to us."],
  ["Dancing in the kitchen", "08 Jan 2023", "No audience, no perfect steps—just one of those moments that felt perfectly ours."],
  ["A brave new chapter", "24 May 2023", "We held hands, took the leap, and made change feel like home."],
  ["Sunrise together", "11 Nov 2023", "We woke before the world and watched the sky begin again."],
  ["The longest hug", "03 Feb 2024", "Some moments need no words. This was one of them."],
  ["Another anniversary", "14 Feb 2025", "Four years, countless memories, and the easiest yes of our lives."],
  ["Our everyday kind of love", "26 Oct 2025", "Groceries, inside jokes, shared playlists—the beautiful ordinary."],
  ["Still becoming us", "Today", "The best memory is the life we are still creating together."],
];

const layouts: Memory["layout"][] = ["feature", "split", "polaroid", "polaroid", "polaroid", "masonry", "masonry", "masonry", "masonry", "floating", "floating", "floating", "split", "split", "parallax", "polaroid", "masonry", "floating", "split", "feature"];

export const memories: Memory[] = memoryCopy.map(([title, date, description], index) => ({
  id: index + 1,
  label: `Photo ${index + 1}`,
  title,
  date,
  description,
  layout: layouts[index],
}));

export const timeline = [
  ["14 Feb 2021", "First Meeting", "One hello, two shy smiles, and a story quietly beginning."],
  ["18 Feb 2021", "First Message", "The message that turned a lovely moment into something more."],
  ["02 Mar 2021", "First Date", "Coffee went cold because the conversation was too good."],
  ["28 Aug 2021", "First Gift", "Small, thoughtful, and proof that you had been listening."],
  ["19 Mar 2022", "First Trip", "A full tank, one playlist, and no plan beyond being together."],
  ["11 Nov 2023", "Favorite Memory", "Watching sunrise and realizing this is what peace feels like."],
  ["Today", "Still Choosing You", "The story continues—softer, stronger, and more beautiful each day."],
];
