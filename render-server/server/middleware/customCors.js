import cors from "cors";

const customCors = (whitelist) => {
  const options = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(false, false);
      }
    },
  };
  return cors(options);
};

export default customCors;
