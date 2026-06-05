"use client";

export default function TableOfContents() {
  return (
    <div className="border border-gray-100 p-8 rounded-[2.5rem] bg-white shadow-sm sticky top-24">
      <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-6 text-gray-400">
        In This Article
      </h4>
      <ul className="space-y-4 text-sm font-medium">
        {/* Ensure these IDs match the <h2 id="..."> in your article content */}
        <li>
          <a
            href="#financial-breakdown"
            className="text-gray-600 hover:text-brand-logoPurple transition-colors flex items-center gap-2"
          >
            <div className="w-1 h-1 rounded-full bg-brand-logoPurple/20" />{" "}
            Financial Breakdown
          </a>
        </li>
        <li>
          <a
            href="#home-benefits"
            className="text-gray-600 hover:text-brand-logoPurple transition-colors flex items-center gap-2"
          >
            <div className="w-1 h-1 rounded-full bg-brand-logoPurple/20" />{" "}
            Benefits of Home Care
          </a>
        </li>
        <li>
          <a
            href="#hidden-costs"
            className="text-gray-600 hover:text-brand-logoPurple transition-colors flex items-center gap-2"
          >
            <div className="w-1 h-1 rounded-full bg-brand-logoPurple/20" />{" "}
            Facility Hidden Costs
          </a>
        </li>
      </ul>

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 mb-1">Need immediate help?</p>
        <a
          href="/get-started"
          className="font-bold text-brand-logoPurple text-sm hover:underline"
        >
          Get started
        </a>
      </div>
    </div>
  );
}
