export default function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} Pragya Kumari. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
