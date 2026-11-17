import RelatedServices from "@/components/RelatedServices";
import Footer from "@/components/Footer";

/* Every page under /services ends the same way: links to the other services,
 * then the site footer. The footer lives here, not in each page, because ten
 * of the sixteen service pages had been built without one. */
export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // .home-cream is the grey-cream theme; the strip and the footer below the
        // page need it as much as the page does.
        <div className="home-cream">
            {children}
            <RelatedServices />
            <Footer />
        </div>
    );
}
