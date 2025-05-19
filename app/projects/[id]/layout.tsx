import Header from "@/components/header";
import Footer from "@/components/footer";
// Fix the import to use the correct path and component name
import ThemeContextProvider from "@/context/theme-context";

/**
 * Layout component for project pages. Provides a consistent theme and styling wrapper
 * for project content, including decorative background elements, header, and footer.
 *
 * @param children - React nodes to be rendered as the main content
 * @returns A themed layout container with project-specific styling
 */
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 relative pt-28 sm:pt-36">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <Header />
        <main>{children}</main>
      </div>
    </ThemeContextProvider>
  );
}
