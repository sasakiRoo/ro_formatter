/**
 * uuid generators
 * @returns {string}
 */
const uuid = () => {
  /**
   * @param {number} length
   * @returns {string}
   */
  const r = (length) => {
    const letters = "abcdef0123456789";
    return Array.from(
      { length },
      () => letters[Math.floor(Math.random() * letters.length)]
    ).join("");
  };
  //8-4-4-4-12
  return `${r(8)}-${r(4)}-${r(4)}-${r(4)}-${r(12)}`;
};

export default uuid;
