import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => false;
  }, [resolvedTheme]);
  return isDark;
};

const theme = {
  github: "https://github.com/aurevo/docs",
  projectLink: "https://github.com/aurevo/docs",
  docsRepositoryBase: "https://github.com/aurevo/docs/blob/main/pages",
  titleSuffix: " | Aurevo",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  feedbackLink: "Improve →",
  logo: function Logo() {
    const isDark = useDark();
    return (
      <>
        <img
          width="35"
          src="https://aurevocdn.xyz/branding/aurevo_blue_light.png"
          alt="Aurevo logo"
        />
        <span className="w-full font-bold pl-2">Aurevo</span>
      </>
    );
  },
  head: function Head({ title, meta }) {
    const router = useRouter();
    const isDark = useDark();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={`https://aurevocdn.xyz/branding/aurevo_blue_light.png`}
          type="image/png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://docs.aurevo.us${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`https://docs.aurevo.us${meta.ogImage ?? "/og-image.png"}`}
        />
        <meta property="og:site_name" content="Aurevo Docs" />
      </>
    );
  },
  footerEditLink: () => {
    return "Edit this page on GitHub";
  },
};
export default theme;
