import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* WCAG 2.4.1: Skip to main content link for keyboard users */}
			<a href="#main-content" className="skip-link">
				Skip to main content
			</a>
			<Header />
			<main id="main-content" className="flex-grow" tabIndex={-1}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
