import collections from "./collections";

const config = {
  cms_manual_init: true,
  backend: {
    name: "git-gateway",
    branch: "master",
    app_id: "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",
    access_token: "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"
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
