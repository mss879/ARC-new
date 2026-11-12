import GuidesStrip from "@/components/GuidesStrip";

/* Every blog page (the index and each post) ends with plain links to the Sri Lanka
 * guides, so the guides are linked from the whole blog without relying on the footer. */
export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <GuidesStrip />
        </>
    );
}
