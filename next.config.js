module.exports = {
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Content-Type", value: "text/html" }],
      },
    ];
  },
  output: 'export', // Static HTML export
  // Other config options you might need
};
  