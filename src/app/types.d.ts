import { Document } from '@contentful/rich-text-types';

export type BlogItem = any; {
    fields: {
        title: string;
        slug: string;
        date: Date;
        content: Document;
    }
}
export type BlogItems = any;

export type BlogQueryResult = {
    items: BlogItems;
}