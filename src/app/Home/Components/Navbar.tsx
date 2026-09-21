// src/app/Home/Components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import ZXLogo from "./ZXLogo";

interface UserProfile {
  name: string;
  email: string;
  tier: string;
  memberId: string;
  activeBooking?: string;
}

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Vehicles", id: "vehicles" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact", id: "contact" },
];

const searchableVehicles = [
  {
    name: "Porsche 911 Carrera",
    category: "Exotic Sports",
    price: "$250/day",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=300&auto=format&fit=crop",
    targetId: "vehicles",
  },
  {
    name: "BMW M4 Competition",
    category: "Sports Coupe",
    price: "$180/day",
    badge: "Track Ready",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=300&auto=format&fit=crop",
    targetId: "vehicles",
  },
  {
    name: "Mercedes-Benz C-Class",
    category: "Luxury Sedan",
    price: "$120/day",
    badge: "Executive",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=300&auto=format&fit=crop",
    targetId: "vehicles",
  },
  {
    name: "Tesla Model S Plaid",
    category: "Electric Performance",
    price: "$195/day",
    badge: "EV Supercar",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=300&auto=format&fit=crop",
    targetId: "services",
  },
  {
    name: "Range Rover Autobiography",
    category: "Luxury SUV",
    price: "$220/day",
    badge: "All-Terrain VIP",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=300&auto=format&fit=crop",
    targetId: "services",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Search Modal State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Account Modal & Auth State
  const [accountOpen, setAccountOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Elegant drop-down entrance on page refresh / mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // ScrollSpy: Determine active section
      const scrollPos = window.scrollY + 200;
      const sectionIds = ["hero", "vehicles", "services", "about", "pricing", "contact"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Hotkey listener (Ctrl/Cmd + K for quick search, Esc to close modals)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setAccountOpen(false);
        setUserDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Autofocus input on search modal open
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 150);
    }
  }, [searchOpen]);

  // Smooth scroll handler with highlight pulse
  const scrollToSection = (id: string) => {
    setOpen(false);
    setUserDropdownOpen(false);
    setActiveSection(id);

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Jump to SearchBar and flash indicator
  const jumpToSearchBar = () => {
    setSearchOpen(false);
    const searchBar = document.getElementById("search");
    if (searchBar) {
      searchBar.scrollIntoView({ behavior: "smooth" });
      searchBar.classList.add("ring-4", "ring-lime-400", "scale-[1.01]", "transition-all", "duration-500");
      setTimeout(() => {
        searchBar.classList.remove("ring-4", "ring-lime-400", "scale-[1.01]");
      }, 2000);
    }
  };

  // Handle Demo Login
  const handleDemoLogin = () => {
    setUser({
      name: "Alexander Wright",
      email: "alex.wright@zentrix.vip",
      tier: "Black Diamond VIP",
      memberId: "ZTX-99042",
      activeBooking: "Porsche 911 Carrera (Oct 24 - 28)",
    });
    setAccountOpen(false);
    showNotification("Welcome back, Alexander! VIP privileges active.");
  };

  // Handle Standard Login Submit
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    const displayName = emailInput.split("@")[0].replace(/[._-]/g, " ");
    const formattedName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    setUser({
      name: formattedName || "VIP Driver",
      email: emailInput,
      tier: "Gold Reserve",
      memberId: `ZTX-${Math.floor(10000 + Math.random() * 90000)}`,
      activeBooking: "BMW M4 Competition",
    });
    setAccountOpen(false);
    setEmailInput("");
    setPasswordInput("");
    showNotification(`Signed in successfully as ${formattedName || "VIP Driver"}!`);
  };

  const handleLogout = () => {
    setUser(null);
    setUserDropdownOpen(false);
    showNotification("You have been signed out.");
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Filter vehicles in search modal
  const filteredVehicles = searchableVehicles.filter((v) => {
    const matchesQuery =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" ||
      v.category.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 left-1/2 z-[110] -translate-x-1/2 rounded-full border border-lime-400/30 bg-slate-900/95 px-6 py-2.5 text-sm font-medium text-lime-400 shadow-2xl backdrop-blur-md animate-bounce">
          <span className="mr-2">✦</span> {notification}
        </div>
      )}

      {/* Floating Header */}
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-[1600ms] ease-luxury ${
          mounted
            ? "translate-y-0 opacity-100 blur-0 scale-100"
            : "-translate-y-16 opacity-0 blur-xs scale-95"
        }`}
      >
        <nav
          className={`w-full max-w-7xl rounded-full border transition-all duration-500 ease-luxury ${
            scrolled
              ? "border-white/15 bg-black/45 px-6 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
              : "border-white/10 bg-black/20 px-6 py-3 shadow-lg backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between">

            {/* Brand Logo Button */}
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              aria-label="ZentriX Home"
              className={`transition-all duration-[1400ms] delay-150 ease-luxury hover:scale-105 cursor-pointer ${
                mounted ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
              }`}
            >
              <ZXLogo size="sm" showWordmark={true} />
            </button>

            {/* Desktop Navigation Links */}
            <div
              className={`hidden items-center gap-7 md:flex transition-all duration-[1400ms] delay-250 ease-luxury ${
                mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-lime-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                      isActive ? "text-white font-semibold" : "text-slate-300"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-lime-400 shadow-sm shadow-lime-400/50 transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div
              className={`hidden items-center gap-5 md:flex transition-all duration-[1400ms] delay-350 ease-luxury ${
                mounted ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              {/* Search Icon Button */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search Vehicles"
                title="Search (Ctrl + K)"
                className="group relative flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-slate-300 transition-all duration-300 hover:border-lime-400/60 hover:bg-white/15 hover:text-lime-400 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 active:scale-95 cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors duration-200">Search</span>
                <kbd className="ml-1 hidden lg:inline-block rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 border border-white/10 group-hover:border-lime-400/40 group-hover:text-lime-400 transition-colors">
                  ⌘K
                </kbd>
              </button>

              {/* User / Account Button */}
              <div className="relative">
                {user ? (
                  <button
                    type="button"
                    onClick={() => setUserDropdownOpen((prev) => !prev)}
                    aria-label="User profile"
                    className="flex items-center gap-2 rounded-full border border-lime-400/50 bg-lime-400/10 px-3 py-1 text-sm font-semibold text-lime-400 transition-all duration-300 hover:bg-lime-400/20 hover:scale-105 active:scale-95 shadow-md shadow-lime-400/10 hover:shadow-lime-400/30"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-lime-400 text-xs font-bold text-black transition-transform duration-300 hover:rotate-12">
                      {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <span className="max-w-[80px] truncate text-xs text-white">{user.name.split(" ")[0]}</span>
                    <svg
                      className={`h-3 w-3 transition-transform duration-300 ${userDropdownOpen ? "rotate-180 text-lime-400" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setAccountOpen(true)}
                    aria-label="Account Login"
                    title="VIP Portal / Sign In"
                    className="group grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-lime-400/60 hover:bg-white/15 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-lime-400/20 active:scale-95 cursor-pointer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:scale-115 group-hover:text-lime-400"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </button>
                )}

                {/* VIP User Dropdown */}
                {userDropdownOpen && user && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95">
                    <div className="border-b border-white/10 pb-3">
                      <p className="text-sm font-semibold text-white">{user.name}</p>
                      <p className="text-xs text-slate-400">{user.email}</p>
                      <span className="mt-1.5 inline-block rounded-md bg-lime-400/10 px-2 py-0.5 text-[10px] font-bold text-lime-400 border border-lime-400/30">
                        {user.tier}
                      </span>
                    </div>

                    <div className="my-3 space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Member ID:</span>
                        <span className="font-mono text-white">{user.memberId}</span>
                      </div>
                      {user.activeBooking && (
                        <div>
                          <span className="text-slate-400">Current Booking:</span>
                          <p className="font-medium text-lime-400">{user.activeBooking}</p>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-white/10 pt-3 space-y-1">
                      <button
                        type="button"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          scrollToSection("pricing");
                        }}
                        className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-200 hover:translate-x-1"
                      >
                        Upgrade Membership &rarr;
                      </button>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full text-left rounded-lg px-2 py-1.5 text-xs text-red-400 hover:bg-red-500/10 transition-all duration-200 hover:translate-x-1"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Now Button */}
              <button
                type="button"
                onClick={() => scrollToSection("pricing")}
                className="shimmer-effect rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-400/30 active:scale-95 cursor-pointer"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className={`grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden transition-all duration-300 hover:border-lime-400 hover:text-lime-400 hover:scale-110 active:scale-90 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {open && (
            <div className="mt-4 border-t border-white/10 pt-4 pb-2 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className={`text-left text-sm font-medium py-1.5 transition-all duration-200 hover:translate-x-2 ${
                        isActive ? "text-lime-400 font-semibold" : "text-slate-300 hover:text-lime-400"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}

                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        setSearchOpen(true);
                      }}
                      aria-label="Search"
                      className="group grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-lime-400 hover:text-lime-400 hover:scale-110 active:scale-95"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        if (user) {
                          setUserDropdownOpen(true);
                        } else {
                          setAccountOpen(true);
                        }
                      }}
                      aria-label="Account"
                      className="group grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-lime-400 hover:text-lime-400 hover:scale-110 active:scale-95"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:scale-115"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToSection("pricing")}
                    className="shimmer-effect rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105 active:scale-95 shadow-lg shadow-lime-400/20"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* QUICK SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-20 backdrop-blur-md sm:pt-28">
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Search Input */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-lime-400 animate-pulse"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, categories, or pricing (e.g. Porsche, Exotic)..."
                className="w-full bg-transparent text-base text-white placeholder-slate-400 focus:outline-none sm:text-lg"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white hover:rotate-90 hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quick Filter Categories */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["All", "Sports", "Coupe", "Sedan", "SUV", "Electric"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedFilter(tag)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                    selectedFilter === tag
                      ? "bg-lime-400 text-black shadow-sm shadow-lime-400/30"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white hover:border-white/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Vehicle Results List */}
            <div className="mt-5 max-h-72 overflow-y-auto space-y-2.5 pr-1">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.name}
                    onClick={() => {
                      setSearchOpen(false);
                      scrollToSection(vehicle.targetId);
                    }}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:border-lime-400/50 hover:bg-white/[0.08] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lime-400/10 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="h-12 w-16 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-white group-hover:text-lime-400 transition-colors">
                            {vehicle.name}
                          </h4>
                          <span className="rounded bg-lime-400/10 px-1.5 py-0.5 text-[10px] font-bold text-lime-400 group-hover:bg-lime-400/20 transition-colors">
                            {vehicle.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">{vehicle.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-lime-400">{vehicle.price}</p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-lime-400 transition-colors">
                        View Car <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-sm text-slate-400">
                  No vehicles found matching &ldquo;{searchQuery}&rdquo;.
                </div>
              )}
            </div>

            {/* Jump to Filter Bar CTA */}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-slate-400">Looking for pickup dates & locations?</span>
              <button
                type="button"
                onClick={jumpToSearchBar}
                className="group inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-3.5 py-1.5 text-xs font-semibold text-lime-400 hover:bg-lime-400 hover:text-black hover:scale-105 hover:shadow-md hover:shadow-lime-400/20 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Jump to Booking Bar</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transition-transform duration-200 group-hover:translate-y-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ACCOUNT / VIP PORTAL MODAL */}
      {accountOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md">
          <div
            className="relative w-full max-w-md rounded-3xl border border-white/15 bg-slate-900/95 p-7 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setAccountOpen(false)}
              className="absolute top-5 right-5 rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white hover:rotate-90 hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Brand Logo & Title */}
            <div className="text-center flex flex-col items-center">
              <ZXLogo size="lg" />
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">ZentriX VIP Portal</h3>
              <p className="mt-1 text-xs text-slate-400">Access your luxury bookings and exclusive privileges</p>
            </div>

            {/* Tabs: Sign In / Create VIP Account */}
            <div className="mt-6 flex rounded-xl bg-white/5 p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setAuthTab("signin")}
                className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  authTab === "signin"
                    ? "bg-lime-400 text-black shadow-md scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setAuthTab("signup")}
                className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  authTab === "signup"
                    ? "bg-lime-400 text-black shadow-md scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                VIP Membership
              </button>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="driver@zentrix.vip"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium text-slate-300">Password</label>
                  <a href="#" onClick={(e) => { e.preventDefault(); showNotification("Password reset email dispatched."); }} className="text-[11px] text-lime-400 hover:underline">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20"
                />
              </div>

              <button
                type="submit"
                className="shimmer-effect w-full rounded-xl bg-lime-400 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-lime-300 hover:scale-[1.02] shadow-lg shadow-lime-400/20 hover:shadow-lime-400/40 active:scale-98 cursor-pointer"
              >
                {authTab === "signin" ? "Sign In to Portal" : "Join ZentriX VIP"}
              </button>
            </form>

            {/* Quick Demo Login Option */}
            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="inline-flex items-center gap-2 text-xs font-medium text-lime-400 hover:text-lime-300 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <span>⚡ Instant VIP Demo Login (Alexander Wright)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}