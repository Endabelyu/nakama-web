interface ImageNakama {
  id: number;
  src: string;
  alt: string;
  position: string;
}
const imageNakamas: ImageNakama[] = [
  {
    id: 1,
    src: "/image/one-piece-poster.jpg",
    alt: "First nakama's of luffy",
    position: "center",
  },
  {
    id: 2,
    src: "/image/nakamas.jpg",
    alt: "First nakama's of luffy",
    position: "center",
  },
  {
    id: 3,
    src: "/image/Luffy_and_His_Crew.webp",
    alt: "The strawhat pirates ",
    position: "top",
  },
  {
    id: 4,
    src: "/image/One-Piece-18.jpg",
    alt: "Nakama of luffy",
    position: "bottom",
  },
];

export default imageNakamas;
