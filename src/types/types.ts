export interface Contentful {
  sys: ContentfulSys;
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}

export interface Includes {
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys: AssetSys;
  fields: AssetFields;
}

export interface AssetFields {
  title: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: ContentTypeEnum;
}

export enum ContentTypeEnum {
  ImagePNG = "image/png",
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface AssetSys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: Locale;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: ID;
  type: PurpleType;
  linkType: LinkType;
}

export enum ID {
  Master = "master",
  Projects = "projects",
  The9F7Rsl67Dvjh = "9f7rsl67dvjh",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum PurpleType {
  Link = "Link",
}

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface Item {
  metadata: Metadata;
  sys: AssetSys;
  fields: ItemFields;
}

export interface ItemFields {
  name: string;
  subtitle: string;
  description: string;
  image: Asset;
  url: string;
  tools: Asset[];
}

export interface ContentfulSys {
  type: string;
}
