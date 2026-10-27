import { describe, it, expect } from "vitest";
import { formatCurrency, calculateDistanceMeters } from "../lib/utils";

describe("Utility Functions", () => {
  it("formats Indian Rupee currency correctly", () => {
    expect(formatCurrency(450)).toBe("₹450");
    expect(formatCurrency(50000)).toBe("₹50,000");
  });

  it("calculates geographic distance in meters", () => {
    // Distance between Indiranagar 100ft road and nearby point (~150m)
    const dist = calculateDistanceMeters(12.9716, 77.6412, 12.9725, 77.6418);
    expect(dist).toBeGreaterThan(50);
    expect(dist).toBeLessThan(250);
  });
});

