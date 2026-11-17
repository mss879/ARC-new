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
        // .home-cream is the grey-cream theme; the strip and the footer below the
        // page need it as much as the page does.
        <div className="home-cream">
            {children}
            <GuidesStrip />
            <Footer />
        </div>
    );
}
