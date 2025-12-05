import { describe, it, expect } from "vitest";
import uuid from "../../src/uuid";

describe("uuid", () => {
  describe("format", () => {
    it("should return a string", () => {
      const result = uuid();
      expect(typeof result).toBe("string");
    });

    it("should match standard uuid format 8-4-4-4-12", () => {
      const result = uuid();
      expect(result).toMatch(
        /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
      );
    });

    it("should have correct segment lengths", () => {
      const result = uuid();
      const segments = result.split("-");
      expect(segments).toHaveLength(5);
      expect(segments[0]).toHaveLength(8);
      expect(segments[1]).toHaveLength(4);
      expect(segments[2]).toHaveLength(4);
      expect(segments[3]).toHaveLength(4);
      expect(segments[4]).toHaveLength(12);
    });

    it("should contain only lowercase hex characters", () => {
      const result = uuid();
      expect(result).toMatch(/^[a-f0-9\-]+$/);
    });

    it("should contain exactly 4 hyphens", () => {
      const result = uuid();
      expect((result.match(/-/g) || []).length).toBe(4);
    });

    it("should have total length of 36 characters", () => {
      const result = uuid();
      expect(result).toHaveLength(36);
    });
  });

  describe("randomness", () => {
    it("should generate unique uuids on multiple calls", () => {
      const uuids = new Set();
      for (let i = 0; i < 100; i++) {
        uuids.add(uuid());
      }
      expect(uuids.size).toBe(100);
    });

    it("should not generate the same uuid twice in succession", () => {
      const first = uuid();
      const second = uuid();
      expect(first).not.toBe(second);
    });

    it("should vary across multiple segments", () => {
      const results = Array.from({ length: 10 }, () => uuid());
      const firstSegments = new Set(results.map((u) => u.split("-")[0]));
      const secondSegments = new Set(results.map((u) => u.split("-")[1]));
      const lastSegments = new Set(results.map((u) => u.split("-")[4]));

      expect(firstSegments.size).toBeGreaterThan(1);
      expect(secondSegments.size).toBeGreaterThan(1);
      expect(lastSegments.size).toBeGreaterThan(1);
    });
  });

  describe("character distribution", () => {
    it("should use hex characters from a-f and 0-9", () => {
      const result = uuid();
      const validChars = new Set("abcdef0123456789-".split(""));
      const resultChars = new Set(result.split(""));
      for (const char of resultChars) {
        expect(validChars.has(char)).toBe(true);
      }
    });

    it("should contain digits in generated uuids", () => {
      const results = Array.from({ length: 20 }, () => uuid());
      const hasDigits = results.some((u) => /\d/.test(u));
      expect(hasDigits).toBe(true);
    });

    it("should contain letters in generated uuids", () => {
      const results = Array.from({ length: 20 }, () => uuid());
      const hasLetters = results.some((u) => /[a-f]/.test(u));
      expect(hasLetters).toBe(true);
    });
  });

  describe("no parameters", () => {
    it("should work without any parameters", () => {
      expect(() => uuid()).not.toThrow();
    });

    it("should ignore any passed parameters", () => {
      const result1 = uuid();
      const result2 = uuid("ignored");
      expect(typeof result1).toBe("string");
      expect(typeof result2).toBe("string");
      expect(result1).toMatch(
        /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
      );
      expect(result2).toMatch(
        /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
      );
    });
  });

  describe("consistency checks", () => {
    it("should always start with 8 hex characters", () => {
      for (let i = 0; i < 50; i++) {
        const result = uuid();
        expect(result.substring(0, 8)).toMatch(/^[a-f0-9]{8}$/);
      }
    });

    it("should always have hyphens at correct positions", () => {
      for (let i = 0; i < 50; i++) {
        const result = uuid();
        expect(result.charAt(8)).toBe("-");
        expect(result.charAt(13)).toBe("-");
        expect(result.charAt(18)).toBe("-");
        expect(result.charAt(23)).toBe("-");
      }
    });

    it("should always have correct structure", () => {
      for (let i = 0; i < 50; i++) {
        const result = uuid();
        const segments = result.split("-");
        expect(segments.length).toBe(5);
        expect(segments[0].length).toBe(8);
        expect(segments[1].length).toBe(4);
        expect(segments[2].length).toBe(4);
        expect(segments[3].length).toBe(4);
        expect(segments[4].length).toBe(12);
      }
    });
  });
});
