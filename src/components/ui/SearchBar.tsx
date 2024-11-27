"use client";

import { Search } from "lucide-react";
import { useSearch } from "@/context/search-context";
import { useState, useEffect } from "react";

export function SearchBar() {
  const { setSearchTerm } = useSearch();
  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchTerm(localSearch);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localSearch, setSearchTerm]);

  return (
    <div className="relative flex-1 max-w-md">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Rechercher un problème..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm 
            placeholder:text-muted-foreground
            shadow-sm 
            transition-colors 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        />
      </div>
    </div>
  );
}
