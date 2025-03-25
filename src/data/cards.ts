export interface CardsData {
  to: string;
  imgSrc: string;
  alt: string;
  label: string;
  wide?: boolean; // Flag to indicate wide card usage
}

export const cardItemsData: CardsData[] = [
  {
    to: "/collections",
    imgSrc:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
    alt: "Collections",
    label: "collections",
  },
  {
    to: "/machines",
    imgSrc:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
    alt: "Machines",
    label: "machines",
  },
  {
    to: "/patterns",
    imgSrc:
      "https://ipfs.io/ipfs/QmW4ZfkBhNw8pFHD5tMfrP9ZvPA2aDy8ur2e4pafiSjkTJ",
    alt: "Patterns",
    label: "patterns",
  },
  {
    to: "/audiovisual",
    imgSrc:
      "https://ipfs.io/ipfs/QmehS5B3bhhYogej5BUkcSYeUT78MmTGkNNwYgR3jJ6Gc7",
    alt: "Audiovisual",
    label: "audiovisual",
  },
  {
    to: "/miscellaneous",
    imgSrc:
      "https://res.cloudinary.com/nifty-gateway/image/upload/v1684745617/publishers/ina-vare/67816/91345/Kerim%20Safa%20-%20Irregular%20Liquid%20-%20Kerim%20Safa.gif",
    alt: "Miscellaneous",
    label: "miscellaneous",
  },
  {
    to: "/exhibitions",
    imgSrc:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
    alt: "Exhibitions",
    label: "exhibitions",
  },
  {
    to: "/about",
    imgSrc:
      "https://ipfs.io/ipfs/QmWEZphHGwcTKPBKVgnM5Q4cUPytdhCAyrq7uvtydjbkcP",
    alt: "About",
    label: "about",
  },
];
