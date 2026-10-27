"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { toast } from "sonner";
import { 
  ShoppingBag, 
  Plus, 
  Trash2, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  X
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

interface GearItem {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  desc: string;
  badge?: string;
  img: string;
}

interface CartItem extends GearItem {
  qty: number;
}

export default function MerchandisePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const gearItems: GearItem[] = [
    {
      id: "gear-1",
      name: "High-Vis Operational Safety Vest",
      price: 899,
      category: "PPE & Safety",
      rating: 4.9,
      badge: "MANDATORY ON DOCKS",
      desc: "Industrial-grade reflective 3M stripes with reinforced chest walkie-talkie and badge loops.",
      img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "gear-2",
      name: "Rugged Waterproof Field Tablet Case",
      price: 1499,
      category: "Hardware Enclosures",
      rating: 4.8,
      badge: "DROP-PROOF 2M",
      desc: "MIL-STD-810G shock resistance with adjustable rotating hand-strap for seamless touchscreen audits.",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "gear-3",
      name: "Bluetooth Mobile Thermal Waybill Printer",
      price: 3299,
      category: "Field Electronics",
      rating: 4.95,
      badge: "FAST 90MM/S",
      desc: "Instant belt-clip thermal printing for cargo intake barcodes, receiving receipts, and returns slips.",
      img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "gear-4",
      name: "Logiworkx Insulated All-Weather Windbreaker",
      price: 2199,
      category: "Apparel",
      rating: 4.85,
      desc: "Thermal cold-store fleece lining engineered for sub-zero refrigerated cross-dock inspection work.",
      img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "gear-5",
      name: "Ergonomic RFID & Barcode Scanner Holster",
      price: 749,
      category: "Accessories",
      rating: 4.75,
      desc: "Ballistic nylon holster compatible with Zebra and Honeywell handheld terminals.",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "gear-6",
      name: "Heavy-Duty Steel-Toe Yard Safety Boots",
      price: 2899,
      category: "PPE & Safety",
      rating: 4.9,
      badge: "ANTI-PUNCTURE",
      desc: "IS 15298 certified safety toe with oil-resistant non-slip tread for container freight terminals.",
      img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500&auto=format&fit=crop&q=80",
    },
  ];

  const addToCart = (item: GearItem) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
    toast.success(`Added to gear kit: ${item.name}`);
    setCartDrawerOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setCart([]);
    toast.success("Order Placed Successfully", {
      description: "Dispatch tracking code sent to your registered field mobile.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#D8D4CB] gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Field Operations Equipment
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111]">
                ChaseHorse Gear &amp; Terminal Store
              </h1>
              <p className="mt-2 text-sm text-[#62666D]">
                Certified equipment, high-visibility apparel, and rugged mobile accessories built for ground-truth execution.
              </p>
            </div>

            <button
              onClick={() => setCartDrawerOpen(true)}
              className="px-4 py-2 bg-[#111111] hover:bg-black text-white text-xs font-mono font-bold rounded-lg shadow-sm flex items-center gap-2 self-start sm:self-auto"
            >
              <ShoppingBag className="w-4 h-4 text-[#F45116]" />
              <span>Cart ({cart.reduce((sum, i) => sum + i.qty, 0)})</span>
            </button>
          </div>

          {/* Grid of Gear Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-[#62666D]">{item.category}</span>
                    {item.badge && (
                      <span className="bg-[#FDF6E8] text-[#F45116] px-2 py-0.5 rounded text-[10px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-heading font-bold text-[#111111] group-hover:text-[#F45116] transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8D4CB] flex items-center justify-between">
                  <div>
                    <div className="text-lg font-heading font-extrabold text-[#111111]">
                      {formatCurrency(item.price)}
                    </div>
                    <div className="text-[10px] font-mono text-[#0B8059]">★ {item.rating} Vetted</div>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 active:scale-95 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Kit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Cart Drawer Modal */}
      {cartDrawerOpen && (
        <div
          onClick={() => setCartDrawerOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#F45116]" />
                  <h3 className="text-lg font-heading font-bold text-[#111111]">
                    Field Kit Cart ({cart.length})
                  </h3>
                </div>
                <button onClick={() => setCartDrawerOpen(false)} className="p-1 text-[#62666D]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {checkoutComplete ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#0B8059] mx-auto mb-3" />
                  <h4 className="text-base font-heading font-bold text-[#111111]">
                    Gear Order Confirmed
                  </h4>
                  <p className="text-xs text-[#62666D] mt-1">
                    Your equipment will be dispatched directly to your registered local hub in 24 hours.
                  </p>
                  <button
                    onClick={() => setCheckoutComplete(false)}
                    className="mt-6 px-5 py-2 bg-[#111111] text-white text-xs font-mono font-bold rounded-lg"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="py-12 text-center text-xs text-[#62666D]">
                  Your field gear cart is currently empty.
                </div>
              ) : (
                <div className="divide-y divide-[#D8D4CB] py-4 space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="pt-3 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-heading font-bold text-[#111111]">{item.name}</div>
                        <div className="font-mono text-[11px] text-[#62666D]">
                          Qty: {item.qty} × {formatCurrency(item.price)}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-[#111111]">
                          {formatCurrency(item.price * item.qty)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#C83B36] p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && !checkoutComplete && (
              <div className="pt-4 border-t border-[#D8D4CB] space-y-4">
                <div className="flex items-center justify-between text-sm font-mono">
                  <span className="text-[#62666D]">Kit Subtotal:</span>
                  <span className="text-xl font-heading font-bold text-[#111111]">
                    {formatCurrency(cartTotal)}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#0B8059] bg-[#E7F6F0] p-2 rounded text-center">
                  ✓ Free Pan-India Delivery to All Partner Hubs
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white font-semibold rounded-xl shadow-md text-xs flex items-center justify-center gap-2"
                >
                  <span>Complete Field Kit Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
