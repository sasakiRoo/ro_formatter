import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ro_formatted from "./index.js";

describe("ro_formatted", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-12-15"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("valid inputs", () => {
    it("should return formatted string with default date format", () => {
      const result = ro_formatted(6, "default");
      expect(result).toMatch(/^[a-z]{6}_15\/12\/2024$/);
    });

    it("should return formatted string with usa date format", () => {
      const result = ro_formatted(6, "usa");
      expect(result).toMatch(/^[a-z]{6}_12\/15\/2024$/);
    });

    it("should use default parameters when none provided", () => {
      const result = ro_formatted();
      expect(result).toMatch(/^[a-z]{6}_15\/12\/2024$/);
    });

    it("should generate 6 character random string", () => {
      const result = ro_formatted(6);
      const parts = result.split("_");
      expect(parts[0]).toHaveLength(6);
    });

    it("should generate 7 character random string", () => {
      const result = ro_formatted(7);
      const parts = result.split("_");
      expect(parts[0]).toHaveLength(7);
    });

    it("should generate 8 character random string", () => {
      const result = ro_formatted(8);
      const parts = result.split("_");
      expect(parts[0]).toHaveLength(8);
    });

    it("should only contain lowercase letters in random string", () => {
      const result = ro_formatted(6);
      const randomPart = result.split("_")[0];
      expect(randomPart).toMatch(/^[a-z]+$/);
    });
  });

  describe("invalid str_length parameter", () => {
    it("should throw error when str_length is less than 6", () => {
      expect(() => ro_formatted(5, "default")).toThrow(/should start from 6/);
    });

    it("should throw error when str_length is greater than 8", () => {
      expect(() => ro_formatted(9, "usa")).toThrow(
        /should never start above 8/
      );
    });

    it("should throw error when str_length is not a number", () => {
      expect(() => ro_formatted("6", "default")).toThrow(/should be number/);
    });

    it("should throw error when str_length is null", () => {
      expect(() => ro_formatted(null, "default")).toThrow(/should be number/);
    });

    it("should throw error when str_length is object", () => {
      expect(() => ro_formatted({}, "default")).toThrow(/should be number/);
    });
  });

  describe("invalid chosen_date_format parameter", () => {
    it("should throw error for invalid format", () => {
      expect(() => ro_formatted(6, "brit")).toThrow(
        /format brit is not accepted/
      );
    });

    it("should throw error when chosen_date_format is not a string", () => {
      expect(() => ro_formatted(6, 123)).toThrow(/should be string/);
    });

    it("should throw error when chosen_date_format is null", () => {
      expect(() => ro_formatted(6, null)).toThrow(/should be string/);
    });

    it("should throw error when chosen_date_format is object", () => {
      expect(() => ro_formatted(6, {})).toThrow(/should be string/);
    });
  });

  describe("multiple invalid parameters", () => {
    it("should throw error combining both parameter errors", () => {
      expect(() => ro_formatted("6", 123)).toThrow(
        /should be number.*should be string/
      );
    });

    it("should throw error when both parameters are wrong type", () => {
      expect(() => ro_formatted([], null)).toThrow();
    });
  });

  describe("edge cases", () => {
    it("should accept str_length exactly 6", () => {
      const result = ro_formatted(6, "default");
      expect(result).toMatch(/^[a-z]{6}_15\/12\/2024$/);
    });

    it("should accept str_length exactly 8", () => {
      const result = ro_formatted(8, "default");
      expect(result).toMatch(/^[a-z]{8}_15\/12\/2024$/);
    });

    it("should accept correct length and usa format", () => {
      const result = ro_formatted(8, "usa");
      expect(result).toMatch(/^[a-z]{8}_12\/15\/2024$/);
    });

    it("should have correct format structure", () => {
      const result = ro_formatted(6, "default");
      const parts = result.split("_");
      expect(parts).toHaveLength(2);
      expect(parts[1]).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
    });
  });

  describe("randomness", () => {
    it("should generate different strings on multiple calls", () => {
      const results = new Set();
      for (let i = 0; i < 10; i++) {
        results.add(ro_formatted(6, "default"));
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });
});
