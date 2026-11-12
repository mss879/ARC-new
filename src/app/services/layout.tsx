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
        <>
            {children}
            <RelatedServices />
            <Footer />
        </>
    );
}
