exports.format = (msgs) =>
  Object.entries(msgs).reduce(
    (acc, [id, msg]) => ({
      ...acc,
      [id]: msg.defaultMessage,
    }),
    {}
  );
