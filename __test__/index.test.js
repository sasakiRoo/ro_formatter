import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import chalk from "chalk";
import ro_formatted from "./index.js";

chalk.level = 0;

describe("ro_formatted (current behavior)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-12-15"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("valid input", () => {
    it("returns formatted string with default format", () => {
      const result = ro_formatted(6, "default");
      expect(result).toMatch(/^[a-z]{6}_15\/12\/2024$/);
    });

    it("returns formatted string with usa format", () => {
      const result = ro_formatted(6, "usa");
      expect(result).toMatch(/^[a-z]{6}_12\/15\/2024$/);
    });

    it("uses default parameters", () => {
      const result = ro_formatted();
      expect(result).toMatch(/^[a-z]{6}_15\/12\/2024$/);
    });

    it("generates correct string length", () => {
      const result = ro_formatted(8, "default");
      expect(result.split("_")[0]).toHaveLength(8);
    });

    it("random string only contains lowercase letters", () => {
      const random = ro_formatted(6).split("_")[0];
      expect(random).toMatch(/^[a-z]+$/);
    });
  });

  describe("type validation errors", () => {
    it("throws error when str_length is not number", () => {
      expect(() => ro_formatted("6", "default")).toThrow(/should be number/);
    });

    it("throws error when chosen_date_format is not string", () => {
      expect(() => ro_formatted(6, 123)).toThrow(/should be string/);
    });

    it("throws combined type errors", () => {
      expect(() => ro_formatted("6", 123)).toThrow(
        /should be number.*should be string/
      );
    });
  });

  describe("value validation errors", () => {
    it("throws error when str_length < 6", () => {
      expect(() => ro_formatted(5, "default")).toThrow(/6 and 8/);
    });

    it("throws error when str_length > 8", () => {
      expect(() => ro_formatted(9, "usa")).toThrow(/6 and 8/);
    });

    it("throws error when date format is invalid", () => {
      expect(() => ro_formatted(6, "brit")).toThrow(/is not accepted/);
    });

    it("throws combined value errors", () => {
      expect(() => ro_formatted(9, "brit")).toThrow(/6 and 8.*is not accepted/);
    });
  });

  describe("randomness", () => {
    it("generates different results on multiple calls", () => {
      const results = new Set();
      for (let i = 0; i < 10; i++) {
        results.add(ro_formatted(6, "default"));
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });
});
