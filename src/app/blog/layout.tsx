import GuidesStrip from "@/components/GuidesStrip";
import Footer from "@/components/Footer";

/* Every blog page (the index and each post) ends with plain links to the Sri Lanka
 * guides, then the site footer, which carries the links to the service pages. */
export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <GuidesStrip />
            <Footer />
        </>
    );
}
