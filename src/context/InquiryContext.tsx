import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "../types/product";

type InquiryItem = {
  product: Product;
  quantity: number;
};

type InquiryContextType = {
  items: InquiryItem[];
  addToInquiry: (product: Product) => void;
  removeFromInquiry: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearInquiry: () => void;
  totalItems: number;
};

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<InquiryItem[]>([]);

  const addToInquiry = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const removeFromInquiry = (productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearInquiry = () => {
    setItems([]);
  };

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  return (
    <InquiryContext.Provider
      value={{
        items,
        addToInquiry,
        removeFromInquiry,
        updateQuantity,
        clearInquiry,
        totalItems,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);

  if (!context) {
    throw new Error("useInquiry must be used inside InquiryProvider");
  }

  return context;
};