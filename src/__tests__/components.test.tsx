import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ChaseHorseLogo } from "../components/brand/ChaseHorseLogo";

describe("ChaseHorseLogo Component", () => {
  it("renders the ChaseHorse brand logo with correct alt text", () => {
    render(<ChaseHorseLogo variant="dark" size="md" />);
    const logoImg = screen.getByAltText("ChaseHorse — Growth Enabling Logiworkx Partner");
    expect(logoImg).toBeDefined();
    expect(logoImg.getAttribute("src")).toContain("chasehorse-brand-logo.png");
  });

  it("applies light variant styling for dark backgrounds", () => {
    render(<ChaseHorseLogo variant="light" size="lg" />);
    const logoImg = screen.getByAltText("ChaseHorse — Growth Enabling Logiworkx Partner");
    expect(logoImg.className).toContain("invert");
  });
});
