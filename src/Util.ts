/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { SectionAndCategoryResolvable, ValueOf } from '.';
import { CategoryList, SectionTypes } from '.';

/**
 * Contains various utility methods.
 */
export class Util {
    /**
     * Resolves a SectionAndCategoryResolvable into a category or section number object.
     * @static
     * @param category - Category or section to resolve.
     * @return Category or section object
     * @throws Will throw an error when it cannot be resolved
     */
    static resolveCategory(category?: SectionAndCategoryResolvable): { section?: ValueOf<typeof SectionTypes>, category?: ValueOf<typeof CategoryList> } {
        if (!category) return {};

        /** @ts-ignore */
        const isSection = Object.keys(SectionTypes).find(s => Number(SectionTypes[s]) === Number(category) || s === category);
        /** @ts-ignore */
        if (isSection) return { section: SectionTypes[isSection] as ValueOf<typeof SectionTypes> };

        for (const [k, v] of Object.entries(CategoryList)) {
            if (k === category) return { category: v };
            if (Number(v) === Number(category)) return { category: v };
        }

        throw new TypeError('Unknown category');
    }
}
