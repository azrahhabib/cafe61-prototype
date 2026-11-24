import { Camera, ArrowUpRight } from "lucide-react";

const GALLERY_PHOTOS = [
  {
    id: 1,
    src: "/images/strawberry daquiri.webp",
    alt: "Chilled strawberry drink at Cafe 61",
    caption: "Fresh & Frozen Sips",
    isLarge: true,
  },
  {
    id: 2,
    src: "/images/scrambled eggs and cappucinno.webp",
    alt: "Latte art cappuccino and scrambled eggs on toast",
    caption: "Morning Pours & Eggs",
  },
  {
    id: 3,
    src: "/images/begel.webp",
    alt: "Stacked Cafe 61 breakfast bagel with herb pesto",
    caption: "Signature Breakfast Bagel",
  },
  {
    id: 4,
    src: "/images/Breakfast bagel.webp",
    alt: "Open-faced seeded bagels with red onion, tomato, and pesto",
    caption: "Open Seeded Bagels",
  },
  {
    id: 5,
    src: "/images/nellys omletes.webp",
    alt: "Folded breakfast wrap garnished with fresh herbs",
    caption: "Freshly Plated Wraps",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-wrapper">
      <div className="section-header-center">
        <span className="section-eyebrow">The Atmosphere</span>
        <h2>Moments at Cafe 61</h2>
        <p>
          A glimpse into slow mornings, sunlit tables, and freshly plated
          favourites in Windermere.
        </p>
      </div>

      <div className="bento-grid">
        {GALLERY_PHOTOS.map((photo) => (
          <figure
            key={photo.id}
            className={`bento-item ${photo.isLarge ? "bento-large" : ""}`}
          >
            <img src={photo.src} alt={photo.alt} className="bento-img" />
            <figcaption className="bento-caption">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="gallery-cta-wrap">
    <a
  href="https://instagram.com/cafe.sixtyone"
  target="_blank"
  rel="noreferrer"
  className="gallery-ig-btn"
>
          <Camera size={16} />
          <span>See More on Instagram</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}