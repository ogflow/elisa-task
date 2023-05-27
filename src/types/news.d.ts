interface NewsItem {
  id: string;
  creationDate: string;
  publishDate: string;
  title: string;
  siteSpecificTags: TagItem[];
  content?: string;
}

interface TagItem {
  siteId: string;
  tag: string;
}