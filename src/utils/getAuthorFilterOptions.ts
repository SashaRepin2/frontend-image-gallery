import IAuthor from "@interfaces/IAuthor";

export function getAuthorFilterOptions(
    authors: IAuthor[],
): { value: string; label: string }[] {
    return authors.map((author) => {
        return {
            value: author.id.toString(),
            label: author.name,
        };
    });
}
