import collections from "./collections";

const config = {
  cms_manual_init: true,
  backend: {
    name: "github",
    branch: "master",
  },
  media_folder: "public/images",
  public_folder: "images",
  slug: {
    encoding: 'ascii',
    clean_accents: true,
    sanitize_replacement: '-',
  },
  collections
};

export default config;
