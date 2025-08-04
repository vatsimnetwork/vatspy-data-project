export function parseDatFile<S extends Record<string, { title: string; children: Record<string, true> }>>(
    {
        sections,
        dat,
    }: {
        sections: S;
        dat: string;
    }): {
    [K in keyof S]: Array<{
        [L in keyof S[K]['children']]?: string
    }>
} {
    const result = {} as ReturnType<typeof parseDatFile<S>>;

    for (
        const [
            section, {
                title,
                children,
            },
        ] of Object.entries(sections) as [string, { title: string; children: Record<string, true> }][]
        ) {
        const keys = Object.keys(children);
        const items = dat.split(`[${title}]`)[1]?.split(/\n\s*\n/)[0]?.split('\n');
        if (!items?.length) throw new Error(`No items found for section ${title}`);

        result[section as keyof S] = [];

        for (let item of items) {
            item = item.trim();
            if (!item || item.startsWith(';')) continue;
            const sections = item.split('|');
            const itemResult = {} as Record<string, string>;

            keys.forEach((key, index) => {
                const section = sections[index]?.split(';')[0]?.trim();
                if (section === undefined) return;
                itemResult[key] = section;
            });

            result[section as keyof S].push(itemResult);
        }
    }

    return result;
}
